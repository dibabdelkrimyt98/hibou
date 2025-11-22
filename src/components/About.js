import { FaLightbulb } from 'react-icons/fa'; // Exemple d'icônes

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">QUI SOMMES-NOUS ?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chez Hibou Consulting RH, nous sommes une équipe de professionnels passionnés, dédiés à l'accompagnement des entreprises dans la gestion et le développement de leurs ressources humaines.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Notre approche est centrée sur l'humain, combinant expertise stratégique et solutions innovantes pour répondre aux défis RH contemporains. Nous œuvrons pour créer des environnements de travail épanouissants et performants.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Remplacement de l'image par une icône ou un bloc stylisé */}
          <div className="bg-orange-100 p-12 rounded-full flex items-center justify-center w-64 h-64 shadow-inner">
            <FaLightbulb className="text-orange-500 text-8xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;