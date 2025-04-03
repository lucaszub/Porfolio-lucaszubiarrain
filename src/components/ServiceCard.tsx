import React from "react";

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-xl transition duration-300 flex flex-col h-full">
      <Icon
        width={40}
        height={40}
        className="text-accent-500 mb-4 inline-block"
        strokeWidth={1.5}
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
