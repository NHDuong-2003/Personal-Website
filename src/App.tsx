import { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './SplashScreen';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen finishLoading={isLoaded} />

      <div className="main-content">
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;