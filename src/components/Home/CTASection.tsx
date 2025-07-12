import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
            <Gift className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join Iron Pulse Fitness today and get your first month FREE! No contracts, no hidden fees, just results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/membership"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Claim Your Free Month</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Book a Tour
            </Link>
          </div>
          
          <div className="text-blue-100 text-sm">
            <p>* Limited time offer. Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;