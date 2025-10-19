import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, MousePointer, Target, Play, Pause, Square } from 'lucide-react';
import { abTesting, ABTest, ABTestAnalytics } from '../utils/abTesting';

/**
 * A/B Testing Dashboard Component
 * 
 * This dashboard provides:
 * - Real-time analytics for A/B tests
 * - Test management (start, pause, complete)
 * - Performance comparison between variations
 * - Statistical significance indicators
 */

const ABTestDashboard: React.FC = () => {
  const [tests, setTests] = useState<ABTest[]>([]);
  const [analytics, setAnalytics] = useState<{ [testId: string]: ABTestAnalytics }>({});
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  useEffect(() => {
    loadTests();
  }, []);

  const loadTests = () => {
    const activeTests = abTesting.getActiveTests();
    setTests(activeTests);
    
    // Load analytics for each test
    const newAnalytics: { [testId: string]: ABTestAnalytics } = {};
    activeTests.forEach(test => {
      const testAnalytics = abTesting.getTestAnalytics(test.id);
      if (testAnalytics) {
        newAnalytics[test.id] = testAnalytics;
      }
    });
    setAnalytics(newAnalytics);
  };

  const handleTestAction = (testId: string, action: 'pause' | 'complete') => {
    if (action === 'pause') {
      abTesting.pauseTest(testId);
    } else if (action === 'complete') {
      abTesting.completeTest(testId);
    }
    loadTests();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'paused': return 'text-yellow-400 bg-yellow-400/20';
      case 'completed': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSignificanceLevel = (controlRate: number, variationRate: number, sampleSize: number) => {
    if (sampleSize < 100) return 'Insufficient data';
    
    const difference = Math.abs(variationRate - controlRate);
    const standardError = Math.sqrt((controlRate * (1 - controlRate) + variationRate * (1 - variationRate)) / Math.sqrt(sampleSize);
    const zScore = difference / standardError;
    
    if (zScore > 2.58) return '99% confidence';
    if (zScore > 1.96) return '95% confidence';
    if (zScore > 1.65) return '90% confidence';
    return 'Not significant';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">A/B Testing Dashboard</h1>
          <p className="text-gray-400">Monitor and optimize your conversion rates with data-driven insights</p>
        </div>

        {/* Test Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold">{tests.length}</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Active Tests</h3>
            <p className="text-gray-400 text-sm">Currently running</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-2xl font-bold">
                {Object.values(analytics).reduce((sum, a) => sum + a.totalViews, 0)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Total Views</h3>
            <p className="text-gray-400 text-sm">Across all tests</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <MousePointer className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-2xl font-bold">
                {Object.values(analytics).reduce((sum, a) => sum + a.totalClicks, 0)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Total Clicks</h3>
            <p className="text-gray-400 text-sm">User interactions</p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-2xl font-bold">
                {Object.values(analytics).reduce((sum, a) => sum + a.totalConversions, 0)}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Conversions</h3>
            <p className="text-gray-400 text-sm">Successful actions</p>
          </div>
        </div>

        {/* Test List */}
        <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 overflow-hidden">
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-2xl font-bold mb-2">Active A/B Tests</h2>
            <p className="text-gray-400">Manage and monitor your conversion optimization tests</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-300">Test Name</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Status</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Views</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Conversions</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Conversion Rate</th>
                  <th className="text-left p-4 font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => {
                  const testAnalytics = analytics[test.id];
                  return (
                    <tr key={test.id} className="border-b border-gray-700/30 hover:bg-gray-800/20">
                      <td className="p-4">
                        <div>
                          <h3 className="font-semibold text-white">{test.name}</h3>
                          <p className="text-sm text-gray-400">{test.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(test.status)}`}>
                          {test.status}
                        </span>
                      </td>
                      <td className="p-4 text-white font-semibold">
                        {testAnalytics?.totalViews || 0}
                      </td>
                      <td className="p-4 text-white font-semibold">
                        {testAnalytics?.totalConversions || 0}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-semibold">
                            {testAnalytics?.conversionRate.toFixed(2) || 0}%
                          </span>
                          {testAnalytics && (
                            <TrendingUp className="w-4 h-4 text-green-400" />
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          {test.status === 'active' ? (
                            <button
                              onClick={() => handleTestAction(test.id, 'pause')}
                              className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg hover:bg-yellow-500/30 transition-colors"
                              title="Pause test"
                            >
                              <Pause className="w-4 h-4" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleTestAction(test.id, 'pause')}
                              className="p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                              title="Resume test"
                            >
                              <Play className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => handleTestAction(test.id, 'complete')}
                            className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                            title="Complete test"
                          >
                            <Square className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Analytics */}
        {selectedTest && analytics[selectedTest] && (
          <div className="mt-8 bg-gray-800/30 rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-xl font-bold mb-4">Detailed Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(analytics[selectedTest].variations).map(([variationId, variation]) => (
                <div key={variationId} className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3">Variation {variationId}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Views:</span>
                      <span className="text-white font-semibold">{variation.views}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Clicks:</span>
                      <span className="text-white font-semibold">{variation.clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Conversions:</span>
                      <span className="text-white font-semibold">{variation.conversions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Conversion Rate:</span>
                      <span className="text-white font-semibold">{variation.conversionRate.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">CTR:</span>
                      <span className="text-white font-semibold">{variation.clickThroughRate.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ABTestDashboard;
