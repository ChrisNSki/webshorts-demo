'use client';
import * as Dialog from '@radix-ui/react-dialog';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        id='structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'WebShorts',
            description: 'A modern, lightweight, and easy-to-use library for adding keyboard shortcuts to your React website',
            url: 'https://webshorts.dev',
            applicationCategory: 'DeveloperApplication',
            browserRequirements: 'Requires JavaScript. Requires HTML5.',
            author: {
              '@type': 'Person',
              name: 'ChrisNSki',
            },
            publisher: {
              '@type': 'Organization',
              name: 'WebShorts',
            },
            offers: {
              '@type': 'Offer',
              price: 0,
              priceCurrency: 'USD',
            },
            downloadUrl: 'https://www.npmjs.com/package/@chrisnski/webshorts',
            installUrl: 'https://www.npmjs.com/package/@chrisnski/webshorts',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 5,
              ratingCount: 1,
            },
            featureList: ['Keyboard shortcuts for React', 'Easy installation and setup', 'Next.js compatibility', 'Customizable dialog', 'TypeScript support', 'Accessibility features'],
          }),
        }}
      />
      <div className='p-8 pb-20 gap-16 sm:p-20'>
        <main className='w-[1000px] mx-auto flex flex-col justify-center items-center'>
          <div id='hero-section'>
            <h1 className='flex w-full text-center justify-center'>WebShorts</h1>
            <p className='text-lg'>A modern, lightweight, and easy-to-use library for adding keyboard shortcuts to your website.</p>
          </div>
          <span className='text-lg font-bold pt-10'>Quick Install</span>
          <div className='flex flex-col gap-4 items-center pt-5'>
            <div className='flex flex-row gap-4 items-center'>
              <span>1.</span>
              <div className='text-lg font-mono bg-gray-300 px-4 py-2 rounded-md'>npm install @chrisnski/webshorts</div>
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <span>2.</span>
              <div className='text-lg font-mono bg-gray-300 px-4 py-2 rounded-md'>npx webshorts init</div>
            </div>
          </div>

          {/* Try it Out Card */}
          <div className='mt-8 w-full max-w-md pt-10'>
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6'>
              <div className='flex flex-col gap-4 items-center'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Try it Out</h3>
                <div className='flex flex-row gap-4 items-center'>
                  <div className='text-lg font-mono bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600'>Shift + ?</div>
                </div>
                <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>Press the shortcut to see WebShorts in action!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
