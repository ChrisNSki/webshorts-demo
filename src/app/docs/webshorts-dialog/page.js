'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import LeftDocsNav from '../leftDocsNav';
import WebshortsDialog from '../docs-pages/WebShortsDialog';
import ClientShortcutListener from '@/components/ClientShortcutListener';

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
    <div className='flex min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='mx-auto flex flex-col justify-center items-center min-h-full w-full'>
        <div className='flex flex-row justify-start items-start gap-4 w-[1100px] max-h-full'>
          <LeftDocsNav activeSection='webshorts-dialog' handleSectionClick={handleSectionClick} />
          <div className='flex flex-col w-full max-h-full'>
            <div className='flex flex-col w-full max-h-full overflow-y-auto'>
              <WebshortsDialog />
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
  );
}
