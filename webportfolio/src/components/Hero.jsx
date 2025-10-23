import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const subtitleRef = useRef(null);
  const [subtitleText] = useState('SOFTWARE DEVELOPER');

  useEffect(() => {
    const typeWriter = (element, text, speed = 150) => {
      let i = 0;
      const originalText = text;
      element.textContent = '';
      element.style.opacity = '1';

      const step = () => {
        if (i < originalText.length) {
          element.textContent += originalText.charAt(i++);
          setTimeout(() => requestAnimationFrame(step), speed);
        }
      };

      requestAnimationFrame(step);
    };

    const timer = setTimeout(() => {
      if (subtitleRef.current) {
        typeWriter(subtitleRef.current, subtitleText, 150);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [subtitleText]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-8"
      style={{
        backgroundImage: "url('../img/frontpage_img.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1
      }}
    >
      <div className="max-w-[800px] text-left">
        <h1 
          className="mb-4"
          style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            fontWeight: 300,
            lineHeight: 0.85,
            color: 'var(--color-text-main)',
            fontFamily: 'inherit'
          }}
        >
          <span 
            className="block opacity-0"
            style={{
              animation: 'fadeInUp 1s ease forwards'
            }}
          >
            risto
          </span>
          <span 
            className="block opacity-0"
            style={{
              animation: 'fadeInUp 1s ease forwards',
              animationDelay: '0.2s'
            }}
          >
            toivanen
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="hero-subtitle mb-4 opacity-0"
          style={{
            fontSize: '1.25rem',
            animation: 'fadeInUp 1s ease 0.4s forwards',
            fontWeight: 300,
            color: 'var(--color-text-white)',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}
        >
          {subtitleText}
        </p>
        
        <div 
          className="opacity-0"
          style={{
            animation: 'fadeInUp 1s ease 0.6s forwards',
            color: 'var(--color-text-white)',
            fontSize: '1rem',
            lineHeight: 1.8
          }}
        >
          <p>
            Second-year student at Sakky in Kuopio, studying software development. 
            Developing practical skills in programming and software design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;