import React, { Suspense } from 'react';
import FormlessHero from '../components/FormlessHero';
import LazySection from '../components/LazySection';
import SEOHead from '../components/SEOHead';
const Services = React.lazy(() => import('../components/Services'));
const Teams = React.lazy(() => import('../components/Teams'));
const ContactSection = React.lazy(() => import('../components/ContactSection'));
const About = React.lazy(() => import('../components/About'));
const Products = React.lazy(() => import('../components/Products'));

const Home = () => {
  return (
    <>
      <SEOHead
        title="Roaming Engineering — Reliable, Modern Products for Teams"
        description="Roaming Engineering builds and operates secure, reliable products with modern stacks and strong developer experience."
        canonicalPath="/"
        openGraph={{ siteName: 'Roaming Engineering', type: 'website' }}
        twitter={{ card: 'summary' }}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Roaming Engineering',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://roamingit.netlify.app',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${typeof window !== 'undefined' ? window.location.origin : 'https://roamingit.netlify.app'}/?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <FormlessHero />
      <LazySection>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading teams…</div>}>
          <About />
        </Suspense>
      </LazySection>

      <LazySection>
        <Suspense fallback={<div className="loading" style={{padding:'2rem',textAlign:'center'}}>Loading products…</div>}>
          <Products />
        </Suspense>
      </LazySection>
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
