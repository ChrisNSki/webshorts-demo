'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import LeftDocsNav from '../leftDocsNav';
import WebShortsDialog from '../docs-pages/WebshortsDialog';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import Script from 'next/script';

export default function WebShortsDialogPage() {
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
    window.location.href = '/docs/shortcut-listener';
  };

  const handleNextClick = () => {
    window.location.href = '/docs/custom-styling';
  };

  return (
    <>
      <Script
        id='webshorts-dialog-structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: 'WebShorts Dialog - Customizing the Help Dialog',
            description: 'Learn how to customize the WebShorts help dialog with custom text, styling, triggers, and advanced configuration options',
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
              '@id': 'https://webshorts.dev/docs/webshorts-dialog',
            },
            about: [
              {
                '@type': 'Thing',
                name: 'Help Dialog',
              },
              {
                '@type': 'Thing',
                name: 'Dialog Customization',
              },
              {
                '@type': 'Thing',
                name: 'Keyboard Shortcuts',
              },
              {
                '@type': 'Thing',
                name: 'User Interface',
              },
            ],
          }),
        }}
      />
      <div className='flex min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='mx-auto flex flex-col justify-center items-center min-h-full w-full'>
          <div className='flex flex-row justify-start items-start gap-4 w-[1100px] max-h-full'>
            <LeftDocsNav activeSection='webshorts-dialog' handleSectionClick={handleSectionClick} />
            <div className='flex flex-col w-full max-h-full'>
              <div className='flex flex-col w-full max-h-full overflow-y-auto'>
                <WebShortsDialog />
              </div>
              <div className='flex justify-between pt-6 mt-8 w-full'>
                <ClientShortcutListener keys='ALT + P' shortName='Previous Page' description='Previous Page' action={handlePreviousClick}>
                  <Button variant='outline' className='text-sm' onClick={handlePreviousClick}>
                    ← Previous: Shortcut Listener
                  </Button>
                </ClientShortcutListener>
                <ClientShortcutListener keys='ALT + N' shortName='Next Page' description='Next Page' action={handleNextClick}>
                  <Button variant='outline' className='text-sm' onClick={handleNextClick}>
                    Next: Custom Styling →
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
