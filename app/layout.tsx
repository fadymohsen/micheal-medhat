import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import { LightboxProvider } from '@/components/Lightbox';
import SiteAlert from '@/components/SiteAlert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Michael Medhat | Creative Strategy Consultant & Regional Brand Advisor',
    template: '%s | Michael Medhat',
  },
  description:
    'Michael Medhat is a regional creative strategy consultant advising brands and leadership teams on business challenges, communication platforms, brand experiences and creative execution.',
  robots: 'noindex,nofollow',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="navy">
      <head>
        {/* Prevent theme flash — runs synchronously before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=new URLSearchParams(location.search).get('theme')||localStorage.getItem('mm-theme')||'navy';if(['navy','forest'].includes(t))document.documentElement.dataset.theme=t;}catch(e){}`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LightboxProvider>
            <a className="skip" href="#main">
              Skip to content
            </a>
            <SiteAlert />
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </LightboxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
