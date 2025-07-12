import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Workouts', 'Nutrition', 'Motivation', 'Equipment', 'Recovery'];

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Exercises for Building Core Strength',
      excerpt: 'Discover the most effective core exercises that will transform your midsection and improve your overall fitness performance.',
      content: 'A strong core is the foundation of all movement and athletic performance. These 10 exercises will help you build a rock-solid core...',
      author: 'Mike Chen',
      date: '2025-01-15',
      category: 'Workouts',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: 'The Complete Guide to Pre and Post-Workout Nutrition',
      excerpt: 'Learn what to eat before and after your workouts to maximize performance and recovery.',
      content: 'Proper nutrition timing can make or break your fitness goals. Here\'s everything you need to know about fueling your workouts...',
      author: 'Sarah Johnson',
      date: '2025-01-12',
      category: 'Nutrition',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'How to Stay Motivated During Your Fitness Journey',
      excerpt: 'Practical strategies to maintain motivation and overcome common obstacles in your fitness journey.',
      content: 'Motivation comes and goes, but discipline and the right strategies will keep you on track. Here are proven methods...',
      author: 'David Rodriguez',
      date: '2025-01-10',
      category: 'Motivation',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'HIIT vs. Steady-State Cardio: Which is Better?',
      excerpt: 'Compare the benefits of high-intensity interval training versus traditional steady-state cardio for your fitness goals.',
      content: 'Both HIIT and steady-state cardio have their place in a well-rounded fitness program. Here\'s how to choose...',
      author: 'Emma Williams',
      date: '2025-01-08',
      category: 'Workouts',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'The Importance of Recovery in Your Fitness Routine',
      excerpt: 'Why rest days are just as important as workout days and how to optimize your recovery.',
      content: 'Recovery is where the magic happens. Your body adapts and grows stronger during rest periods, not during workouts...',
      author: 'Tom Anderson',
      date: '2025-01-05',
      category: 'Recovery',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'Home Gym Equipment: What You Really Need',
      excerpt: 'Build an effective home gym without breaking the bank with these essential equipment recommendations.',
      content: 'You don\'t need a lot of equipment to get a great workout at home. Here are the essentials that will give you the most bang for your buck...',
      author: 'Lisa Park',
      date: '2025-01-03',
      category: 'Equipment',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fitness Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert tips, workout guides, and motivation to help you reach your fitness goals
          </p>
        </div>

        {/* Categories */}
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

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <div className="bg-gray-800 rounded-2xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 w-fit">
                  <span>Read More</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Tips
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest fitness tips, workout plans, and nutrition advice delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-full px-6 py-4 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;