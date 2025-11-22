import { FaGraduationCap, FaSearch, FaUserTie } from 'react-icons/fa'; // Icônes pour les services

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50 md:w-1/2">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">NOS SERVICES</h2>
        <div className="space-y-8 max-w-md mx-auto">
          <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <FaUserTie className="text-orange-500 text-4xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recrutement & Chasse de Têtes</h3>
              <p className="text-gray-600">Identification et sélection des meilleurs talents pour vos équipes, avec une approche ciblée et personnalisée.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <FaSearch className="text-orange-500 text-4xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Conseil RH & Stratégie</h3>
              <p className="text-gray-600">Optimisation de vos organisations et élaboration de politiques de gestion des ressources humaines efficaces.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
            <FaGraduationCap className="text-orange-500 text-4xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Formation & Développement</h3>
              <p className="text-gray-600">Conception et mise en œuvre de programmes de formation personnalisés pour le développement continu de vos salariés.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;