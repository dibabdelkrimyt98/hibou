import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'; // Icônes de réseaux sociaux

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-gray-300">© 2024 HIBOU CONSULTING RH. Tous droits réservés.</p>
        <div className="flex space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition duration-300">
            <FaFacebookF className="text-2xl" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition duration-300">
            <FaLinkedinIn className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;