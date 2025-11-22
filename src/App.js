import './App.css'; // Pour les styles Tailwind CSS ou globaux
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <main> {/* Utilisation de la balise <main> pour la sémantique */}
        <Hero />
        <About />
        <div className="flex flex-col md:flex-row"> {/* Conteneur pour Services et Partners */}
          <Services />
          <Partners />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;