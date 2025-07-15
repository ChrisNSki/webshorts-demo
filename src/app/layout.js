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
  title: 'WebShorts Demo - Multi-Page Site',
  description: 'A Next.js multi-page application demonstrating modern web development practices',
  icons: {
    icon: '/WebShorts.svg',
  },
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
