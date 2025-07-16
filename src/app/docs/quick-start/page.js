'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import LeftDocsNav from '../leftDocsNav';
import QuickStart from '../docs-pages/QuickStart';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import { navigateToDocsPage, getNextPage, pageTitles } from '@/lib/docsNavigation';
import Script from 'next/script';

export default function QuickStartPage() {
  const handleSectionClick = (section) => {
    navigateToDocsPage(section);
  };

  const handlePreviousClick = () => {
    // No previous page for quick-start
  };

  const handleNextClick = () => {
    const nextPage = getNextPage('quick-start');
    if (nextPage) {
      navigateToDocsPage(nextPage);
    }
  };

  return (
    <>
      <Script
        id='quick-start-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Install and Set Up WebShorts',
            description: 'Step-by-step guide to install and configure WebShorts for React applications',
            step: [
              {
                '@type': 'HowToStep',
                name: 'Install WebShorts',
                text: 'Run npm install @chrisnski/webshorts to install the package',
              },
              {
                '@type': 'HowToStep',
                name: 'Initialize Configuration',
                text: 'Run npx webshorts init to create the configuration file',
              },
              {
                '@type': 'HowToStep',
                name: 'Wrap Your App',
                text: 'Wrap your React app with WebShortsProvider component',
              },
            ],
            totalTime: 'PT5M',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: 0,
            },
          }),
        }}
      />
      <div className='flex min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='mx-auto flex flex-col justify-center items-center min-h-full w-full'>
          <div className='flex flex-row justify-start items-start gap-4 w-[1100px] max-h-full'>
            <LeftDocsNav activeSection='quick-start' handleSectionClick={handleSectionClick} />
            <div className='flex flex-col w-full max-h-full'>
              <div className='flex flex-col w-full max-h-full overflow-y-auto'>
                <QuickStart />
              </div>
              {/* Navigation Buttons */}
              <div className='flex justify-between pt-6 mt-8 w-full'>
                <ClientShortcutListener keys='ALT + P' shortName='Previous Page' description='Previous Page' action={handlePreviousClick}>
                  <Button variant='outline' className='text-sm' onClick={handlePreviousClick} disabled={true}>
                    {/* No previous page */}
                  </Button>
                </ClientShortcutListener>
                <ClientShortcutListener keys='ALT + N' shortName='Next Page' description='Next Page' action={handleNextClick}>
                  <Button variant='outline' className='text-sm' onClick={handleNextClick}>
                    Next: Features →
                  </Button>
                </ClientShortcutListener>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
