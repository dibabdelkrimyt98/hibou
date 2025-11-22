// src/components/Contact.js

import emailjs from '@emailjs/browser'; // Importez la bibliothèque EmailJS
import { useState } from 'react'; // Importez useState pour gérer l'état du formulaire
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'; // Icônes pour le contact

const Contact = () => {
  // État pour stocker les données du formulaire
  const [formData, setFormData] = useState({
    email: '',    // Correspond à {{email}} dans le modèle EmailJS
    subject: '',  // Correspond à {{subject}} dans le modèle EmailJS
    message: '',  // Correspond à {{message}} dans le modèle EmailJS
  });

  // État pour afficher les messages de statut (succès/erreur)
  const [status, setStatus] = useState('');

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut du formulaire

    setStatus('Envoi en cours...'); // Indique à l'utilisateur que l'envoi est en cours

    try {
      // **** REMPLACEZ CES VALEURS PAR VOS VRAIS ID EMAILJS ****
      const serviceId = 'service_rxrif6b';    // Ex: 'default_service' ou un ID spécifique
      const templateId = 'template_rktp6qa';  // L'ID du modèle que vous avez créé (ex: 'contact_form')
      const publicKey = 'h9x0PpZ0hmANt51ja';    // Votre clé publique (User ID) que vous trouverez dans les réglages de votre compte EmailJS
      // ******************************************************

      // Envoi des données via EmailJS
      await emailjs.send(serviceId, templateId, formData, publicKey);

      setStatus('E-mail envoyé avec succès !'); // Affiche le message de succès
      setFormData({ email: '', subject: '', message: '' }); // Réinitialise le formulaire

    } catch (error) {
      // Gère les erreurs lors de l'envoi avec EmailJS
      console.error('Erreur lors de l\'envoi de l\'e-mail avec EmailJS:', error);
      setStatus('Une erreur s\'est produite lors de l\'envoi. Veuillez réessayer.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">NOUS CONTACTER</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
          <form 
            className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2 max-w-md" 
            onSubmit={handleSubmit} // Attache la fonction handleSubmit à l'événement de soumission
          >
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Votre Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" // Le nom doit correspondre à la clé dans formData et au nom de la variable dans le template EmailJS
                value={formData.email} // Lie la valeur à l'état
                onChange={handleChange} // Gère les changements
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="exemple@domaine.com" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" // Le nom doit correspondre à la clé dans formData et au nom de la variable dans le template EmailJS
                value={formData.subject} // Lie la valeur à l'état
                onChange={handleChange} // Gère les changements
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Sujet de votre message" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Votre Message</label>
              <textarea 
                id="message" 
                name="message" // Le nom doit correspondre à la clé dans formData et au nom de la variable dans le template EmailJS
                rows="6" 
                value={formData.message} // Lie la valeur à l'état
                onChange={handleChange} // Gère les changements
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none" 
                placeholder="Écrivez votre message ici..." 
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 w-full text-lg shadow-md"
              disabled={status === 'Envoi en cours...'} // Désactive le bouton pendant l'envoi
            >
              {status === 'Envoi en cours...' ? 'ENVOI...' : 'ENVOYER LE MESSAGE'} {/* Texte du bouton change pendant l'envoi */}
            </button>

            {/* Affichage du message de statut (succès ou erreur) */}
            {status && (
              <p className={`mt-4 text-center ${status.includes('Erreur') ? 'text-red-500' : 'text-green-500'}`}>
                {status}
              </p>
            )}
          </form>

          {/* Informations de contact (Numéro, Email, Adresse) */}
          <div className="md:w-1/3 text-gray-700 text-lg space-y-6">
            <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-orange-500 text-3xl" />
                <span>+33 123 45 67 89</span>
            </div>
            <div className="flex items-center space-x-4">
                <FaEnvelope className="text-orange-500 text-3xl" />
                <span>contact@hibouconsulting.com</span>
            </div>
            <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-orange-500 text-3xl" />
                <span>123 Rue de la Sagesse, 75000 Paris, France</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;