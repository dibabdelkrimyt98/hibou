import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        <img src={logo} alt="Hibou Consulting RH Logo" className="h-16" />
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#accueil" className="text-gray-700 hover:text-orange-500 transition duration-300">Accueil</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-orange-500 transition duration-300">Services</a></li>
          <li><a href="#partenaires" className="text-gray-700 hover:text-orange-500 transition duration-300">Partenaires</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-orange-500 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;