'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { href: '/work',       label: 'Work' },
  { href: '/brands',     label: 'Brands' },
  { href: '/expertise',  label: 'Expertise' },
  { href: '/experience', label: 'Experience' },
  { href: '/about',      label: 'About' },
  { href: '/insights',   label: 'Insights' },
  { href: '/contact',    label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() { setMenuOpen(false); }

  return (
    <header className="topbar">
      <div className="container header-grid">
        <Link href="/" className="brandmark" aria-label="Michael Medhat homepage">
          MICHAEL<span>.</span>MEDHAT
        </Link>

        <nav
          aria-label="Main navigation"
          className={`navbar${menuOpen ? ' open' : ''}`}
          id="mobileNav"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? 'page' : undefined}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div aria-label="Color palette" className="theme-pills">
          <button
            type="button"
            data-theme-button="navy"
            aria-pressed={String(theme === 'navy') as 'true' | 'false'}
            onClick={() => setTheme('navy')}
          >
            NAVY
          </button>
          <button
            type="button"
            data-theme-button="forest"
            aria-pressed={String(theme === 'forest') as 'true' | 'false'}
            onClick={() => setTheme('forest')}
          >
            FOREST
          </button>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-controls="mobileNav"
          aria-expanded={String(menuOpen) as 'true' | 'false'}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
