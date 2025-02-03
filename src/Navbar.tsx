import { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (e: MouseEvent) => {
    // Fermer le menu si on clique en dehors du menu et du bouton
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(e.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  // Ajouter un écouteur d'événements lorsque le composant est monté
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <a
          href="https://github.com/lucaszub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <h1 className="ml-4 text-lg font-bold">Lucas Zubiarrain</h1>
      </div>

      <div className="items-center justify-end space-x-8 hidden md:flex">
        <a href="#home" className="cursor-pointer">
          <h1 className="">Page d'accueil</h1>
        </a>
        <a href="#experience" className="cursor-pointer">
          <h1 className="">Mon expérience</h1>
        </a>
        <a
          href="#contact"
          className="px-4 cursor-pointer py-2 rounded-full bg-button hover:bg-button-hover"
        >
          Contactez-moi
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-zubiarrain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="md:hidden p-2"
      >
        <i className="fas fa-bars text-2xl"></i>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-0 w-full bg-white shadow-lg p-4 flex flex-col items-center space-y-4 md:hidden"
        >
          <a href="#home" className="cursor-pointer">
            <h1 className="">Page d'accueil</h1>
          </a>
          <a href="#experience" className="cursor-pointer">
            <h1 className="">Mon expérience</h1>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-button hover:bg-button-hover"
          >
            Contactez-moi
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-zubiarrain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
