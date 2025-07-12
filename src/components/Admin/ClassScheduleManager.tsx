import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Clock, Users } from 'lucide-react';

interface ClassItem {
  id: string;
  name: string;
  time: string;
  duration: string;
  instructor: string;
  category: string;
  spots: number;
  maxSpots: number;
  day: string;
}

const ClassScheduleManager = () => {
  const [classes, setClasses] = useState<ClassItem[]>([
    {
      id: '1',
      name: 'Morning Power Yoga',
      time: '6:00 AM',
      duration: '60 min',
      instructor: 'Sarah Johnson',
      category: 'Yoga',
      spots: 8,
      maxSpots: 15,
      day: 'Monday'
    },
    {
      id: '2',
      name: 'HIIT Bootcamp',
      time: '7:30 AM',
      duration: '45 min',
      instructor: 'Mike Chen',
      category: 'HIIT',
      spots: 12,
      maxSpots: 20,
      day: 'Monday'
    },
    {
      id: '3',
      name: 'Strength Training',
      time: '9:00 AM',
      duration: '75 min',
      instructor: 'David Rodriguez',
      category: 'Strength',
      spots: 6,
      maxSpots: 12,
      day: 'Monday'
    }
  ]);

  const [editingClass, setEditingClass] = useState<ClassItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const categories = ['Strength', 'Cardio', 'Yoga', 'HIIT', 'Dance', 'Pilates'];
  const instructors = ['Sarah Johnson', 'Mike Chen', 'David Rodriguez', 'Emma Williams', 'Lisa Park', 'Tom Anderson'];

  const handleEdit = (classItem: ClassItem) => {
    setEditingClass({ ...classItem });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingClass({
      id: '',
      name: '',
      time: '',
      duration: '',
      instructor: '',
      category: 'Strength',
      spots: 0,
      maxSpots: 20,
      day: selectedDay
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingClass) return;

    if (isCreating) {
      const newClass = { ...editingClass, id: Date.now().toString() };
      setClasses([...classes, newClass]);
    } else {
      setClasses(classes.map(classItem => classItem.id === editingClass.id ? editingClass : classItem));
    }

    setEditingClass(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this class?')) {
      setClasses(classes.filter(classItem => classItem.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingClass(null);
    setIsCreating(false);
  };

  const filteredClasses = classes.filter(classItem => classItem.day === selectedDay);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Class Schedule Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Class</span>
        </button>
      </div>

      {/* Day Filter */}
      <div className="flex flex-wrap gap-2">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedDay === day
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {editingClass && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Add New Class' : 'Edit Class'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Class Name</label>
              <input
                type="text"
                value={editingClass.name}
                onChange={(e) => setEditingClass({ ...editingClass, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Morning Power Yoga"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <select
                value={editingClass.category}
                onChange={(e) => setEditingClass({ ...editingClass, category: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Time</label>
              <input
                type="time"
                value={editingClass.time}
                onChange={(e) => setEditingClass({ ...editingClass, time: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
              <input
                type="text"
                value={editingClass.duration}
                onChange={(e) => setEditingClass({ ...editingClass, duration: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 60 min"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Instructor</label>
              <select
                value={editingClass.instructor}
                onChange={(e) => setEditingClass({ ...editingClass, instructor: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Instructor</option>
                {instructors.map(instructor => (
                  <option key={instructor} value={instructor}>{instructor}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Day</label>
              <select
                value={editingClass.day}
                onChange={(e) => setEditingClass({ ...editingClass, day: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Max Spots</label>
              <input
                type="number"
                value={editingClass.maxSpots}
                onChange={(e) => setEditingClass({ ...editingClass, maxSpots: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Current Bookings</label>
              <input
                type="number"
                value={editingClass.spots}
                onChange={(e) => setEditingClass({ ...editingClass, spots: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="0"
                max={editingClass.maxSpots}
              />
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
        {filteredClasses.map((classItem) => (
          <div key={classItem.id} className="bg-gray-800 rounded-2xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  {classItem.category}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-400">{classItem.time}</div>
                <div className="text-sm text-gray-400 flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {classItem.duration}
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Users className="h-4 w-4 mr-2 text-blue-400" />
                Instructor: {classItem.instructor}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Available Spots:</span>
                <span className="text-blue-400 font-semibold">
                  {classItem.maxSpots - classItem.spots}/{classItem.maxSpots}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${(classItem.spots / classItem.maxSpots) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(classItem)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(classItem.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No classes scheduled for {selectedDay}</p>
          <button
            onClick={handleCreate}
            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Add First Class
          </button>
        </div>
      )}
    </div>
  );
};

export default ClassScheduleManager;