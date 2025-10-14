import React, { Suspense } from 'react';
import FormlessHero from '../components/FormlessHero';
import LazySection from '../components/LazySection';
import SEOHead from '../components/SEOHead';
const Services = React.lazy(() => import('../components/Services'));
const Teams = React.lazy(() => import('../components/Teams'));
const ContactSection = React.lazy(() => import('../components/ContactSection'));

const Home = () => {
  return (
    <>
      <SEOHead
        title="Roaming IT — Reliable, Modern Products for Teams"
        description="Roaming IT builds and operates secure, reliable products with modern stacks and strong developer experience."
        canonicalPath="/"
        openGraph={{ siteName: 'Roaming IT', type: 'website' }}
        twitter={{ card: 'summary' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Roaming IT',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://www.roamingit.example',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${typeof window !== 'undefined' ? window.location.origin : 'https://www.roamingit.example'}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <FormlessHero />
      <LazySection>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading services…</div>}>
          <Services />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading teams…</div>}>
          <Teams />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading contact…</div>}>
          <ContactSection />
        </Suspense>
      </LazySection>
    </>
  );
};

export default Home;
