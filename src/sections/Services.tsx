import React from "react";
import { Link } from "react-router-dom";
import { Code, Server, Cpu } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: Code,
      title: "Développement Web Front-end",
      description:
        "Création d'interfaces utilisateur interactives et responsives avec React",
      link: "/services/frontend",
    },
    {
      icon: Server,
      title: "Développement d'Api Personnalisées",
      description:
        "Mise en place de logiques serveur robustes, API RESTful (Node.js, Python, etc.).",
      link: "/services/backend",
    },
    {
      icon: Cpu,
      title: "Automatisation & Solutions sur Mesure",
      description:
        "Optimisation de processus et développement de solutions complètes, de la conception au déploiement.",
      link: "/services/automation",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Mes Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link to={service.link} key={index} className="h-full">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
