import React from 'react';
import { Check, X, Star, Users, Calendar, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Membership = () => {
  const { user, isAuthenticated } = useAuth();

  const plans = [
    {
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
        'No guest privileges',
        'No premium equipment access'
      ],
      popular: false,
      color: 'gray'
    },
    {
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
        'Nutrition guidance',
        'Free body composition analysis'
      ],
      limitations: [
        'Limited personal training sessions'
      ],
      popular: true,
      color: 'blue'
    },
    {
      name: 'Elite',
      price: 99,
      period: 'month',
      description: 'Ultimate fitness experience',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Priority class booking',
        'Unlimited guest privileges',
        'Premium locker access',
        'Massage therapy (2 sessions/month)',
        'Nutrition consultation',
        'Supplement discounts',
        'Exclusive member events'
      ],
      limitations: [],
      popular: false,
      color: 'purple'
    }
  ];

  const yearlyDiscount = 20; // 20% discount for yearly plans

  const handlePurchase = (planName: string, price: number) => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = '/login';
      return;
    }
    
    // In a real app, this would integrate with a payment processor
    alert(`Purchasing ${planName} plan for $${price}/month. This would integrate with a payment processor like Stripe.`);
  };
  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Membership
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your fitness journey with our flexible membership options designed for every lifestyle
          </p>
          
          {/* Special Offer Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-white font-bold">Limited Time Offer</span>
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <p className="text-blue-100 text-lg">
              Get your <span className="font-bold text-white">first month FREE</span> with any annual membership!
            </p>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-gray-800 rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <div className="text-sm text-gray-400">
                  <span className="line-through">${Math.round(plan.price * 12)}</span>
                  <span className="text-blue-400 font-semibold ml-2">
                    ${Math.round(plan.price * 12 * (1 - yearlyDiscount / 100))} yearly
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start space-x-3">
                    <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{limitation}</span>
                  </div>
                ))}
              </div>
              
              {user?.membershipPlan === plan.name ? (
                <div className="w-full py-3 rounded-full font-semibold bg-green-600 text-white text-center">
                  Current Plan
                </div>
              ) : (
                <button 
                  onClick={() => handlePurchase(plan.name, plan.price)}
                  className={`w-full py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  <span>{isAuthenticated ? `Purchase ${plan.name}` : `Choose ${plan.name}`}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Every Membership Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Community Support</h3>
              <p className="text-gray-400">Join a supportive community of fitness enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">Book classes and sessions that fit your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Guidance</h3>
              <p className="text-gray-400">Access to certified trainers and fitness experts</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-gray-400">Yes, you can cancel your membership with 30 days notice. No cancellation fees apply.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Are there any hidden fees?</h3>
              <p className="text-gray-400">No hidden fees! The price you see is what you pay. Optional add-ons are clearly marked.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-400">Absolutely! You can change your membership level at any time. Changes take effect at your next billing cycle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Do you offer corporate memberships?</h3>
              <p className="text-gray-400">Yes, we offer special corporate rates for companies. Contact us for more details.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;