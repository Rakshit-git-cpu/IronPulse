import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload } from 'lucide-react';

interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  certifications: string[];
  bio: string;
  image: string;
  specialties: string[];
}

const TrainerManager = () => {
  const [trainers, setTrainers] = useState<Trainer[]>([
    {
      id: '1',
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
      id: '2',
      name: 'Mike Chen',
      specialty: 'HIIT & Strength Training',
      experience: '12 years',
      rating: 4.8,
      certifications: ['NASM-CPT', 'CSCS', 'Functional Movement'],
      bio: 'Former athlete turned trainer, Mike specializes in high-intensity workouts that deliver real results.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400',
      specialties: ['HIIT Training', 'Strength Building', 'Athletic Performance', 'Weight Loss']
    }
  ]);

  const [editingTrainer, setEditingTrainer] = useState<Trainer | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleEdit = (trainer: Trainer) => {
    setEditingTrainer({ ...trainer });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingTrainer({
      id: '',
      name: '',
      specialty: '',
      experience: '',
      rating: 5.0,
      certifications: [],
      bio: '',
      image: '',
      specialties: []
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingTrainer) return;

    if (isCreating) {
      const newTrainer = { ...editingTrainer, id: Date.now().toString() };
      setTrainers([...trainers, newTrainer]);
    } else {
      setTrainers(trainers.map(trainer => trainer.id === editingTrainer.id ? editingTrainer : trainer));
    }

    setEditingTrainer(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this trainer?')) {
      setTrainers(trainers.filter(trainer => trainer.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingTrainer(null);
    setIsCreating(false);
  };

  const addCertification = () => {
    if (editingTrainer) {
      setEditingTrainer({
        ...editingTrainer,
        certifications: [...editingTrainer.certifications, '']
      });
    }
  };

  const updateCertification = (index: number, value: string) => {
    if (editingTrainer) {
      const newCertifications = [...editingTrainer.certifications];
      newCertifications[index] = value;
      setEditingTrainer({ ...editingTrainer, certifications: newCertifications });
    }
  };

  const removeCertification = (index: number) => {
    if (editingTrainer) {
      setEditingTrainer({
        ...editingTrainer,
        certifications: editingTrainer.certifications.filter((_, i) => i !== index)
      });
    }
  };

  const addSpecialty = () => {
    if (editingTrainer) {
      setEditingTrainer({
        ...editingTrainer,
        specialties: [...editingTrainer.specialties, '']
      });
    }
  };

  const updateSpecialty = (index: number, value: string) => {
    if (editingTrainer) {
      const newSpecialties = [...editingTrainer.specialties];
      newSpecialties[index] = value;
      setEditingTrainer({ ...editingTrainer, specialties: newSpecialties });
    }
  };

  const removeSpecialty = (index: number) => {
    if (editingTrainer) {
      setEditingTrainer({
        ...editingTrainer,
        specialties: editingTrainer.specialties.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Trainer Management</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Trainer</span>
        </button>
      </div>

      {editingTrainer && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Add New Trainer' : 'Edit Trainer'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={editingTrainer.name}
                onChange={(e) => setEditingTrainer({ ...editingTrainer, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Main Specialty</label>
              <input
                type="text"
                value={editingTrainer.specialty}
                onChange={(e) => setEditingTrainer({ ...editingTrainer, specialty: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Experience</label>
              <input
                type="text"
                value={editingTrainer.experience}
                onChange={(e) => setEditingTrainer({ ...editingTrainer, experience: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 8 years"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
              <input
                type="number"
                min="1"
                max="5"
                step="0.1"
                value={editingTrainer.rating}
                onChange={(e) => setEditingTrainer({ ...editingTrainer, rating: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Profile Image URL</label>
            <div className="flex space-x-2">
              <input
                type="url"
                value={editingTrainer.image}
                onChange={(e) => setEditingTrainer({ ...editingTrainer, image: e.target.value })}
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
              <button className="bg-gray-600 text-white px-4 py-3 rounded-xl hover:bg-gray-700 transition-colors">
                <Upload className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
            <textarea
              value={editingTrainer.bio}
              onChange={(e) => setEditingTrainer({ ...editingTrainer, bio: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Brief description about the trainer..."
            />
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-gray-300">Certifications</label>
              <button
                onClick={addCertification}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Add Certification
              </button>
            </div>
            <div className="space-y-2">
              {editingTrainer.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={cert}
                    onChange={(e) => updateCertification(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., NASM-CPT"
                  />
                  <button
                    onClick={() => removeCertification(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-gray-300">Specialties</label>
              <button
                onClick={addSpecialty}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Add Specialty
              </button>
            </div>
            <div className="space-y-2">
              {editingTrainer.specialties.map((specialty, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={specialty}
                    onChange={(e) => updateSpecialty(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., HIIT Training"
                  />
                  <button
                    onClick={() => removeSpecialty(index)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
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
        {trainers.map((trainer) => (
          <div key={trainer.id} className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-blue-400 font-semibold">{trainer.specialty}</p>
                </div>
                <div className="text-yellow-400 font-semibold">★ {trainer.rating}</div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">{trainer.bio}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {trainer.certifications.slice(0, 2).map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {cert}
                    </span>
                  ))}
                  {trainer.certifications.length > 2 && (
                    <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                      +{trainer.certifications.length - 2}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(trainer)}
                  className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Edit className="h-4 w-4" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDelete(trainer.id)}
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

export default TrainerManager;