import React, { useState, useEffect } from 'react';
import { Calculator as CalculatorIcon, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Calculator = () => {
  const [employees, setEmployees] = useState(5);
  const [salary, setSalary] = useState(8500);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);

  // Calculate costs
  // Assume standard 2080 work hours per year (40 hours/week × 52 weeks)
  const hourlyRate = salary / 2080;
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
    <>
      {/* Desktop version with animations */}
      <section className="hidden xl:block py-8 md:py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <div 
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-full mb-4 md:mb-8 backdrop-blur-sm animate-fade-in"
          >
            <CalculatorIcon className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2" />
            <span className="text-green-400 font-medium text-sm md:text-base">ROI Calculator</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-white animate-fade-in-up">
            Calculate Your Potential Savings
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up delay-200">
            See how much you could save by automating manual processes with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div 
            className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-8 animate-slide-in-left relative"
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center">
              <DollarSign className="w-5 h-5 md:w-6 md:h-6 mr-2 text-green-400" />
              Your Current Situation
            </h3>
            
            <div className="space-y-4 md:space-y-8">
              <div>
                <label className="block text-white font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Number of Employees
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-2 md:mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${employees}%, rgba(255,255,255,0.2) ${employees}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base focus:border-green-400 focus:outline-none transition-colors"
                  min="1"
                  max="100"
                />
                <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">{employees} employees</div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Average Annual Salary
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-2 md:mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${((salary - 1000) / 99000) * 100}%, rgba(255,255,255,0.2) ${((salary - 1000) / 99000) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="relative">
                  <span className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-sm md:text-base">$</span>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Math.max(1000, Math.min(100000, parseInt(e.target.value) || 1000)))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-7 md:pl-8 pr-3 md:pr-4 py-2 md:py-3 text-white text-sm md:text-base focus:border-green-400 focus:outline-none transition-colors"
                    min="1000"
                    max="100000"
                    step="1000"
                  />
                </div>
                <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">{formatCurrency(salary)} per year</div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2 md:mb-3 text-sm md:text-base">
                  Manual Hours Per Week
                </label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider mb-2 md:mb-3"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <input
                  type="number"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Math.max(1, Math.min(60, parseInt(e.target.value) || 1)))}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 md:px-4 md:py-3 text-white text-sm md:text-base focus:border-green-400 focus:outline-none transition-colors"
                  min="1"
                  max="60"
                />
                <div className="mt-1 md:mt-2 text-xs md:text-sm text-gray-400">{hoursPerWeek} hours/week</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-3 md:space-y-6 animate-slide-in-right">
            {/* Current Costs */}
            <div 
              className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/30 rounded-xl md:rounded-2xl p-4 md:p-8 relative"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="text-base md:text-2xl font-bold text-white mb-3 md:mb-6">
                Annual Cost of Manual Processes
              </h3>
              <div className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">
                {formatCurrency(annualManualCost)}
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-gray-300">
                <div>
                  <div className="text-xs md:text-sm text-gray-400">Monthly</div>
                  <div className="text-sm md:text-xl font-semibold">{formatCurrency(monthlyManualCost)}</div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400">Weekly</div>
                  <div className="text-sm md:text-xl font-semibold">{formatCurrency(weeklyManualCost)}</div>
                </div>
              </div>
            </div>

            {/* Potential Savings */}
            <div 
              className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl md:rounded-2xl p-4 md:p-8 animate-pulse-slow relative"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <h3 className="text-base md:text-2xl font-bold text-white mb-2 flex items-center">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 text-green-400" />
                <span className="hidden md:inline">Potential Annual Savings with AI</span>
                <span className="md:hidden">Annual Savings with AI</span>
              </h3>
              <div className="text-xs md:text-sm text-green-400 mb-2 md:mb-4">Save up to 75% on manual processes</div>
              <div className="text-3xl md:text-5xl font-bold text-green-400 mb-3 md:mb-4">
                {formatCurrency(annualSavings)}
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-gray-300">
                <div>
                  <div className="text-xs md:text-sm text-gray-400">Monthly Savings</div>
                  <div className="text-sm md:text-xl font-semibold text-green-400">{formatCurrency(monthlySavings)}</div>
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400">Weekly Savings</div>
                  <div className="text-sm md:text-xl font-semibold text-green-400">{formatCurrency(weeklySavings)}</div>
                </div>
              </div>
            </div>

            <div className="text-center hidden md:block">
              <Link 
                to="/book-consultation"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                  transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                }}
              >
                🚀 Start automating today and see real results in weeks, not months
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* MOBILE ONLY - Built from scratch with zero effects - v3 CACHE BUSTER */}
      <section className="block xl:hidden py-8" style={{ pointerEvents: 'auto' }} data-version="mobile-v3-no-animations">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '8px 16px', 
              background: 'linear-gradient(to right, rgba(16,185,129,0.2), rgba(5,150,105,0.2))', 
              border: '1px solid rgba(16,185,129,0.3)', 
              borderRadius: '9999px', 
              marginBottom: '16px' 
            }}>
              <CalculatorIcon className="w-4 h-4 text-green-400 mr-2" />
              <span style={{ color: '#10b981', fontWeight: '500', fontSize: '14px' }}>ROI Calculator</span>
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '12px', color: 'white' }}>
              Calculate Your Potential Savings
            </h2>
            <p style={{ fontSize: '14px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>
              See how much you could save by automating manual processes with AI
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Inputs */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
                Your Current Situation
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div>
                  <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '14px' }}>
                    Number of Employees
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    style={{ 
                      width: '100%', 
                      height: '8px', 
                      borderRadius: '8px',
                      marginBottom: '8px',
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${employees}%, rgba(255,255,255,0.2) ${employees}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <input 
                    type="number" 
                    min="1" 
                    max="100" 
                    value={employees}
                    onChange={(e) => setEmployees(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                    style={{ 
                      width: '100%', 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px', 
                      padding: '8px 12px', 
                      color: 'white', 
                      fontSize: '14px' 
                    }}
                  />
                  <div style={{ marginTop: '4px', fontSize: '12px', color: '#9ca3af' }}>
                    {employees} employees
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '14px' }}>
                    Average Annual Salary
                  </label>
                  <input 
                    type="range" 
                    min="1000" 
                    max="100000" 
                    step="1000" 
                    value={salary}
                    onChange={(e) => setSalary(parseInt(e.target.value))}
                    style={{ 
                      width: '100%', 
                      height: '8px', 
                      borderRadius: '8px',
                      marginBottom: '8px',
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${((salary - 1000) / 99000) * 100}%, rgba(255,255,255,0.2) ${((salary - 1000) / 99000) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'white', fontSize: '14px' }}>
                      $
                    </span>
                    <input 
                      type="number" 
                      min="1000" 
                      max="100000" 
                      step="1000"
                      value={salary}
                      onChange={(e) => setSalary(Math.max(1000, Math.min(100000, parseInt(e.target.value) || 1000)))}
                      style={{ 
                        width: '100%', 
                        backgroundColor: 'rgba(255,255,255,0.1)', 
                        border: '1px solid rgba(255,255,255,0.2)', 
                        borderRadius: '8px', 
                        padding: '8px 12px 8px 28px', 
                        color: 'white', 
                        fontSize: '14px' 
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '4px', fontSize: '12px', color: '#9ca3af' }}>
                    {formatCurrency(salary)} per year
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'white', marginBottom: '8px', fontSize: '14px' }}>
                    Manual Hours Per Week
                  </label>
                  <input 
                    type="range" 
                    min="1" 
                    max="60" 
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                    style={{ 
                      width: '100%', 
                      height: '8px', 
                      borderRadius: '8px',
                      marginBottom: '8px',
                      background: `linear-gradient(to right, #10b981 0%, #10b981 ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) ${(hoursPerWeek / 60) * 100}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                  <input 
                    type="number" 
                    min="1" 
                    max="60" 
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Math.max(1, Math.min(60, parseInt(e.target.value) || 1)))}
                    style={{ 
                      width: '100%', 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      borderRadius: '8px', 
                      padding: '8px 12px', 
                      color: 'white', 
                      fontSize: '14px' 
                    }}
                  />
                  <div style={{ marginTop: '4px', fontSize: '12px', color: '#9ca3af' }}>
                    {hoursPerWeek} hours/week
                  </div>
                </div>

              </div>
            </div>

            {/* Costs */}
            <div style={{ background: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(249,115,22,0.1))', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '12px', padding: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
                Annual Cost of Manual Processes
              </h3>
              <div style={{ fontSize: '30px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>
                {formatCurrency(annualManualCost)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#d1d5db' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Monthly</div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>{formatCurrency(monthlyManualCost)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Weekly</div>
                  <div style={{ fontSize: '14px', fontWeight: '600' }}>{formatCurrency(weeklyManualCost)}</div>
                </div>
              </div>
            </div>

            {/* Savings */}
            <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                Annual Savings with AI
              </h3>
              <p style={{ fontSize: '12px', color: '#10b981', marginBottom: '12px' }}>
                Save up to 75% on manual processes
              </p>
              <div style={{ fontSize: '30px', fontWeight: 'bold', color: '#10b981', marginBottom: '12px' }}>
                {formatCurrency(annualSavings)}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', color: '#d1d5db' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Monthly Savings</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>{formatCurrency(monthlySavings)}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#9ca3af' }}>Weekly Savings</div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>{formatCurrency(weeklySavings)}</div>
                </div>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div style={{ textAlign: 'center', marginTop: '16px' }}>
              <Link 
                to="/book-consultation"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                style={{
                  boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                  transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                }}
              >
                🚀 Start automating today and see real results in weeks, not months
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;

