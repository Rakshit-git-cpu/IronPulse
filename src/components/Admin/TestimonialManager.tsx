import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Star, Play } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  membership: string;
  image: string;
  rating: number;
  text: string;
  achievement: string;
  video: boolean;
  featured: boolean;
}

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      age: 32,
      membership: 'Premium Member',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "Iron Pulse Fitness completely transformed my life. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence in just 6 months!",
      achievement: 'Lost 30 lbs in 6 months',
      video: false,
      featured: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      age: 28,
      membership: 'Elite Member',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: "The personal training program here is exceptional. My trainer helped me break through plateaus I've been stuck at for years. I've never been stronger!",
      achievement: 'Increased strength by 150%',
      video: true,
      featured: false
    }
  ]);

  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const membershipTypes = ['Basic Member', 'Premium Member', 'Elite Member'];

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial({ ...testimonial });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingTestimonial({
      id: '',
      name: '',
      age: 25,
      membership: 'Premium Member',
      image: '',
      rating: 5,
      text: '',
      achievement: '',
      video: false,
      featured: false
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingTestimonial) return;

    if (isCreating) {
      const newTestimonial = { ...editingTestimonial, id: Date.now().toString() };
      setTestimonials([...testimonials, newTestimonial]);
    } else {
      setTestimonials(testimonials.map(testimonial => 
        testimonial.id === editingTestimonial.id ? editingTestimonial : testimonial
      ));
    }

    setEditingTestimonial(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingTestimonial(null);
    setIsCreating(false);
  };

  const toggleFeatured = (id: string) => {
    setTestimonials(testimonials.map(testimonial => 
      testimonial.id === id ? { ...testimonial, featured: !testimonial.featured } : testimonial
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Testimonial Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Testimonial</span>
        </button>
      </div>

      {editingTestimonial && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Add New Testimonial' : 'Edit Testimonial'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={editingTestimonial.name}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Member name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Age</label>
              <input
                type="number"
                value={editingTestimonial.age}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, age: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="18"
                max="100"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Membership Type</label>
              <select
                value={editingTestimonial.membership}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, membership: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {membershipTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
              <select
                value={editingTestimonial.rating}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5].map(rating => (
                  <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Profile Image URL</label>
            <input
              type="url"
              value={editingTestimonial.image}
              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, image: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Achievement</label>
            <input
              type="text"
              value={editingTestimonial.achievement}
              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, achievement: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Lost 30 lbs in 6 months"
            />
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial Text</label>
            <textarea
              value={editingTestimonial.text}
              onChange={(e) => setEditingTestimonial({ ...editingTestimonial, text: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Member's testimonial..."
            />
          </div>
          
          <div className="mt-6 flex space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={editingTestimonial.video}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, video: e.target.checked })}
                className="rounded"
              />
              <span className="text-gray-300">Video Testimonial</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={editingTestimonial.featured}
                onChange={(e) => setEditingTestimonial({ ...editingTestimonial, featured: e.target.checked })}
                className="rounded"
              />
              <span className="text-gray-300">Featured Testimonial</span>
            </label>
          </div>
          
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={handleCancel}
              className="px-6 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gray-800 rounded-2xl p-6 relative">
            {testimonial.featured && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            )}
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                {testimonial.video && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <Play className="h-3 w-3 text-white ml-0.5" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">Age {testimonial.age} • {testimonial.membership}</p>
                <div className="flex items-center mt-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>
            
            <div className="mb-4">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                {testimonial.achievement}
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(testimonial)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => toggleFeatured(testimonial.id)}
                className={`px-4 py-2 rounded-xl transition-colors ${
                  testimonial.featured 
                    ? 'bg-yellow-600 hover:bg-yellow-700' 
                    : 'bg-gray-600 hover:bg-gray-700'
                } text-white`}
              >
                <Star className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialManager;