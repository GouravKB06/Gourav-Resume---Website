import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gourav Kesarla B — Information Science Engineer',
  description:
    'Portfolio of Gourav Kesarla B — Information Science & Engineering student at JSS Academy of Technology, Bengaluru. Backend developer, cloud enthusiast, Spring Boot specialist.',
  keywords: [
    'Gourav Kesarla B',
    'Information Science Engineering',
    'JSS Academy',
    'Spring Boot',
    'Java developer',
    'Cloud computing',
    'AWS',
    'Portfolio',
  ],
  authors: [{ name: 'Gourav Kesarla B' }],
  creator: 'Gourav Kesarla B',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gouravkb.vercel.app',
    title: 'Gourav Kesarla B — Information Science Engineer',
    description:
      'Backend developer & cloud enthusiast. Building production-quality applications with Java, Spring Boot, and MySQL.',
    siteName: 'Gourav Kesarla B Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gourav Kesarla B — Portfolio',
    description: 'Information Science Engineer | Backend & Cloud',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-text-primary font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
