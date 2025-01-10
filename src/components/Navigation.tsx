import { useState } from "react";
import { Menu, X, ChevronDown, Globe, Search } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src="/images/yilsa-logo.svg" alt="YILSA Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-primary">YILSA</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <div className="relative group">
                <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#specs" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Technical Specs
              </a>
              <a href="#support" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Support & Service
              </a>
              <a href="#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                About YILSA
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Button variant="outline" className="text-sm">
              Request Quote
            </Button>
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <Globe className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#products"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Products
            </a>
            <a
              href="#specs"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Technical Specs
            </a>
            <a
              href="#support"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              Support & Service
            </a>
            <a
              href="#about"
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
            >
              About YILSA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;