import React from 'react';
import { FaBuilding, FaGlobe, FaHandshake, FaLightbulb } from 'react-icons/fa'; // Icônes génériques pour les partenaires

const Partners = () => {
  const partnerNames = [
    { name: "Global Solutions", icon: FaBuilding },
    { name: "Tech Innovate", icon: FaGlobe },
    { name: "Visionary Group", icon: FaHandshake },
    { name: "Bright Future", icon: FaLightbulb }, // FaLightbulb est déjà importé ailleurs ou importez-le ici si besoin
    { name: "Strategic Allies", icon: FaBuilding },
    { name: "Excellence Hub", icon: FaGlobe },
  ];

  return (
    <section id="partenaires" className="py-20 px-4 bg-white md:w-1/2">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">NOS PARTENAIRES</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {partnerNames.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              {React.createElement(partner.icon, { className: "text-gray-600 text-4xl mb-3" })}
              <p className="text-lg font-semibold text-gray-700 text-center">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;