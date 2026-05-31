import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Capabilities from './components/Capabilities';
import QuoteBlock from './components/QuoteBlock';
import FeatureHighlights from './components/FeatureHighlights';
import TerminalShowcase from './components/TerminalShowcase';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { ToastProvider } from './components/ToastProvider';
import './styles/globals.css';

function App() {
  return (
    <ToastProvider>
      <Navbar />
      <Hero />
      <Stats />
      <Capabilities />
      <QuoteBlock />
      <FeatureHighlights />
      <TerminalShowcase />
      <CTA />
      <Footer />
    </ToastProvider>
  );
}

export default App;
