import React from 'react';
import { Star, Award, Calendar, MessageSquare } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Yoga & Flexibility',
      experience: '8 years',
      rating: 4.9,
      certifications: ['RYT-500', 'NASM-CPT', 'Flexibility Specialist'],
      bio: 'Sarah brings mindfulness and strength together, helping clients find balance in both body and mind.',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Hatha Yoga', 'Vinyasa Flow', 'Meditation', 'Injury Recovery']
    },
    {
      name: 'Mike Chen',
      specialty: 'HIIT & Strength Training',
      experience: '12 years',
      rating: 4.8,
      certifications: ['NASM-CPT', 'CSCS', 'Functional Movement'],
      bio: 'Former athlete turned trainer, Mike specializes in high-intensity workouts that deliver real results.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['HIIT Training', 'Strength Building', 'Athletic Performance', 'Weight Loss']
    },
    {
      name: 'David Rodriguez',
      specialty: 'Powerlifting & Bodybuilding',
      experience: '15 years',
      rating: 4.9,
      certifications: ['NSCA-CPT', 'Powerlifting Coach', 'Nutrition Specialist'],
      bio: 'David has helped hundreds of clients achieve their strength goals with personalized training programs.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Powerlifting', 'Bodybuilding', 'Strength Training', 'Competition Prep']
    },
    {
      name: 'Emma Williams',
      specialty: 'Dance Fitness & Cardio',
      experience: '6 years',
      rating: 4.7,
      certifications: ['Zumba Instructor', 'ACSM-CPT', 'Dance Fitness'],
      bio: 'Emma makes fitness fun with energetic dance classes that get your heart pumping and spirits soaring.',
      image: 'https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Zumba', 'Dance Cardio', 'Group Fitness', 'Choreography']
    },
    {
      name: 'Lisa Park',
      specialty: 'Pilates & Core Training',
      experience: '10 years',
      rating: 4.8,
      certifications: ['PMA-CPT', 'Mat Pilates', 'Reformer Certified'],
      bio: 'Lisa focuses on building core strength and improving posture through precise Pilates movements.',
      image: 'https://images.pexels.com/photos/1431284/pexels-photo-1431284.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Mat Pilates', 'Reformer Pilates', 'Core Training', 'Posture Correction']
    },
    {
      name: 'Tom Anderson',
      specialty: 'Functional Training & Mobility',
      experience: '9 years',
      rating: 4.9,
      certifications: ['FMS', 'NASM-CPT', 'Mobility Specialist'],
      bio: 'Tom helps clients move better and feel stronger through functional movement patterns and mobility work.',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['Functional Training', 'Mobility', 'Injury Prevention', 'Movement Assessment']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Expert Trainers
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our certified professionals are here to guide you on your fitness journey with personalized training programs
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-colors group">
              {/* Profile Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-blue-400 font-semibold">{trainer.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{trainer.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    {trainer.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {trainer.bio}
                </p>
                
                {/* Certifications */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, certIndex) => (
                      <span key={certIndex} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 text-sm">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, specIndex) => (
                      <span key={specIndex} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Book Session</span>
                  </button>
                  <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                    <MessageSquare className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Personal Training Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get matched with the perfect trainer for your goals and schedule your first session today
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Find My Trainer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trainers;