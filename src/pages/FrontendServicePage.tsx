import React from "react";

const FrontendServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Développement de site web personnalisée
      </h1>
      <p className="text-gray-800 leading-relaxed mb-4">
        Objectif : Fournir une présence en ligne professionnelle et
        personnalisée pour les entreprises et les entrepreneurs.
      </p>

      <h2 className="text-gray-800 leading-relaxed text-2xl ">
        Solutions proposées
      </h2>

      <div className="text-gray-800 leading-relaxed mb-4">
        <p className="mb-4">
          Conception et développement de sites vitrines et e-commerce sous :
        </p>
        <p> ➡️ Design responsive adapté à tous les appareils </p>
        <p>➡️ Personnalisation complète selon l'identité visuelle du client</p>
        <p>
          ➡️ Optimisation SEO pour améliorer la visibilité sur les moteurs de
          recherche
        </p>
        <p>
          {" "}
          ➡️ Formation à l'administration du site pour une gestion autonome
        </p>
        ➡️ Formation à l'administration du site pour une gestion autonome
      </div>
      <h2 className="text-gray-800 leading-relaxed text-2xl">
        {" "}
        Valeur ajoutée
      </h2>
      <div>
        <p>✅ Mise en ligne rapide avec une interface conviviale</p>
        <p>✅ Adaptation parfaite à l'image de marque du client</p>
        <p>✅ Optimisation pour le référencement et la performance</p>
      </div>
    </div>
  );
};

export default FrontendServicePage;
