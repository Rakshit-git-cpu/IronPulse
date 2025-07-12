import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, Calendar, User } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  published: boolean;
}

const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: '10 Essential Exercises for Building Core Strength',
      excerpt: 'Discover the most effective core exercises that will transform your midsection and improve your overall fitness performance.',
      content: 'A strong core is the foundation of all movement and athletic performance. These 10 exercises will help you build a rock-solid core...',
      author: 'Mike Chen',
      date: '2025-01-15',
      category: 'Workouts',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      published: true
    },
    {
      id: '2',
      title: 'The Complete Guide to Pre and Post-Workout Nutrition',
      excerpt: 'Learn what to eat before and after your workouts to maximize performance and recovery.',
      content: 'Proper nutrition timing can make or break your fitness goals. Here\'s everything you need to know about fueling your workouts...',
      author: 'Sarah Johnson',
      date: '2025-01-12',
      category: 'Nutrition',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      published: true
    }
  ]);

  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Workouts', 'Nutrition', 'Motivation', 'Equipment', 'Recovery'];
  const authors = ['Mike Chen', 'Sarah Johnson', 'David Rodriguez', 'Emma Williams', 'Lisa Park', 'Tom Anderson'];

  const handleEdit = (post: BlogPost) => {
    setEditingPost({ ...post });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingPost({
      id: '',
      title: '',
      excerpt: '',
      content: '',
      author: 'Mike Chen',
      date: new Date().toISOString().split('T')[0],
      category: 'Workouts',
      readTime: '5 min read',
      image: '',
      featured: false,
      published: false
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingPost) return;

    if (isCreating) {
      const newPost = { ...editingPost, id: Date.now().toString() };
      setPosts([...posts, newPost]);
    } else {
      setPosts(posts.map(post => post.id === editingPost.id ? editingPost : post));
    }

    setEditingPost(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingPost(null);
    setIsCreating(false);
  };

  const togglePublished = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, published: !post.published } : post
    ));
  };

  const filteredPosts = posts.filter(post => 
    selectedCategory === 'All' || post.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Blog Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>New Post</span>
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

      {editingPost && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Create New Post' : 'Edit Post'}
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter post title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Excerpt</label>
              <textarea
                value={editingPost.excerpt}
                onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Brief description of the post"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
              <textarea
                value={editingPost.content}
                onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={10}
                placeholder="Write your blog post content here..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Author</label>
                <select
                  value={editingPost.author}
                  onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {authors.map(author => (
                    <option key={author} value={author}>{author}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={editingPost.category}
                  onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Read Time</label>
                <input
                  type="text"
                  value={editingPost.readTime}
                  onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 5 min read"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={editingPost.date}
                  onChange={(e) => setEditingPost({ ...editingPost, date: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image URL</label>
              <input
                type="url"
                value={editingPost.image}
                onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={editingPost.featured}
                  onChange={(e) => setEditingPost({ ...editingPost, featured: e.target.checked })}
                  className="rounded"
                />
                <span className="text-gray-300">Featured Post</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={editingPost.published}
                  onChange={(e) => setEditingPost({ ...editingPost, published: e.target.checked })}
                  className="rounded"
                />
                <span className="text-gray-300">Published</span>
              </label>
            </div>
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
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                  )}
                </div>
                <div className={`w-3 h-3 rounded-full ${post.published ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                <span>{post.readTime}</span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => togglePublished(post.id)}
                  className={`px-4 py-2 rounded-xl transition-colors ${
                    post.published 
                      ? 'bg-yellow-600 hover:bg-yellow-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  } text-white`}
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;