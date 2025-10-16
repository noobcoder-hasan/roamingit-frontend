import React, { useEffect, useMemo } from 'react';

// Lightweight head manager for SPA routes
// Props:
// - title: string
// - description: string
// - canonicalPath: string (e.g., '/about')
// - openGraph: { type, image, siteName, urlOverride }
// - twitter: { card, image }
// - jsonLd: object | object[] (will be injected as application/ld+json)
const SEOHead = ({
  title,
  description,
  canonicalPath,
  openGraph = {},
  twitter = {},
  jsonLd,
}) => {
  const origin = useMemo(() => (
    typeof window !== 'undefined' ? window.location.origin : 'https://roamingit.netlify.app'
  ), []);
  const canonical = useMemo(() => (
    openGraph.urlOverride || `${origin}${canonicalPath || ''}`
  ), [origin, canonicalPath, openGraph.urlOverride]);

  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (attr) => {
      const selector = Object.entries(attr).map(([k, v]) => `[${k}="${v}"]`).join('');
      let el = document.head.querySelector(`meta${selector}`);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attr).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      } else if (attr.content) {
        el.setAttribute('content', attr.content);
      }
      return el;
    };

    if (description) setMeta({ name: 'description', content: description });
    setMeta({ property: 'og:title', content: title || '' });
    setMeta({ property: 'og:description', content: description || '' });
    setMeta({ property: 'og:type', content: openGraph.type || 'website' });
    setMeta({ property: 'og:url', content: canonical });
    if (openGraph.image) setMeta({ property: 'og:image', content: openGraph.image });
    setMeta({ name: 'twitter:card', content: twitter.card || 'summary' });
    if (twitter.image) setMeta({ name: 'twitter:image', content: twitter.image });

    const linkCanonical = (() => {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
      return link;
    })();

    // JSON-LD injection
    let jsonLdScript;
    if (jsonLd) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      jsonLdScript.text = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      // Cleanup JSON-LD on unmount to avoid duplicates during navigation
      if (jsonLdScript && jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, [title, description, canonical, openGraph.type, openGraph.image, twitter.card, twitter.image, jsonLd]);

  return null;
};

export default React.memo(SEOHead);