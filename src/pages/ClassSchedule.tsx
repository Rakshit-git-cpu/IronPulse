import React, { useState } from 'react';
import { Calendar, Clock, Users, Filter } from 'lucide-react';

const ClassSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const categories = ['All', 'Strength', 'Cardio', 'Yoga', 'HIIT', 'Dance', 'Pilates'];

  const classes = [
    { name: 'Morning Power Yoga', time: '6:00 AM', duration: '60 min', instructor: 'Sarah Johnson', category: 'Yoga', spots: 8, maxSpots: 15 },
    { name: 'HIIT Bootcamp', time: '7:30 AM', duration: '45 min', instructor: 'Mike Chen', category: 'HIIT', spots: 12, maxSpots: 20 },
    { name: 'Strength Training', time: '9:00 AM', duration: '75 min', instructor: 'David Rodriguez', category: 'Strength', spots: 6, maxSpots: 12 },
    { name: 'Cardio Dance', time: '10:30 AM', duration: '50 min', instructor: 'Emma Williams', category: 'Dance', spots: 15, maxSpots: 25 },
    { name: 'Lunch Break Pilates', time: '12:00 PM', duration: '45 min', instructor: 'Lisa Park', category: 'Pilates', spots: 10, maxSpots: 18 },
    { name: 'Afternoon Strength', time: '2:00 PM', duration: '60 min', instructor: 'Tom Anderson', category: 'Strength', spots: 8, maxSpots: 15 },
    { name: 'Evening Yoga Flow', time: '6:00 PM', duration: '60 min', instructor: 'Sarah Johnson', category: 'Yoga', spots: 12, maxSpots: 20 },
    { name: 'High-Intensity Cardio', time: '7:30 PM', duration: '45 min', instructor: 'Mike Chen', category: 'Cardio', spots: 18, maxSpots: 30 },
  ];

  const filteredClasses = classes.filter(classItem => 
    selectedCategory === 'All' || classItem.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Class Schedule
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from our diverse range of fitness classes designed for all levels
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Day Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-3">Select Day</label>
              <div className="flex flex-wrap gap-2">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedDay === day
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-300 mb-3">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {classItem.category}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">{classItem.time}</div>
                  <div className="text-sm text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {classItem.duration}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  Instructor: {classItem.instructor}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Available Spots:</span>
                  <span className="text-blue-400 font-semibold">
                    {classItem.maxSpots - classItem.spots}/{classItem.maxSpots}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(classItem.spots / classItem.maxSpots) * 100}%` }}
                  ></div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Book Class
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find the Right Class?
          </h2>
          <p className="text-blue-100 mb-6">
            Our personal trainers can create a custom workout plan just for you
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Book Personal Training
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;