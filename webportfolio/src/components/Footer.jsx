import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-8">
          <div>
            <h3 className="mb-6 uppercase tracking-wide text-sm">risto toivanen</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Second-year student at Sakky in Kuopio, studying software development. Developing practical skills in programming and software design.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/risto_toivanenn/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gray-100 hover:text-gray-100 transition-all">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/risto-toivanen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gray-100 hover:text-gray-100 transition-all">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/RistoT1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gray-100 hover:text-gray-100 transition-all">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 uppercase tracking-wide text-sm">navigation</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-gray-100 text-sm transition-colors">home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gray-100 text-sm transition-colors">about</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-gray-100 text-sm transition-colors">work</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-gray-100 text-sm transition-colors">contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 uppercase tracking-wide text-sm">connect</h3>
            <ul className="space-y-3">
              <li><a href="mailto:ristotoiv.rt@gmail.com" className="text-gray-400 hover:text-gray-100 text-sm transition-colors">email</a></li>
              <li><a href="tel:+358449787395" className="text-gray-400 hover:text-gray-100 text-sm transition-colors">phone</a></li>
              <li><a href="https://www.linkedin.com/in/risto-toivanen/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 text-sm transition-colors">linkedin</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 risto toivanen. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;