import React, { useState } from 'react';
import { TrendingDown, DollarSign, Users, Clock } from 'lucide-react';

const RevenueLossCalculator = () => {
  const [employees, setEmployees] = useState(10);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [manualHours, setManualHours] = useState(10);

  const hourlyRate = avgSalary / 2080;
  const weeklyLoss = employees * hourlyRate * manualHours;
  const monthlyLoss = weeklyLoss * 4.33;
  const yearlyLoss = monthlyLoss * 12;
  const potentialSavings = yearlyLoss * 0.75;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-16 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6">
              <TrendingDown className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-medium">Revenue Loss Calculator</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Calculate What Manual Processes Are Costing You
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See how much money you're losing without AI automation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <label className="flex items-center text-white font-medium mb-4">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="mt-2 text-right">
                  <span className="text-2xl font-bold text-white">{employees}</span>
                  <span className="text-gray-400 ml-2">employees</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <label className="flex items-center text-white font-medium mb-4">
                  <DollarSign className="w-5 h-5 mr-2 text-green-400" />
                  Average Annual Salary
                </label>
                <input
                  type="range"
                  min="30000"
                  max="150000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="mt-2 text-right">
                  <span className="text-2xl font-bold text-white">{formatCurrency(avgSalary)}</span>
                  <span className="text-gray-400 ml-2">per year</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <label className="flex items-center text-white font-medium mb-4">
                  <Clock className="w-5 h-5 mr-2 text-purple-400" />
                  Manual Hours Per Week (Per Employee)
                </label>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={manualHours}
                  onChange={(e) => setManualHours(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="mt-2 text-right">
                  <span className="text-2xl font-bold text-white">{manualHours}</span>
                  <span className="text-gray-400 ml-2">hours/week</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border-2 border-red-500/30 rounded-2xl p-8 text-center">
                <p className="text-gray-400 mb-2">Annual Cost of Manual Processes</p>
                <div className="text-5xl md:text-6xl font-bold text-white mb-6">
                  {formatCurrency(yearlyLoss)}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-1">Monthly</p>
                    <p className="text-xl font-bold text-white">{formatCurrency(monthlyLoss)}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-gray-400 mb-1">Weekly</p>
                    <p className="text-xl font-bold text-white">{formatCurrency(weeklyLoss)}</p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
                    <p className="text-sm text-gray-400 mb-2">Potential Annual Savings with AI Automation</p>
                    <div className="text-4xl font-bold text-green-400">
                      {formatCurrency(potentialSavings)}
                    </div>
                    <p className="text-sm text-gray-400 mt-2">Based on 75% time reduction</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-400 text-sm mt-6">
                These calculations are estimates based on industry averages. Actual savings may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueLossCalculator;
