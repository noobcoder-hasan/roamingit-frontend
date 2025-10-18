import React from 'react';
import './About.css';
import SEOHead from './SEOHead';

const About = () => {
  return (
    <section id="aboutus" className="about-section" aria-labelledby="about-title">
      <SEOHead
        title="About Roaming Engineering — Product Engineering Partner"
        description="Roaming Engineering builds reliable products and platforms—automation, AI-powered marketing, and modern web development with Laravel, React, and WordPress."
        canonicalPath="/about"
        openGraph={{ type: 'website', siteName: 'Roaming Engineering' }}
        twitter={{ card: 'summary' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Roaming Engineering',
          url: typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://roamingit.netlify.app/about',
          publisher: {
            '@type': 'Organization',
            name: 'Roaming Engineering',
            url: typeof window !== 'undefined' ? window.location.origin : 'https://roamingit.netlify.app'
          }
        }}
      />
      <div className="about-container">
        <header className="about-header">
          <h1 id="about-title" className="about-title">About Roaming Engineering</h1>
          <p className="about-lead">
            Roaming Engineering is a product engineering partner building reliable, secure products and platforms.
            We deliver automation solutions, AI-powered digital marketing, and modern web development with Laravel, React, and WordPress — with performance, security, and observability baked in.
          </p>
        </header>

        <section className="about-highlights" aria-labelledby="why-title">
          <h2 id="why-title" className="about-subtitle">What We Do</h2>
          <ul className="about-list" role="list">
            <li>Automation solutions for workflows, chatbots, and process efficiency</li>
            <li>AI-powered digital marketing: social automation, SEO, predictive analytics, ads</li>
            <li>Modern web development with Laravel, React, and WordPress (responsive, SEO‑friendly)</li>
            <li>Performance, security, and observability baked into everything we build</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;