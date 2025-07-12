import React from 'react';
import { Dumbbell, Users, Calendar, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Dumbbell,
      title: 'State-of-the-Art Equipment',
      description: 'Latest fitness technology and equipment from leading brands to maximize your workout efficiency.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Expert Personal Trainers',
      description: 'Certified professionals who create personalized workout plans tailored to your fitness goals.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calendar,
      title: 'Flexible Class Schedule',
      description: 'Over 50 classes weekly including yoga, HIIT, strength training, and specialized programs.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Join thousands of successful transformations with our comprehensive fitness programs.',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Iron Pulse?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're more than just a gym. We're your partner in achieving the best version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;