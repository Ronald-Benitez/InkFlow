import Navbar from './components/Navbar';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/Contact';
import HomePage from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <div id="inicio">
        <HomePage />
      </div>
      <div id="servicio">
        <Services />
      </div>
      <div id="sobre-nosotros">
        <About />
      </div>
      <div id="contacto">
        <ContactForm />
      </div>
    </>
  );
}

export default App;
