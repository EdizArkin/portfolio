import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Academic from './components/Academic';
import Footer from './components/Footer';
import Background from './components/Background';
import MouseTrail from './components/MouseTrail';

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden selection:bg-neon-cyan/30 selection:text-neon-cyan">
      <Background />
      <MouseTrail />

      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Academic />
      </main>

      <Footer />
    </div>
  );
}

export default App;
