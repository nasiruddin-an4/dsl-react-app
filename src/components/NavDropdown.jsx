import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const NavDropdown = ({ title, items, isScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={`flex items-center space-x-1  py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isScrolled 
          ? 'text-white hover:text-blue-200' 
          : 'text-white hover:text-gray-200'
      }`}>
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} />
      </button>
      
      <div className={`absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ease-in-out transform origin-top-left
        ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <div className="py-1">
          {items.map((item, index) => (
            <div key={index} className="relative group/submenu">
              {item.children ? (
                <div className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between cursor-pointer transition-colors duration-150">
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover/submenu:translate-x-1" />
                  <div className={`absolute left-full top-0 ml-1 transition-all duration-200 ease-in-out transform
                    opacity-0 scale-95 group-hover/submenu:opacity-100 group-hover/submenu:scale-100`}>
                    <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {item.children.map((child, childIndex) => (
                          <a
                            key={childIndex}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;