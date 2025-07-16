'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import LeftDocsNav from '../leftDocsNav';
import ShortcutListeners from '../docs-pages/ShortcutListeners';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import Script from 'next/script';

export default function ShortcutListenerPage() {
  const handleSectionClick = (section) => {
    const pageMap = {
      'quick-start': '/docs/quick-start',
      features: '/docs/features',
      compatibility: '/docs/compatibility',
      license: '/docs/license',
      'configuring-webshorts': '/docs/configuring-webshorts',
      'webshorts-provider': '/docs/webshorts-provider',
      'shortcut-listener': '/docs/shortcut-listener',
      'webshorts-dialog': '/docs/webshorts-dialog',
      'custom-styling': '/docs/custom-styling',
      'use-shortcuts-hooks': '/docs/use-shortcuts-hooks',
    };

    const targetPath = pageMap[section];
    if (targetPath && targetPath !== window.location.pathname) {
      window.location.href = targetPath;
    }
  };

  const handlePreviousClick = () => {
    window.location.href = '/docs/webshorts-provider';
  };

  const handleNextClick = () => {
    window.location.href = '/docs/webshorts-dialog';
  };

  return (
    <>
      <Script
        id='shortcut-listener-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'ShortcutListener - Adding Page-Specific Shortcuts',
            description: 'Learn how to use ShortcutListener to add page-specific keyboard shortcuts to your React components with examples and best practices',
            author: {
              '@type': 'Person',
              name: 'ChrisNSki',
            },
            publisher: {
              '@type': 'Organization',
              name: 'WebShorts',
            },
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://webshorts.dev/docs/shortcut-listener',
            },
            about: [
              {
                '@type': 'Thing',
                name: 'ShortcutListener',
              },
              {
                '@type': 'Thing',
                name: 'Page-Specific Shortcuts',
              },
              {
                '@type': 'Thing',
                name: 'React Components',
              },
              {
                '@type': 'Thing',
                name: 'Keyboard Events',
              },
            ],
          }),
        }}
      />
      <div className='flex min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='mx-auto flex flex-col justify-center items-center min-h-full w-full'>
          <div className='flex flex-row justify-start items-start gap-4 w-[1100px] max-h-full'>
            <LeftDocsNav activeSection='shortcut-listener' handleSectionClick={handleSectionClick} />
            <div className='flex flex-col w-full max-h-full'>
              <div className='flex flex-col w-full max-h-full overflow-y-auto'>
                <ShortcutListeners />
              </div>
              <div className='flex justify-between pt-6 mt-8 w-full'>
                <ClientShortcutListener keys='ALT + P' shortName='Previous Page' description='Previous Page' action={handlePreviousClick}>
                  <Button variant='outline' className='text-sm' onClick={handlePreviousClick}>
                    ← Previous: WebShorts Provider
                  </Button>
                </ClientShortcutListener>
                <ClientShortcutListener keys='ALT + N' shortName='Next Page' description='Next Page' action={handleNextClick}>
                  <Button variant='outline' className='text-sm' onClick={handleNextClick}>
                    Next: WebShorts Dialog →
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
