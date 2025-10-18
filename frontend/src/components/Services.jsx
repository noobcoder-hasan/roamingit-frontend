import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Automation Solutions',
    description:
      'Streamline repetitive tasks and business processes using intelligent automation tools, chatbots, and AI workflows for improved efficiency and accuracy.',
  },
  {
    title: 'AI-Powered Digital Marketing',
    description:
      'Boost your brand visibility using AI-driven strategies — from social media automation and SEO optimization to predictive analytics and targeted ad campaigns.',
  },
  {
    title: 'Web Development',
    description:
      'Modern, responsive, and SEO-friendly websites built with cutting-edge technologies like Laravel, React, and WordPress to ensure performance and scalability.',
  }
];

const Services = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="services" className="services-section relative" aria-labelledby="services-title">
      <div className="hero-bg absolute inset-0" aria-hidden="true"></div>
      {/* <div className="hero absolute inset-0 z-0" aria-hidden="true">
        <img src={im} alt="" className="w-full h-full object-cover opacity-20" />
      </div> */}
      
      <div className="container">
        <h2 id="services-title" className="section-title">Products</h2>
        <p className="section-subtitle">
          We build and operate reliable, secure, and delightful products.
        </p>

        {/* Slide Carousel Layout (desktop/tablet) */}
        <div className="orbit-scene" aria-hidden="false">
          <div className="orbit" role="list" aria-label="Services carousel">
            <div className="slide-container">
              <div className="slide-track">
                {/* Duplicate items for seamless loop */}
                {[...servicesData, ...servicesData].map((svc, idx) => (
                  <button
                    key={idx}
                    className="orbit-item"
                    role="listitem"
                    aria-label={`${svc.title}: ${svc.description}`}
                    style={{ '--item-index': idx }}
                    onClick={scrollToContact}
                  >
                    <div className="orbit-item-inner">
                      <div className="orbit-label">{svc.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid fallback (mobile / reduced-motion) */}
        <div className="services-grid" role="list">
          {servicesData.map((svc, idx) => (
            <article
              key={idx}
              className="service-card"
              role="listitem"
              tabIndex={0}
              aria-label={`${svc.title}: ${svc.description}`}
            >
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-description">{svc.description}</p>
            </article>
          ))}
        </div>

        {/* Universal Contact Section */}
        <div className="services-contact">
          <button className="universal-contact-btn" onClick={scrollToContact}>
            Contact Us
            <span className="arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;