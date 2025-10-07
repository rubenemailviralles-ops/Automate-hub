import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, DollarSign, TrendingUp } from 'lucide-react';

const Calculator = () => {
  const [employees, setEmployees] = useState(5);
  const [salary, setSalary] = useState(8500);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  // Calculate costs
  const hourlyRate = salary / 52 / hoursPerWeek;
  const weeklyManualCost = employees * hourlyRate * hoursPerWeek;
  const monthlyManualCost = weeklyManualCost * 4.33;
  const annualManualCost = weeklyManualCost * 52;
  
  // 75% savings with AI automation
  const annualSavings = annualManualCost * 0.75;
  const monthlySavings = annualSavings / 12;
  const weeklySavings = annualSavings / 52;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 seamless-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
            <CalculatorIcon className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-400 font-medium">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
            Calculate Your Potential Savings
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
            See how much you could save by automating manual processes with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-green-400" />
              Your Current Situation
            </h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-white font-medium mb-3">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${employees}%, rgba(255,255,255,0.2) ${employees}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors"
                  min="1"
                  max="100"
                />
                <div className="mt-2 text-sm text-gray-400">{employees} employees</div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Average Annual Salary
                </label>
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  step="1000"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${((salary - 10000) / 190000) * 100}%, rgba(255,255,255,0.2) ${((salary - 10000) / 190000) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">$</span>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Math.max(10000, Math.min(200000, parseInt(e.target.value) || 10000)))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-8 pr-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors"
                    min="10000"
                    max="200000"
                    step="1000"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-400">{formatCurrency(salary)} per year</div>
              </div>

              <div>
                <label className="block text-white font-medium mb-3">
                  Manual Hours Per Week (Per Employee)
                </label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <input
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Math.max(1, Math.min(60, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors"
                  min="1"
                  max="60"
                />
                <div className="mt-2 text-sm text-gray-400">{hoursPerWeek} hours/week</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Current Costs */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Annual Cost of Manual Processes
              </h3>
              <div className="text-5xl font-bold text-white mb-4">
                {formatCurrency(annualManualCost)}
              </div>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400">Monthly</div>
                  <div className="text-xl font-semibold">{formatCurrency(monthlyManualCost)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Weekly</div>
                  <div className="text-xl font-semibold">{formatCurrency(weeklyManualCost)}</div>
                </div>
              </div>
            </div>

            {/* Potential Savings */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-2xl p-8 animate-pulse-slow">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-green-400" />
                Potential Annual Savings with AI Automation
              </h3>
              <div className="text-sm text-green-400 mb-4">Save up to 75% on manual processes</div>
              <div className="text-5xl font-bold text-green-400 mb-4">
                {formatCurrency(annualSavings)}
              </div>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400">Monthly Savings</div>
                  <div className="text-xl font-semibold text-green-400">{formatCurrency(monthlySavings)}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Weekly Savings</div>
                  <div className="text-xl font-semibold text-green-400">{formatCurrency(weeklySavings)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
              <p className="text-gray-400 text-sm">
                🚀 Start automating today and see real results in weeks, not months
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

