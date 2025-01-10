import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-600 mb-4">
              Leading manufacturer of wheel weights production equipment with cutting-edge rotary punch technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-600 hover:text-accent transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#technology" className="text-gray-600 hover:text-accent transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  Calculate ROI
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  Wire Flattening Machine
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  Chopping and Marking Machine
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  Taping and Packaging Machine
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-accent transition-colors">
                  Decoiler Machine
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-2" />
                <p className="text-gray-600">+90 549 430 00 20</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-2" />
                <a href="mailto:info@yourbrand.com" className="text-gray-600 hover:text-accent transition-colors">
                  info@yourbrand.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 mt-1" />
                <p className="text-gray-600">
                  Your Company Address,<br />
                  City, Country
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-accent text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-accent text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
