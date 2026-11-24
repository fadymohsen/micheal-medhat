'use client';

import { useState } from 'react';

interface BrandLogoProps {
  name: string;
  domain: string;
}

export default function BrandLogo({ name, domain }: BrandLogoProps) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`brand-logo${missing ? ' missing' : ''}`} title={name}>
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={`${name} brand icon`}
        loading="lazy"
        onError={() => setMissing(true)}
      />
      <span className="brand-fallback">{name}</span>
    </div>
  );
}
