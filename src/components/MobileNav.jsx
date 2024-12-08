import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SearchBar from './SearchBar';

const MobileNav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  // Toggle individual submenus
  const toggleSubMenu = (index) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="md:hidden flex items-center">
      {/* Search Bar */}
      <SearchBar />

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-2 p-2 py-4 text-white hover:text-indigo-600 transition-colors duration-200"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="px-4 py-3 space-y-2">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Items */}
          {items.map((section, index) => (
            <div key={index} className="space-y-1">
              {section.items ? (
                <>
                  {/* Section with Dropdown */}
                  <button
                    onClick={() => toggleSubMenu(index)}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md flex items-center justify-between transition-colors duration-200"
                  >
                    {section.title}
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-200 ${
                        openSubMenus[index] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Submenu Items */}
                  {openSubMenus[index] && (
                    <div className="pl-4 space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-1">
                          {item.children ? (
                            <div>
                              <div className="px-3 py-2 text-sm font-medium text-gray-700">
                                {item.label}
                              </div>
                              <div className="pl-4 space-y-1">
                                {item.children.map((child, childIndex) => (
                                  <a
                                    key={childIndex}
                                    href={child.href}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              {item.label}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // Single Link (Non-Dropdown)
                <a
                  href={section.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {section.label}
                </a>
              )}
            </div>
          ))}

          {/* Get Started Button */}
          <div className="px-3 py-2">
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
