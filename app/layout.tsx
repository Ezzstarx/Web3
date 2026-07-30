import type { Metadata } from 'next';
import { Tektur, Inter, Creepster } from 'next/font/google';
import './globals.css';
import { WalletProvider } from '@/components/providers/WalletProvider';

const tektur = Tektur({
  subsets: ['latin'],
  variable: '--font-tektur',
  display: 'swap',
});

// Using Inter as a high-quality substitute for Satoshi which is a paid/external font
const satoshi = Inter({
  subsets: ['latin'],
  variable: '--font-satoshi',
  display: 'swap',
});

// TEMPORARY stand-in for the hero character name. The design calls for
// "Scarlet Reliquary", which we don't have a file for yet; Creepster (OFL,
// free for commercial use) is the closest free horror display face.
// Drop the real font into public/fonts/ScarletReliquary.* and it wins
// automatically — it sits ahead of this in the --font-scarlet stack.
const horror = Creepster({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-horror',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ezzstar - Powering the Future of Digital Value',
  description: 'The official presale platform for Seika (SKA) token.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Font variables live on <html> so :root-level tokens like --font-scarlet can
  // reference them (a var declared on :root can't see a var set on <body>).
  return (
    <html lang="en" className={`${tektur.variable} ${satoshi.variable} ${horror.variable}`}>
      <body className="font-tektur text-white antialiased overflow-x-hidden relative bg-black">
        <WalletProvider>
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
