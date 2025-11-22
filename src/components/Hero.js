// src/components/Hero.js

import { motion } from 'framer-motion'; // <-- Importer motion

const Hero = () => {
  // Définir les variantes d'animation pour un meilleur contrôle
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Délai entre l'animation des enfants
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Commencer caché et plus bas
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Animer vers visible, position normale
  };

  return (
    <section 
      id="accueil" 
      // CHANGEMENT DE COULEURS ICI : Dégradé plus doux et professionnel
      className="relative bg-gradient-to-r from-gray-50 to-orange-100 py-24 px-4 min-h-screen flex items-center justify-center text-gray-800"
      // Note: text-gray-800 remplace text-white pour une meilleure lisibilité sur fond clair
    >
      <motion.div 
        className="container mx-auto text-center"
        variants={containerVariants} // Appliquer les variantes au conteneur
        initial="hidden"            // État initial
        animate="visible"           // État d'animation
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          variants={itemVariants} // Appliquer les variantes à chaque élément
        >
          FAÇONNONS L'AVENIR HUMAIN DE VOTRE ENTREPRISE
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          variants={itemVariants} // Appliquer les variantes à chaque élément
        >
          Expertise en conseil RH pour l'identification, le développement et la valorisation des talents.
        </motion.p>

        <motion.a 
          href="#contact" 
          className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg inline-block" // Ajout de inline-block pour assurer que l'animation s'applique bien
          variants={itemVariants} // Appliquer les variantes à chaque élément
        >
          DÉCOUVRIR NOS SOLUTIONS
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;