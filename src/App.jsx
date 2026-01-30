import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroductionSection from './components/IntroductionSection';
import TargetSection from './components/TargetSection';
import SupervisorSection from './components/SupervisorSection';
import EffectivenessSection from './components/EffectivenessSection';
import TestimonialsSection from './components/TestimonialsSection';
import HealingSection from './components/HealingSection';
import PlatformSection from './components/PlatformSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <IntroductionSection />
        <TargetSection />
        <SupervisorSection />
        <PlatformSection />
        <HealingSection />
        <EffectivenessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
