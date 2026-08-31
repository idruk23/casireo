import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://casireo.com'),
  title: {
    default: 'Casireo — Independent Online Casino Discovery',
    template: '%s | Casireo',
  },
  description:
    'Independent guides, comparison criteria, and responsible gambling information for online casino players worldwide.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Casireo — Independent Online Casino Discovery',
    description:
      'Clear casino comparisons. No invented offers. Built for informed choices.',
    url: 'https://casireo.com/',
    siteName: 'Casireo',
    images: [{ url: '/images/casireo-hero.png', width: 1672, height: 941 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casireo',
    description: 'Independent online casino discovery and comparison.',
    images: ['/images/casireo-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
