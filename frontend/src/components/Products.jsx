import React from 'react';
import './Products.css';

// Helper to load a live screenshot image from the site using WordPress mShots
const mshot = (url, w = 1024) => `https://s.wordpress.com/mshots/v1/${encodeURI(url)}?w=${w}`;

const productsData = [
  {
    title: "Women's Fashion BD",
    siteUrl: 'https://womensfashion-bd.com/',
    imageUrl: mshot('https://womensfashion-bd.com', 1024),
    description:
      "Fashion‑focused online store for women’s apparel and accessories with simple navigation.",
    features: ['Category browsing', 'Search & filters', 'Order tracking'],
  },
  {
    title: 'Roaming Outfits',
    siteUrl: 'https://roamingoutfits.com/',
    imageUrl: mshot('https://roamingoutfits.com', 1024),
    description:
      'Apparel storefront with dynamic catalog, promotions, and intuitive cart and wishlist UX.',
    features: ['Mobile‑first design', 'Catalog & collections', 'Marketing integrations'],
  },
  {
    title: 'Derbana',
    siteUrl: 'https://derbana.com/',
    imageUrl: mshot('https://derbana.com', 1024),
    description:
      'Modern e‑commerce storefront delivering curated collections and a streamlined checkout experience.',
    features: ['Responsive UI', 'Secure payments', 'SEO‑optimized pages'],
  },
  {
    title: 'BlackRock BD',
    siteUrl: 'https://blackrock-bd.com/',
    imageUrl: mshot('https://blackrock-bd.com', 1024),
    description:
      'Corporate website showcasing brand, portfolio, and services with fast, optimized pages.',
    features: ['Performance‑tuned', 'SEO baseline', 'Contact & inquiry flows'],
  },


];

const Products = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="products-section" aria-labelledby="products-title">
      <div className="products-overlay" aria-hidden="true"></div>

      <div className="products-container">
        <header className="products-header">
          <h2 id="products-title" className="products-title">Products</h2>
          <p className="products-subtitle">
            A practical showcase of what we build and operate for teams.
          </p>
        </header>

        <div className="products-grid" role="list">
          {productsData.map((p, idx) => (
            <article
              key={idx}
              className="product-card"
              role="listitem"
              tabIndex={0}
              aria-label={`${p.title}: ${p.description}`}
            >
              <a
                href={p.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="product-image-link"
                aria-label={`Open ${p.title} in a new tab`}
              >
                <img
                  className="product-image"
                  src={p.imageUrl}
                  alt={`${p.title} website screenshot`}
                  loading="lazy"
                  decoding="async"
                  data-fallback-step="0"
                  onError={(e) => {
                    const url = p.siteUrl;
                    const step = Number(e.currentTarget.getAttribute('data-fallback-step') || 0) + 1;
                    e.currentTarget.setAttribute('data-fallback-step', String(step));
                    const candidates = [
                      mshot(url, 640),
                      `https://image.thum.io/get/width/1024/${url}`,
                      `https://image.thum.io/get/width/640/${url}`,
                    ];
                    const apiflashKey = import.meta.env.VITE_APIFLASH_KEY;
                    if (apiflashKey) {
                      candidates.push(`https://api.apiflash.com/v1/urltoimage?access_key=${apiflashKey}&url=${encodeURIComponent(url)}&width=1024&format=png&wait_until=networkidle0`);
                    }
                    const next = candidates[step - 1];
                    if (next) {
                      e.currentTarget.src = next;
                    } else {
                      e.currentTarget.src = '/bg-illustration.svg';
                    }
                  }}
                />
              </a>
              <div className="product-meta">
                <h3 className="product-title">{p.title}</h3>
                <a
                  className="product-domain"
                  href={p.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${p.title} at ${new URL(p.siteUrl).hostname}`}
                >
                  {new URL(p.siteUrl).hostname} ↗
                </a>
                <p className="product-description">{p.description}</p>
                {p.features?.length ? (
                  <ul className="product-features" role="list">
                    {p.features.map((f, i) => (
                      <li key={i} className="product-feature">{f}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default React.memo(Products);