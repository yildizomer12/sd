import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Landing Page Innovator</h3>
            <p className="mb-4">
              Modern ve yenilikçi landing page çözümleri ile işletmenizi bir adım öne taşıyın.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+90 (555) 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@landingpageinnovator.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} Landing Page Innovator. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
