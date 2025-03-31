import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-50 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Apprendre, Partager, Innover : Au cœur de l'IA & de l'Automatisation.
        </h1>
        <p className="text-xl md:text-2xl text-accent-700 mb-8">
          Mon carnet de bord technologique
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Je suis Lucas, développeur web en constante exploration de l'IA et de
          l'automatisation. Ici, je partage mes expérimentations, tutoriels
          (Make, n8n, Python, Cloud...) et analyses pour rendre ces sujets
          accessibles. Si souhaitez échanger ou discuter de vos projets,
          n'hésitez pas à me contacter !
        </p>
        <a
          href="#contact"
          className="bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300"
        >
          Contactez-moi
        </a>
      </div>
    </section>
  );
};

export default Hero;
