import { Inter, Nunito_Sans } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WebShortsProviderWrapper from './components/WebShortsProviderWrapper';

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'WebShorts - Modern Keyboard Shortcuts for React',
    template: '%s | WebShorts',
  },
  description: 'A modern, lightweight, and easy-to-use library for adding keyboard shortcuts to your React website. Simple installation, powerful features, and excellent developer experience.',
  keywords: [
    'keyboard shortcuts',
    'react shortcuts',
    'web shortcuts',
    'keyboard navigation',
    'react library',
    'web development',
    'user experience',
    'accessibility',
    'keyboard accessibility',
    'react hooks',
    'next.js shortcuts',
    'javascript shortcuts',
  ],
  authors: [{ name: 'ChrisNSki' }],
  creator: 'ChrisNSki',
  publisher: 'WebShorts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webshorts.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webshorts.dev',
    title: 'WebShorts - Modern Keyboard Shortcuts for React',
    description: 'A modern, lightweight, and easy-to-use library for adding keyboard shortcuts to your React website. Simple installation, powerful features, and excellent developer experience.',
    siteName: 'WebShorts',
    images: [
      {
        url: '/WebShorts.svg',
        width: 1200,
        height: 630,
        alt: 'WebShorts - Modern Keyboard Shortcuts for React',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebShorts - Modern Keyboard Shortcuts for React',
    description: 'A modern, lightweight, and easy-to-use library for adding keyboard shortcuts to your React website.',
    images: ['/WebShorts.svg'],
    creator: '@ChrisNSki',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  icons: {
    icon: '/WebShorts.svg',
    shortcut: '/WebShorts.svg',
    apple: '/WebShorts.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.variable} flex flex-col w-full max-h-screen justify-center items-center min-h-screen antialiased`}>
        <WebShortsProviderWrapper className='flex flex-col w-full min-h-screen justify-center items-center'>
          <div className='flex flex-1 flex-col max-w-[1120px] w-full overflow-y-auto'>
            <Navigation />
            <main className='flex flex-1 w-full flex-col min-h-full overflow-y-auto'>{children}</main>
          </div>
          <Footer />
        </WebShortsProviderWrapper>
      </body>
    </html>
  );
}
