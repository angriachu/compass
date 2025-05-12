import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Compass</h3>
            <p className="text-emerald-100">
              Your trusted travel partner in Kerala, offering premium vehicle rental services
              and unforgettable travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-emerald-100 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/kerala-tour" className="text-emerald-100 hover:text-white transition-colors">
                  Kerala Tour
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-emerald-100">
              <li>Amritapuri, Kollam</li>
              <li>Kerala, India</li>
              <li>Phone: +91 XXXXXXXXXX</li>
              <li>Email: info@compass.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                Facebook
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                Twitter
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-emerald-100">
          <p>&copy; {currentYear} Compass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 