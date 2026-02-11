import { useState, useEffect } from 'react';
import './App.css';
import SplashScreen from './SplashScreen';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import SecretGateway from './components/HiddenGate';
import SecretPage from './components/Hidden';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (showSecret) {
    return <SecretPage onExit={() => setShowSecret(false)} />;
  }

  return (
    <>
      <SplashScreen finishLoading={isLoaded} />

      <SecretGateway onEnterSecret={() => setShowSecret(true)} />

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