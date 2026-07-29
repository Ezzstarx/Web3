import type { Metadata } from 'next';
import { Tektur, Inter } from 'next/font/google';
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
  return (
    <html lang="en">
      <body className={`${tektur.variable} ${satoshi.variable} font-tektur text-white antialiased overflow-x-hidden relative bg-black`}>
        <WalletProvider>
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
