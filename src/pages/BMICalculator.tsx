import React, { useState } from 'react';
import { Calculator, TrendingUp, Target, Users } from 'lucide-react';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    if (!weight || !height) return;

    let bmi;
    if (unit === 'metric') {
      // BMI = weight (kg) / height (m)²
      const heightInM = parseFloat(height) / 100;
      bmi = parseFloat(weight) / (heightInM * heightInM);
    } else {
      // BMI = (weight (lbs) / height (inches)²) × 703
      bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))) * 703;
    }

    const roundedBMI = Math.round(bmi * 10) / 10;
    
    let category = '';
    let color = '';
    let advice = '';

    if (roundedBMI < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400';
      advice = 'Consider consulting with a nutritionist to develop a healthy weight gain plan.';
    } else if (roundedBMI < 25) {
      category = 'Normal weight';
      color = 'text-green-400';
      advice = 'Great job! Maintain your healthy lifestyle with regular exercise and balanced nutrition.';
    } else if (roundedBMI < 30) {
      category = 'Overweight';
      color = 'text-yellow-400';
      advice = 'Consider incorporating more physical activity and consulting with a fitness professional.';
    } else {
      category = 'Obese';
      color = 'text-red-400';
      advice = 'We recommend consulting with healthcare professionals for a comprehensive health plan.';
    }

    setResult({
      bmi: roundedBMI,
      category,
      color,
      advice
    });
  };

  const reset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  const bmiRanges = [
    { range: 'Below 18.5', category: 'Underweight', color: 'bg-blue-500' },
    { range: '18.5 - 24.9', category: 'Normal weight', color: 'bg-green-500' },
    { range: '25.0 - 29.9', category: 'Overweight', color: 'bg-yellow-500' },
    { range: '30.0 and above', category: 'Obese', color: 'bg-red-500' }
  ];

  const fitnessGoals = [
    {
      icon: TrendingUp,
      title: 'Weight Loss',
      description: 'Burn fat and lose weight with our cardio and strength training programs',
      programs: ['HIIT Classes', 'Cardio Training', 'Nutritional Guidance']
    },
    {
      icon: Target,
      title: 'Muscle Building',
      description: 'Build lean muscle mass with our strength training and powerlifting programs',
      programs: ['Strength Training', 'Powerlifting', 'Bodybuilding']
    },
    {
      icon: Users,
      title: 'Overall Fitness',
      description: 'Improve your overall health and fitness with our comprehensive programs',
      programs: ['Group Classes', 'Personal Training', 'Yoga & Pilates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BMI Calculator & Fitness Assessment
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Calculate your Body Mass Index and discover personalized fitness recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">BMI Calculator</h2>
            </div>

            {/* Unit Toggle */}
            <div className="flex space-x-4 mb-8">
              <button
                onClick={() => setUnit('metric')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors ${
                  unit === 'metric'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                onClick={() => setUnit('imperial')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors ${
                  unit === 'imperial'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Imperial (lbs/in)
              </button>
            </div>

            {/* Input Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Weight {unit === 'metric' ? '(kg)' : '(lbs)'}
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={unit === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Height {unit === 'metric' ? '(cm)' : '(inches)'}
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={unit === 'metric' ? 'Enter height in cm' : 'Enter height in inches'}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8">
              <button
                onClick={calculateBMI}
                className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Calculate BMI
              </button>
              <button
                onClick={reset}
                className="px-6 py-3 bg-gray-700 text-gray-300 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
              >
                Reset
              </button>
            </div>

            {/* Results */}
            {result && (
              <div className="mt-8 p-6 bg-gray-700 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Your Results</h3>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-white mb-2">{result.bmi}</div>
                  <div className={`text-lg font-semibold ${result.color}`}>
                    {result.category}
                  </div>
                </div>
                <div className="bg-gray-600 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Recommendation:</h4>
                  <p className="text-gray-300 text-sm">{result.advice}</p>
                </div>
              </div>
            )}
          </div>

          {/* BMI Chart and Information */}
          <div className="space-y-8">
            {/* BMI Ranges */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">BMI Categories</h2>
              <div className="space-y-4">
                {bmiRanges.map((range, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${range.color}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-semibold">{range.category}</span>
                        <span className="text-gray-400">{range.range}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fitness Goals */}
            <div className="bg-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Achieve Your Goals</h2>
              <div className="space-y-6">
                {fitnessGoals.map((goal, index) => (
                  <div key={index} className="border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <goal.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{goal.title}</h3>
                        <p className="text-gray-400 mb-4">{goal.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {goal.programs.map((program, programIndex) => (
                            <span
                              key={programIndex}
                              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get personalized training plans and nutrition guidance from our expert team. Take the first step towards a healthier you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Book Free Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Membership Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;