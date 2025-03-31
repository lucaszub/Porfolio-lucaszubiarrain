import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Travaillons Ensemble
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          Prêt à démarrer votre projet ou simplement envie de discuter
          d'automatisation ou de développement web ? N'hésitez pas à me
          contacter.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-gray-700">
          <div className="flex items-center">
            <Mail size={20} className="text-accent-500 mr-3" />
            <a
              href="mailto:votre.email@exemple.com"
              className="hover:text-accent-600"
            >
              zubiarrainlucas@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Phone size={20} className="text-accent-500 mr-3" />
            <a href="tel:+33xxxxxxxxx" className="hover:text-accent-600">
              +33 6 19 44 91 33
            </a>
          </div>
          <div className="flex items-center">
            <MapPin size={20} className="text-accent-500 mr-3" />
            <span>Disponible à distance (France / International)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
