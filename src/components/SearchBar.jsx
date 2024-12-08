import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const SearchBar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative" ref={searchRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full transition-colors duration-300 ${
          isScrolled 
            ? 'text-white hover:text-indigo-600 hover:bg-gray-100' 
            : 'text-white hover:text-gray-200 hover:bg-white/10'
        }`}
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </button>
      
      {isOpen && (
        <>
          {/* Desktop Search */}
          <div className="hidden md:block absolute right-0 mt-2 w-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 transform origin-top-right transition-all duration-200">
            <form onSubmit={handleSearch} className="relative">
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>

          {/* Mobile Search Overlay */}
          <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
            <div className="fixed top-0 left-0 right-0 bg-white p-4 shadow-lg">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;