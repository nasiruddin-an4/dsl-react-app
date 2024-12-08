import React from 'react';
import { socialLinks } from '../constants';
import { RiPhoneFill } from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className="bg-[#080046] py-3 shadow-md hidden md:flex">
      <div className="container mx-auto text-white px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Hotline with Phone Icon */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
          <RiPhoneFill className="text-white h-6 w-6 mr-2" />
          <div className="flex flex-col md:flex-row items-center gap-3">
            <a 
              href="tel:+8801713493026" 
              className="hover:text-blue-300 text-sm transition-colors duration-300"
            >
              +8801713493026
            </a>
            <a 
              href="tel:+8801713493107" 
              className="hover:text-blue-300 text-sm transition-colors duration-300"
            >
              +8801713493107
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-4 mt-2 md:mt-0 z-50">
          {socialLinks.map(({ icon: Icon, href, color }, index) => (
            <a 
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex items-center justify-center 
                h-8 w-8
                text-white 
                transition-all duration-300 ease-in-out
                transform hover:scale-110 
                ${color}
              `}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
