import React, { useEffect, useMemo } from 'react';

// Helper function to create, add, and return a DOM element
const createHeadTag = (tagName, attributes) => {
  const el = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'text') {
      el.text = value; // For <script type="application/ld+json">
    } else {
      el.setAttribute(key, value);
    }
  });
  document.head.appendChild(el);
  return el;
};

// Helper function to remove a DOM element
const removeHeadTag = (el) => {
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

/**
 * Lightweight head manager for SPA routes
 * Props:
 * - title: string
 * - description: string
 * - baseUrl: string (e.g., 'https://your-domain.com', defaults to window.location.origin)
 * - canonicalPath: string (e.g., '/about')
 * - openGraph: { type, image, siteName, urlOverride }
 * - twitter: { card, image }
 * - jsonLd: object | object[] (will be injected as application/ld+json)
 */
const SEOHead = ({
  title,
  description,
  baseUrl,
  canonicalPath,
  openGraph = {},
  twitter = {},
  jsonLd,
}) => {
  
  // Use baseUrl prop, env var, or window.location.origin.
  // This removes the hardcoded 'roamingit.netlify.app' fallback.
  const origin = useMemo(() => {
    const defaultBase = typeof window !== 'undefined' ? window.location.origin : '';
    const viteBase = (typeof import.meta !== 'undefined' && import.meta.env)
      ? (import.meta.env.VITE_BASE_URL || import.meta.env.BASE_URL || '')
      : '';
    return baseUrl || viteBase || defaultBase;
  }, [baseUrl]);

  // Create the full canonical URL
  const canonical = useMemo(() => (
    openGraph.urlOverride || `${origin.replace(/\/$/, '')}${canonicalPath ? `/${canonicalPath.replace(/^\//, '')}` : ''}`
  ), [origin, canonicalPath, openGraph.urlOverride]);

  useEffect(() => {
    const tags = []; // Keep track of all tags we add

    // 1. Title
    if (title) {
      document.title = title;
    }

    // 2. Canonical Link
    tags.push(createHeadTag('link', { rel: 'canonical', href: canonical }));

    // 3. Standard Meta
    if (description) {
      tags.push(createHeadTag('meta', { name: 'description', content: description }));
    }

    // 4. Open Graph (og:*)
    tags.push(createHeadTag('meta', { property: 'og:title', content: title || '' }));
    tags.push(createHeadTag('meta', { property: 'og:description', content: description || '' }));
    tags.push(createHeadTag('meta', { property: 'og:url', content: canonical }));
    tags.push(createHeadTag('meta', { property: 'og:type', content: openGraph.type || 'website' }));
    if (openGraph.image) {
      tags.push(createHeadTag('meta', { property: 'og:image', content: openGraph.image }));
    }
    if (openGraph.siteName) {
      tags.push(createHeadTag('meta', { property: 'og:site_name', content: openGraph.siteName }));
    }

    // 5. Twitter
    tags.push(createHeadTag('meta', { name: 'twitter:card', content: twitter.card || 'summary' }));
    tags.push(createHeadTag('meta', { name: 'twitter:title', content: title || '' }));
    tags.push(createHeadTag('meta', { name: 'twitter:description', content: description || '' }));
    if (twitter.image) {
      tags.push(createHeadTag('meta', { name: 'twitter:image', content: twitter.image }));
    }

    // 6. JSON-LD
    if (jsonLd) {
      tags.push(createHeadTag('script', {
        type: 'application/ld+json',
        text: JSON.stringify(jsonLd),
      }));
    }

    // 7. Cleanup Function
    // This runs when the component unmounts or props change
    return () => {
      // Remove all tags this instance created
      tags.forEach(removeHeadTag);
    };
    
  }, [
    title, 
    description, 
    canonical, // Derived from origin, path, override
    openGraph.type, 
    openGraph.image, 
    openGraph.siteName, 
    twitter.card, 
    twitter.image, 
    jsonLd,
    // Note: 'canonical' dependency already covers origin, canonicalPath, and urlOverride
  ]);

  return null; // This component renders nothing to the DOM tree
};

export default React.memo(SEOHead);