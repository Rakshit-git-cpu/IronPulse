import React from 'react';
import { Users, Trophy, Clock, Heart } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Happy Members' },
    { icon: Trophy, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Gym Access' },
    { icon: Heart, value: '98%', label: 'Success Rate' },
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 group-hover:bg-blue-700 transition-colors">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;