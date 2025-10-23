import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending...');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('message sent');
      setFormData({ name: '', email: '', project: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 2000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-light mb-16 uppercase tracking-wide">let's work together</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="mb-8 border-l border-pink-200 pl-8">
              <h3 className="text-sm mb-2 uppercase tracking-wide">email</h3>
              <a href="mailto:Ristotoiv.rt@gmail.com" className="text-gray-400 hover:text-gray-100 transition-colors">
                Ristotoiv.rt@gmail.com
              </a>
            </div>
            
            <div className="mb-8 border-l border-pink-200 pl-8">
              <h3 className="text-sm mb-2 uppercase tracking-wide">phone</h3>
              <p className="text-gray-400">+358 44 9787395</p>
            </div>
            
            <div className="mb-8 border-l border-pink-200 pl-8">
              <h3 className="text-sm mb-2 uppercase tracking-wide">location</h3>
              <p className="text-gray-400">Kuopio, Finland</p>
            </div>
            
            <div className="mb-8 border-l border-pink-200 pl-8">
              <h3 className="text-sm mb-2 uppercase tracking-wide">availability</h3>
              <p className="text-gray-400">open for new projects</p>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-pink-200 p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-gray-400 text-sm uppercase tracking-wide">name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="your name"
                className="w-full p-4 bg-transparent border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-gray-100 transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-gray-400 text-sm uppercase tracking-wide">email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full p-4 bg-transparent border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-gray-100 transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="project" className="block mb-2 text-gray-400 text-sm uppercase tracking-wide">project type</label>
              <input 
                type="text" 
                id="project" 
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="web app, mobile app, etc."
                className="w-full p-4 bg-transparent border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-gray-100 transition-colors"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-gray-400 text-sm uppercase tracking-wide">message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="tell me about your project..."
                className="w-full p-4 bg-transparent border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-gray-100 transition-colors resize-none"
              />
            </div>
            
            <button 
              onClick={handleSubmit}
              disabled={submitStatus === 'sending...'}
              className="w-full bg-transparent text-gray-400 p-4 border border-gray-700 hover:border-gray-100 hover:text-gray-100 transition-all text-sm uppercase tracking-wide disabled:opacity-50"
            >
              {submitStatus || 'send message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;