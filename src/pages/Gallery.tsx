import React, { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gym Equipment', 'Group Classes', 'Personal Training', 'Transformations', 'Facilities'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Gym Equipment',
      title: 'State-of-the-Art Equipment',
      description: 'Professional grade equipment for all your fitness needs'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Group Classes',
      title: 'High-Energy Group Classes',
      description: 'Fun and motivating group fitness sessions'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal Training',
      title: 'One-on-One Training',
      description: 'Personalized attention from certified trainers'
    },
    {
      id: 4,
      type: 'video',
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Transformations',
      title: 'Amazing Transformations',
      description: 'Real results from our dedicated members'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Facilities',
      title: 'Modern Facilities',
      description: 'Clean and spacious workout environment'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Group Classes',
      title: 'Yoga & Mindfulness',
      description: 'Find your zen in our peaceful yoga studio'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/1431284/pexels-photo-1431284.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Personal Training',
      title: 'Strength Training',
      description: 'Build muscle and increase strength with expert guidance'
    },
    {
      id: 8,
      type: 'video',
      src: 'https://images.pexels.com/photos/1552097/pexels-photo-1552097.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Transformations',
      title: 'Success Stories',
      description: 'Inspiring transformation journeys'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Facilities',
      title: 'Cardio Zone',
      description: 'Premium cardio equipment with entertainment systems'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552101/pexels-photo-1552101.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Gym Equipment',
      title: 'Free Weights Area',
      description: 'Complete range of free weights and accessories'
    },
    {
      id: 11,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552102/pexels-photo-1552102.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Group Classes',
      title: 'HIIT Training',
      description: 'High-intensity interval training for maximum results'
    },
    {
      id: 12,
      type: 'image',
      src: 'https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Facilities',
      title: 'Locker Rooms',
      description: 'Spacious and clean locker room facilities'
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  const transformations = [
    {
      name: 'Jessica M.',
      before: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeframe: '6 months',
      achievement: 'Lost 35 lbs, gained confidence'
    },
    {
      name: 'David L.',
      before: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeframe: '8 months',
      achievement: 'Built muscle, increased strength by 150%'
    },
    {
      name: 'Maria S.',
      before: 'https://images.pexels.com/photos/1431284/pexels-photo-1431284.jpeg?auto=compress&cs=tinysrgb&w=300',
      after: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=300',
      timeframe: '4 months',
      achievement: 'Improved flexibility, reduced back pain'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities, see our community in action, and get inspired by amazing transformations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-800"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
              
              {/* Video Icon */}
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Play className="h-5 w-5 text-white ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Transformations Section */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Amazing Transformations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="relative">
                    <img 
                      src={transformation.before} 
                      alt={`${transformation.name} before`}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={transformation.after} 
                      alt={`${transformation.name} after`}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{transformation.name}</h3>
                <p className="text-blue-400 font-semibold mb-1">{transformation.timeframe}</p>
                <p className="text-gray-300 text-sm">{transformation.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-screen object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;