import React, { useState } from 'react';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      age: 32,
      membership: 'Premium Member',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "Iron Pulse Fitness completely transformed my life. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence in just 6 months!",
      achievement: 'Lost 30 lbs in 6 months',
      video: false
    },
    {
      name: 'Mike Chen',
      age: 28,
      membership: 'Elite Member',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "The personal training program here is exceptional. My trainer helped me break through plateaus I've been stuck at for years. I've never been stronger!",
      achievement: 'Increased strength by 150%',
      video: true
    },
    {
      name: 'Lisa Rodriguez',
      age: 45,
      membership: 'Premium Member',
      image: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "As a busy mom, I thought I'd never find time for fitness. Iron Pulse's flexible schedule and amazing childcare made it possible. I feel like a new person!",
      achievement: 'Improved energy and wellness',
      video: false
    },
    {
      name: 'David Park',
      age: 38,
      membership: 'Elite Member',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "The community here is incredible. Everyone supports each other, and the trainers genuinely care about your success. I've made lifelong friends and achieved my fitness goals.",
      achievement: 'Built lasting friendships & fitness habits',
      video: true
    },
    {
      name: 'Amanda Williams',
      age: 26,
      membership: 'Premium Member',
      image: 'https://images.pexels.com/photos/1431284/pexels-photo-1431284.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "After trying many gyms, Iron Pulse is the only one that stuck. The variety of classes, clean facilities, and professional staff make all the difference. Highly recommend!",
      achievement: 'Consistent workout routine for 2+ years',
      video: false
    }
  ];

  const quickReviews = [
    {
      name: 'Jennifer L.',
      rating: 5,
      text: "Best gym in the city! Clean, modern, and great community.",
      date: '2 days ago'
    },
    {
      name: 'Robert K.',
      rating: 5,
      text: "Excellent trainers and equipment. Worth every penny.",
      date: '1 week ago'
    },
    {
      name: 'Maria S.',
      rating: 5,
      text: "Love the yoga classes here. Peaceful and challenging.",
      date: '2 weeks ago'
    },
    {
      name: 'Alex T.',
      rating: 5,
      text: "Amazing transformation in just 3 months. Highly recommended!",
      date: '3 weeks ago'
    },
    {
      name: 'Emma R.',
      rating: 5,
      text: "The staff is so friendly and helpful. Great atmosphere.",
      date: '1 month ago'
    },
    {
      name: 'Chris M.',
      rating: 5,
      text: "Best investment I've made for my health. Love it here!",
      date: '1 month ago'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Members Say
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at Iron Pulse Fitness
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-48 h-48 object-cover rounded-full"
                />
                {testimonials[currentTestimonial].video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-12 w-12 text-blue-400 mb-4 mx-auto lg:mx-0" />
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-400">
                  Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].membership}
                </p>
              </div>
              
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {testimonials[currentTestimonial].achievement}
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Quick Reviews Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Recent Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickReviews.map((review, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
                <p className="text-gray-300 mb-4">"{review.text}"</p>
                <p className="text-white font-semibold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Community Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9</div>
              <div className="text-blue-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2,500+</div>
              <div className="text-blue-100">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;