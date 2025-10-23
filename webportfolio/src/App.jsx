import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    const style = document.createElement('style');
    style.textContent = `
      :root { /* Dark theme */ ... }
      [data-theme="light"] { /* Light theme */ ... }

      * { margin:0; padding:0; box-sizing:border-box; }
      html { scroll-behavior: smooth; overflow-x:hidden; }
      body { font-family: var(--font-heading); background: linear-gradient(180deg, var(--color-bg-start), var(--color-bg-end)); color: var(--color-text-main); min-height:100vh; line-height:1.6; overflow-x:hidden; }
      @keyframes fadeInUp { 0% { opacity:0; transform:translateY(20px);} 100%{opacity:1; transform:translateY(0);} }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen" style={{ fontFamily: 'var(--font-heading)' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}