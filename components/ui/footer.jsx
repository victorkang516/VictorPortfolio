import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact-me" className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/victorkang516"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/victor-kang-971823236/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-teal-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Email
            </h3>
            <a
              href="mailto:victorkang516@gmail.com"
              className="text-white hover:text-teal-400 transition-colors"
            >
              victorkang516@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Phone
            </h3>
            <a
              href="tel:+60108699011"
              className="text-white hover:text-teal-400 transition-colors"
            >
              010-8699011
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-600 mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Location
            </h3>
            <p className="text-white">
              Federal Territory of Kuala Lumpur, Malaysia
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Victor Kang. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
