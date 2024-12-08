import React from 'react';
import backgroundImage from '../assets/hero-img.png';

const Hero = () => {
  return (
    <div className="relative py-60 overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-custom-gradient"></div>

        {/* Right Top Blur Effect */}
        <div 
          className=" absolute top-[-100px] right-[-100px] bg-purple-700 bg-opacity-50 rounded-sm blur-3xl w-[400px] h-[400px]" 
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-4 container mx-auto">
        <div className="lg:w-4/5 text-center lg:text-left">
          <p className="text-gray-200 mb-5 tracking-widest">
            Engross with a trusted Software Development Partner
          </p>
          <h1 className="text-2xl lg:text-6xl font-bold text-white mb-10 leading-tight lg:leading-snug">
  INNOVATION BEYOND DIGITAL TRANSFORMATION
</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="text-white bg-gradient-to-r from-cyan-400 to-purple-600 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2">
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
