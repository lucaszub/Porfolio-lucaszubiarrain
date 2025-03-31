import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Section gauche : Photo, Nom et LinkedIn */}
        <div className="flex items-center space-x-4">
          {/* Photo */}
          <img
            src="/Lucas Zubiarrain.jpg"
            alt="Lucas Zubiarrain"
            className="w-10 h-10 rounded-full border-2 border-accent-500"
          />

          {/* Nom */}
          <span className="text-xl font-bold text-accent-600">
            Lucas Zubiarrain
          </span>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/lucas-zubiarrain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 hover:text-accent-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.155 1.46-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.555 2.841-1.555 3.038 0 3.6 2.001 3.6 4.604v5.584z" />
            </svg>
          </a>
        </div>

        {/* Section droite : Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-accent-600">
            Acceuil
          </Link>
          <Link to="/#service" className="text-gray-600 hover:text-accent-600">
            Services
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-accent-600">
            Blog
          </Link>
          <Link to="/#contact" className="text-gray-600 hover:text-accent-600">
            Contact
          </Link>
        </div>

        {/* Menu Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu déroulant pour mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-accent-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Acceuil
            </Link>

            <Link
              to="/#services"
              className="text-gray-600 hover:text-accent-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-600 hover:text-accent-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/#contact"
              className="text-gray-600 hover:text-accent-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
