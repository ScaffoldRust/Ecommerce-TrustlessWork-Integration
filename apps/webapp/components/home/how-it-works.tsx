import React from 'react';
import { ShoppingCart, FileText, Shield, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Browse & Select",
      description: "Browse products and select items you want to purchase with escrow protection."
    },
    {
      id: 2,
      icon: FileText,
      title: "Set Milestones",
      description: "Define payment milestones and terms that work for both buyer and seller."
    },
    {
      id: 3,
      icon: Shield,
      title: "Secure Payment",
      description: "Funds are held securely in blockchain escrow until milestones are met."
    },
    {
      id: 4,
      icon: CheckCircle,
      title: "Complete Transaction",
      description: "Once conditions are met, payment is automatically released to the seller."
    }
  ];

  return (
    <section className="flex flex-col items-center bg-gray-50 w-full min-h-screen lg:h-[640px]" style={{ 
      padding: '40px 16px lg:80px 0px',
      backgroundColor: '#F9FAFB',
      flex: 'none',
      order: 2,
      alignSelf: 'stretch',
      flexGrow: 0
    }}>
      <div className="w-full max-w-7xl mx-auto px-4 mt-40 lg:px-4">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-2 lg:px-0">
            Simple, secure, and transparent. Our escrow process protects both buyers and <br /> sellers.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={step.id} className="relative">
                {/* Connector Line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute z-0" style={{
                    position: 'absolute',
                    width: '32px',
                    height: '2px',
                    right: '-16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#BFDBFE'
                  }} />
                )}
                
                {/* Step Card */}
                <div className="relative z-10 flex flex-col items-center" style={{
                  padding: '32px 0px 32.25px',
                  gap: '16px',
                  background: '#FFFFFF',
                  boxShadow: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px'
                }}>
                  {/* Icon Circle */}
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-blue-600" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.id}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-gray-900 text-center" style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: '20px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}>
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-center px-4" style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;