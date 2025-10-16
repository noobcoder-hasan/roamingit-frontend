import React, { useMemo, useState } from 'react';
import SEOHead from '../components/SEOHead';

const initialForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // SEO: dynamic title, meta description, canonical, OpenGraph/Twitter
  const siteUrl = useMemo(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://roamingit.netlify.app';
    return origin;
  }, []);
  const canonicalUrl = useMemo(() => `${siteUrl}/contact`, [siteUrl]);

  // JSON-LD for ContactPage
  const contactJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Roaming Engineering',
    url: canonicalUrl,
    description: 'Contact Roaming Engineering for travel planning, custom itineraries, and support.',
    publisher: {
      '@type': 'Organization',
      name: 'Roaming Engineering',
      url: siteUrl,
      logo: `${siteUrl}/logo-roaming.svg`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@roamingit.example',
      telephone: '+1-555-123-4567',
    }
  }), [canonicalUrl, siteUrl]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.trim()) next.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Please enter a message';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate submit; in real app, POST to backend or service like Formspree
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="contact-page" aria-labelledby="contact-title" style={{ padding: '4rem 5%', maxWidth: 900 }}>
      <SEOHead
        title="Contact Us | Roaming Engineering"
        description="Get in touch with Roaming Engineering for travel planning, custom itineraries, and support."
        canonicalPath="/contact"
        openGraph={{ type: 'website' }}
        twitter={{ card: 'summary' }}
        jsonLd={contactJsonLd}
      />
      <header>
        <h1 id="contact-title" style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Contact Roaming Engineering</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Have questions or want a custom itinerary? Send us a message and our team will get back to you.
        </p>
      </header>
      {submitted && (
        <div style={{ background: '#e7f5ff', border: '1px solid #a5d8ff', padding: '0.75rem 1rem', borderRadius: 6, marginBottom: '1rem' }}>
          Thank you! Your message has been sent. We’ll reply shortly.
        </div>
      )}
      <form onSubmit={onSubmit} noValidate aria-describedby="contact-desc">
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" value={form.name} onChange={onChange} placeholder="Your full name" style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} aria-required="true" />
            {errors.name && <small style={{ color: 'crimson' }}>{errors.name}</small>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} aria-required="true" />
            {errors.email && <small style={{ color: 'crimson' }}>{errors.email}</small>}
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={onChange} rows={6} placeholder="Tell us about your trip, dates, preferences..." style={{ width: '100%', padding: '0.6rem', borderRadius: 6, border: '1px solid #ccc' }} aria-required="true" />
          {errors.message && <small style={{ color: 'crimson' }}>{errors.message}</small>}
        </div>
        <button type="submit" style={{ marginTop: '1rem', background: '#007BFF', color: '#fff', padding: '0.7rem 1.2rem', border: 'none', borderRadius: 6 }} aria-label="Send message">
          Send Message
        </button>
      </form>
      <div style={{ marginTop: '2rem', color: '#555' }}>
        <p><strong>Email:</strong> hello@roamingit.example</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Office:</strong> 123 Explorer Ave, Suite 10, Travel City</p>
      </div>

      {/* JSON-LD structured data for ContactPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Roaming Engineering',
          url: canonicalUrl,
          description: 'Contact Roaming Engineering for travel planning, custom itineraries, and support.',
          publisher: {
            '@type': 'Organization',
            name: 'Roaming Engineering',
            url: siteUrl,
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'hello@roamingit.example',
            telephone: '+1-555-123-4567',
          }
        })
      }} />
    </section>
  );
};

export default Contact;