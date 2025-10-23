import React from 'react';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: 'ModernPizzeria-ES6-PHP',
      description: 'A responsive web application built with ES6 JavaScript and PHP, featuring dynamic menu display, cart-based ordering, and session-based authentication. Originally a school project, it evolved into a standalone full-stack solution with a MySQL database and AJAX-powered interactivity.',
      tech: 'JavaScript • SQL • PHP • CSS',
      liveUrl: 'https://sakkypizzeria.free.nf/',
      githubUrl: 'https://github.com/RistoT1/ModernPizzeria-ES6-PHP',
      image: '/api/placeholder/180/120'
    },
    {
      number: '02',
      title: 'AutoMarket -UsersDashboard',
      description: 'Users Dashboard A simple user dashboard for AutoMarket. Currently a work in progress.',
      tech: 'PHP • SQL • JavaScript • HTML • CSS',
      githubUrl: 'https://github.com/RistoT1/AutoMarket_UsersDashboard',
      image: '/api/placeholder/180/120'
    },
    {
      number: '03',
      title: 'Pizzanpaikka -Real HTML website for client',
      description: 'Updated HTML for a local pizzeria website. Currently deployed for approval.',
      tech: 'html • css',
      liveUrl: 'https://niirala.netlify.app/',
      githubUrl: 'https://github.com/RistoT1/Pizzanpaikka-Website--small-project',
      image: '/api/placeholder/180/120'
    },
    {
      number: '04',
      title: 'Second-year repository',
      description: 'You can find more of my projects on my GitHub, where I will continue posting actively',
      tech: 'html • css • javascript • php',
      githubUrl: 'https://github.com/RistoT1/second-Year-Projects',
      image: '/api/placeholder/180/120'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-24 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light mb-16 uppercase tracking-wide">selected work</h2>
        
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border-t border-pink-200 py-12 grid grid-cols-1 lg:grid-cols-[auto_auto_2fr_auto] gap-12 items-center hover:bg-pink-200/5 transition-all px-4"
            >
              <div className="text-gray-500 uppercase tracking-widest">{project.number}</div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full max-w-[180px] h-auto object-cover border border-pink-200 rounded transition-all hover:scale-105 hover:border-pink-200/70 hover:shadow-[0_0_20px_rgba(255,142,179,0.3)] cursor-pointer justify-self-center"
              />
              
              <div>
                <h3 className="text-2xl font-light mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wide">{project.tech}</p>
              </div>
              
              <div className="flex flex-col gap-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-100 text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-xs"></i>
                    live site
                  </a>
                )}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-100 text-sm uppercase tracking-wide flex items-center gap-2 transition-colors"
                >
                  <i className="fab fa-github text-sm"></i>
                  source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;