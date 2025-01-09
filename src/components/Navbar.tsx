import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">YourBrand</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-gray-900 transition-colors">
                Products
              </a>
              <a href="#technology" className="text-gray-700 hover:text-gray-900 transition-colors">
                Technology
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <button className="btn btn-primary">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Products
            </a>
            <a
              href="#technology"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Technology
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Contact
            </a>
            <button className="w-full btn btn-primary mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};