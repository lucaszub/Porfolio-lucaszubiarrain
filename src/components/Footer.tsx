import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Lucas Zubiarrain. Tous droits réservés.
        </p>
        <p className="text-sm mt-2">
          Développé avec ❤️ et React. Suivez-moi sur{" "}
          <a
            href="https://github.com/lucaszub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-500 hover:text-accent-400"
          >
            GitHub
          </a>{" "}
          et{" "}
          <a
            href="https://www.linkedin.com/in/lucas-zubiarrain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-500 hover:text-accent-400"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
