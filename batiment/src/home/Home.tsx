import React, { useState } from 'react';
import './Home.css';
import About from '../About/About';
import ContactPage from '../Contact';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}!\n\nWe received your inquiry and will contact you at ${formData.email} soon.`);
    setFormData({ name: '', email: '', phone: '', project: '' });
    setSubmitted(true);
  };

  return (
    <div className="home">
      {/* Header & Navigation */}
      <header>
        <nav>
          <a href="/" className="logo">BuildPro</a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Building Solutions</h1>
          <p>Quality construction services for residential and commercial projects</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Request a Quote</a>
            <a href="#services" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              { icon: '🏗️', title: 'Construction', desc: 'From residential homes to commercial buildings, we deliver quality construction with precision and professionalism.' },
              { icon: '🔧', title: 'Renovation', desc: 'Transform your space with our expert renovation services. We modernize and refresh existing structures.' },
              { icon: '⚡', title: 'Electrical Work', desc: 'Professional electrical installation and maintenance services meeting all safety standards and regulations.' },
              { icon: '🚰', title: 'Plumbing', desc: 'Complete plumbing solutions for new constructions and repairs, with reliable and durable installations.' },
              { icon: '🏠', title: 'Interior Design', desc: 'Create beautiful interiors that match your vision. Our design team brings functionality and aesthetics together.' },
              { icon: '📐', title: 'Project Management', desc: 'Full project coordination from planning to completion, ensuring timely delivery and budget adherence.' }
            ].map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.icon} {service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="why-us">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">

        <ContactPage />
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 BuildPro Construction. All rights reserved. | Professional Building Solutions</p>
      </footer>
    </div>
  );
}