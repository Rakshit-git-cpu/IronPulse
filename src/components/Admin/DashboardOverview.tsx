import React from 'react';
import { Users, Calendar, DollarSign, MessageSquare, TrendingUp, Eye } from 'lucide-react';

const DashboardOverview = () => {
  const stats = [
    { label: 'Total Members', value: '2,547', icon: Users, change: '+12%', color: 'blue' },
    { label: 'Active Classes', value: '48', icon: Calendar, change: '+3%', color: 'green' },
    { label: 'Monthly Revenue', value: '$127,450', icon: DollarSign, change: '+8%', color: 'purple' },
    { label: 'New Testimonials', value: '23', icon: MessageSquare, change: '+15%', color: 'yellow' },
  ];

  const recentActivity = [
    { action: 'New member registration', user: 'John Smith', time: '2 minutes ago' },
    { action: 'Class booking', user: 'Sarah Johnson', time: '15 minutes ago' },
    { action: 'Membership upgrade', user: 'Mike Chen', time: '1 hour ago' },
    { action: 'Contact form submission', user: 'Lisa Park', time: '2 hours ago' },
    { action: 'Blog comment', user: 'David Rodriguez', time: '3 hours ago' },
  ];

  const popularClasses = [
    { name: 'HIIT Bootcamp', bookings: 45, capacity: 50 },
    { name: 'Morning Yoga', bookings: 38, capacity: 40 },
    { name: 'Strength Training', bookings: 32, capacity: 35 },
    { name: 'Cardio Dance', bookings: 28, capacity: 30 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-sm">{stat.change}</span>
                </div>
              </div>
              <div className={`w-12 h-12 bg-${stat.color}-600 rounded-full flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-xl">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm">{activity.action}</p>
                  <p className="text-gray-400 text-xs">by {activity.user}</p>
                </div>
                <span className="text-gray-400 text-xs">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Classes */}
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Popular Classes</h3>
          <div className="space-y-4">
            {popularClasses.map((classItem, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-semibold">{classItem.name}</h4>
                  <span className="text-blue-400 text-sm">
                    {classItem.bookings}/{classItem.capacity}
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(classItem.bookings / classItem.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors">
            <Users className="h-6 w-6 mb-2" />
            <span className="block font-semibold">Add New Trainer</span>
          </button>
          <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors">
            <Calendar className="h-6 w-6 mb-2" />
            <span className="block font-semibold">Schedule Class</span>
          </button>
          <button className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors">
            <MessageSquare className="h-6 w-6 mb-2" />
            <span className="block font-semibold">Add Testimonial</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;