import { useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";
import { navigationItems } from "../constants";
import logo from "../assets/white-logo-dsl.png";
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#080046] shadow-lg top-0" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 w-16 lg:w-20">
            <img src={logo} alt="Logo" />
          </div>

          {/* Mobile menu */}
          <MobileNav items={navigationItems} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item, index) =>
              item.items ? (
                // Dropdown for items with children
                <NavDropdown
                  key={index}
                  title={item.title}
                  items={item.items}
                  isScrolled={isScrolled}
                />
              ) : (
                // Non-dropdown links
                <a
                  key={index}
                  href={item.href}
                  className={`text-white ${
                    isScrolled ? "hover:text-blue-200" : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </a>
              )
            )}
            <SearchBar isScrolled={isScrolled} />
          </div>

          {/* Get Started Button */}
          <div className="hidden lg:flex">
            <button className="bg-white px-4 py-7 text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors duration-300 tracking-wider">
              Get Started <i className="ri-arrow-right-down-line"></i>{" "}
              {/* Remix icon for right-down arrow */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
