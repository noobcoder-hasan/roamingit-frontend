import React from 'react';
import './About.css';
import SEOHead from './SEOHead';

const About = () => {
  return (
    <section id="aboutus" className="about-section" aria-labelledby="about-title">
      <SEOHead
        title="About Roaming Engineering — Product Engineering Partner"
        description="Roaming Engineering builds cloud‑native platforms and customer‑centric software, with security, performance, and observability baked in."
        canonicalPath="/about"
        openGraph={{ type: 'website' }}
        twitter={{ card: 'summary' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Roaming Engineering',
          url: typeof window !== 'undefined' ? `${window.location.origin}/about` : 'https://roamingit.netlify.app/about'
        }}
      />
      <div className="about-container">
        <header className="about-header">
          <h1 id="about-title" className="about-title">About Roaming Engineering</h1>
          <p className="about-lead">
            Roaming Engineering is a product engineering partner focused on building reliable,
            cloud‑native platforms and customer‑centric software. We help teams ship faster
            with modern stacks, strong DX, and a pragmatic approach to security, performance,
            and observability.
          </p>
        </header>

        <section className="about-highlights" aria-labelledby="why-title">
          <h2 id="why-title" className="about-subtitle">What We Do</h2>
          <ul className="about-list" role="list">
            <li>Product engineering for web, mobile, and APIs</li>
            <li>Cloud and DevOps automation (CI/CD, IaC, observability)</li>
            <li>AI and data platforms for insights and automation</li>
            <li>Security, compliance, and performance built-in</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;