import React, { useEffect, useRef, useState } from 'react';

const LazySection = ({
  children,
  rootMargin = '200px',
  placeholderHeight = '400px',
  className,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    // Fallback if IntersectionObserver isn't supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {visible ? (
        children
      ) : (
        <div style={{ minHeight: placeholderHeight }} aria-hidden="true" />
      )}
    </div>
  );
};

export default React.memo(LazySection);