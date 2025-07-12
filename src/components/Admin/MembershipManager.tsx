import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular: boolean;
}

const MembershipManager = () => {
  const [plans, setPlans] = useState<MembershipPlan[]>([
    {
      id: '1',
      name: 'Basic',
      price: 29,
      period: 'month',
      description: 'Perfect for getting started',
      features: [
        'Gym access during off-peak hours',
        'Basic cardio and strength equipment',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access'
      ],
      limitations: [
        'No group classes',
        'No personal training',
        'No guest privileges'
      ],
      popular: false
    },
    {
      id: '2',
      name: 'Premium',
      price: 59,
      period: 'month',
      description: 'Most popular choice',
      features: [
        '24/7 gym access',
        'All equipment and facilities',
        'Unlimited group classes',
        'Guest privileges (2 per month)',
        'Locker room & showers',
        'Mobile app with workout tracking',
        'Nutrition guidance'
      ],
      limitations: [
        'Limited personal training sessions'
      ],
      popular: true
    }
  ]);

  const [editingPlan, setEditingPlan] = useState<MembershipPlan | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleEdit = (plan: MembershipPlan) => {
    setEditingPlan({ ...plan });
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingPlan({
      id: '',
      name: '',
      price: 0,
      period: 'month',
      description: '',
      features: [],
      limitations: [],
      popular: false
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editingPlan) return;

    if (isCreating) {
      const newPlan = { ...editingPlan, id: Date.now().toString() };
      setPlans([...plans, newPlan]);
    } else {
      setPlans(plans.map(plan => plan.id === editingPlan.id ? editingPlan : plan));
    }

    setEditingPlan(null);
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this membership plan?')) {
      setPlans(plans.filter(plan => plan.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingPlan(null);
    setIsCreating(false);
  };

  const addFeature = () => {
    if (editingPlan) {
      setEditingPlan({
        ...editingPlan,
        features: [...editingPlan.features, '']
      });
    }
  };

  const updateFeature = (index: number, value: string) => {
    if (editingPlan) {
      const newFeatures = [...editingPlan.features];
      newFeatures[index] = value;
      setEditingPlan({ ...editingPlan, features: newFeatures });
    }
  };

  const removeFeature = (index: number) => {
    if (editingPlan) {
      setEditingPlan({
        ...editingPlan,
        features: editingPlan.features.filter((_, i) => i !== index)
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Membership Plans</h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Plan</span>
        </button>
      </div>

      {editingPlan && (
        <div className="bg-gray-800 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">
            {isCreating ? 'Create New Plan' : 'Edit Plan'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Plan Name</label>
              <input
                type="text"
                value={editingPlan.name}
                onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
              <input
                type="number"
                value={editingPlan.price}
                onChange={(e) => setEditingPlan({ ...editingPlan, price: Number(e.target.value) })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Period</label>
              <select
                value={editingPlan.period}
                onChange={(e) => setEditingPlan({ ...editingPlan, period: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>
            
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={editingPlan.popular}
                  onChange={(e) => setEditingPlan({ ...editingPlan, popular: e.target.checked })}
                  className="rounded"
                />
                <span className="text-gray-300">Mark as Popular</span>
              </label>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={editingPlan.description}
              onChange={(e) => setEditingPlan({ ...editingPlan, description: e.target.value })}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm font-medium text-gray-300">Features</label>
              <button
                onClick={addFeature}
                className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Add Feature
              </button>
            </div>
            <div className="space-y-2">
              {editingPlan.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateFeature(index, e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter feature"
                  />
                  <button
                    onClick={() => removeFeature(index)}
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
        {plans.map((plan) => (
          <div key={plan.id} className="bg-gray-800 rounded-2xl p-6 relative">
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">${plan.price}</span>
                <span className="text-gray-400">/{plan.period}</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              {plan.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  • {feature}
                </div>
              ))}
              {plan.features.length > 3 && (
                <div className="text-gray-400 text-sm">
                  +{plan.features.length - 3} more features
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(plan)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(plan.id)}
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

export default MembershipManager;