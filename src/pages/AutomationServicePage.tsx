import React from "react";

const AutomationServicePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Automatisation & Solutions sur Mesure
      </h1>
      <p className="text-gray-800 leading-relaxed mb-4">
        Bienvenue dans l'univers de l'automatisation ! Mon objectif est de vous
        aider à transformer vos processus métier en véritables moteurs de
        productivité grâce à des outils modernes comme Make, n8n, et Zapier.
      </p>
      <p className="text-gray-800 leading-relaxed mb-6">
        Que vous soyez une petite entreprise ou une organisation en pleine
        croissance, je conçois des solutions sur mesure pour automatiser les
        tâches répétitives, réduire les erreurs humaines et libérer du temps
        pour ce qui compte vraiment.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Pourquoi choisir l'automatisation ?
        </h2>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>
            Gagnez du temps en éliminant les tâches manuelles répétitives.
          </li>
          <li>Améliorez la précision et réduisez les erreurs humaines.</li>
          <li>
            Optimisez vos ressources et concentrez-vous sur vos priorités.
          </li>
          <li>Créez des workflows intelligents adaptés à vos besoins.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Mes services d'automatisation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Intégration de workflows
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Je conçois et implémente des workflows automatisés pour connecter
              vos outils et applications préférés.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Automatisation sur mesure
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Chaque entreprise est unique. Je développe des solutions
              personnalisées adaptées à vos besoins spécifiques.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Maintenance & Support
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Je vous accompagne dans la maintenance et l'évolution de vos
              systèmes automatisés pour garantir leur efficacité.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Formation & Conseil
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Apprenez à tirer le meilleur parti des outils d'automatisation
              grâce à des sessions de formation et des conseils personnalisés.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Témoignages de clients
        </h2>
        <blockquote className="border-l-4 border-accent-600 pl-4 text-gray-800 italic mb-4">
          "Grâce à l'automatisation mise en place, nous avons économisé des
          heures chaque semaine et réduit nos erreurs de traitement de 80%."
          <span className="block text-gray-600 mt-2">- Client satisfait</span>
        </blockquote>
        <blockquote className="border-l-4 border-accent-600 pl-4 text-gray-800 italic">
          "Une solution sur mesure qui a transformé notre façon de travailler.
          Je recommande vivement !"
          <span className="block text-gray-600 mt-2">- Entrepreneur</span>
        </blockquote>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Prêt à automatiser votre entreprise ?
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          Contactez-moi dès aujourd'hui pour discuter de vos besoins et
          découvrir comment l'automatisation peut transformer votre activité.
        </p>
        <a
          href="/#contact"
          className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg shadow transition"
        >
          Me Contacter
        </a>
      </section>
    </div>
  );
};

export default AutomationServicePage;
