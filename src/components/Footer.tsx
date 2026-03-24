import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const services = [
  { name: 'Website Development', path: '/website-development' },
  { name: 'Google Ads Management', path: '/google-ads-management' },
  { name: 'Social Media Management', path: '/social-media-marketing' },
  { name: 'Shopify Development', path: '/shopify-development' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/#about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white">
            Bonma<span className="text-blue-500">.top</span>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">
            Bonma is a leading digital marketing agency in India, helping small businesses grow with ROI-focused lead generation and modern website development.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors p-2 bg-gray-800 rounded-full"><Facebook size={18} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors p-2 bg-gray-800 rounded-full"><Twitter size={18} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors p-2 bg-gray-800 rounded-full"><Instagram size={18} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors p-2 bg-gray-800 rounded-full"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
          <ul className="flex flex-col gap-4">
            {services.map((service) => (
              <li key={service.path}>
                <Link to={service.path} className="text-sm hover:text-blue-500 transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm hover:text-blue-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>Office 111, 1st Floor, Above pp Gas agency, Priya Complex, Anjur Kaman Road, Anjur Phata, Bhiwandi, Mumbai-421302</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <a href="tel:+918850741410" className="hover:text-blue-500 transition-colors">+91 8850741410</a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <a href="mailto:hello@bonma.top" className="hover:text-blue-500 transition-colors">hello@bonma.top</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Bonma Digital Agency. All rights reserved. | Designed for Small Businesses in India</p>
      </div>
    </footer>
  );
}
