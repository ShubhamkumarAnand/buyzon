import Link from 'next/link';
import React from 'react';

const HeroBanner = () => (
  <div className="hero-banner-container">
    <div>
      <p className="beats-solo">SMALL TEXT</p>
      <h3>MID TEXT</h3>
      <img src="" alt="headphones" className="hero-banner-image" />
      <div>
        <Link href="/products/ID">
          <button type="button">
            BUTTON TEXT
          </button>
        </Link>
        <div className="DESC">
          <h5>description</h5>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;
