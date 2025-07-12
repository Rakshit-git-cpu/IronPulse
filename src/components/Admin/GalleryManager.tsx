import React, { useState } from 'react';
import { Plus, Edit, Trash2, Upload, Play, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  category: string;
  title: string;
  description: string;
}

const GalleryManager = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([
    {
      id: '1',
      type: 'image',
      src: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Gym Equipment',
      title: 'State-of-the-Art Equipment',
      description: 'Professional grade equipment for all your fitness needs'
    },
    {
      id: '2',
      type: 'image',
      src: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Group Classes',
      title: 'High-Energy Group Classes',
      description: 'Fun and motivating group fitness sessions'
    },
    {
      id: '3',
      type: 'video',
      src: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Transformations',
      title: 'Amazing Transformations',
      description: 'Real results from our dedicated members'
    }
  ]);

  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gym Equipment', 'Group Classes', 'Personal Training', 'Transformations', 'Facilities'];

  const handleEdit = (item: GalleryItem) => {
    setEditingItem({ ...item });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingItem({
      id: '',
      type: 'image',
      src: '',
      category: 'Gym Equipment',
      title: '',
      description: ''
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingItem) return;

    if (isCreating) {
      const newItem = { ...editingItem, id: Date.now().toString() };
      setGalleryItems([...galleryItems, newItem]);
    } else {
      setGalleryItems(galleryItems.map(item => item.id === editingItem.id ? editingItem : item));
    }

    setEditingItem(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this gallery item?')) {
      setGalleryItems(galleryItems.filter(item => item.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingItem(null);
    setIsCreating(false);
  };

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gallery Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Media</span>
        </button>
      </div>

      {/* Category Filter */}
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

      {editingItem && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Add New Media' : 'Edit Media'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={editingItem.title}
                onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={editingItem.category}
                onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
              <select
                value={editingItem.type}
                onChange={(e) => setEditingItem({ ...editingItem, type: e.target.value as 'image' | 'video' })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Media URL</label>
            <div className="flex space-x-2">
              <input
                type="url"
                value={editingItem.src}
                onChange={(e) => setEditingItem({ ...editingItem, src: e.target.value })}
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
              <button className="bg-gray-600 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-colors">
                <Upload className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={editingItem.description}
              onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              placeholder="Brief description of the media..."
            />
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
              className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-2xl overflow-hidden group">
            <div className="relative aspect-square">
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {item.type === 'video' && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Play className="h-4 w-4 text-white ml-0.5" />
                </div>
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs uppercase">
                  {item.type}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;