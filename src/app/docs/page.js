'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LeftDocsNav from './leftDocsNav';
import { QuickStart, Features, Compatibility, License, ConfiguringWebShorts, WebShortsProvider, ShortcutListeners, WebShortsDialog, CustomStyling, UseShortcutsHooks } from './docs-pages';
import { ShortcutListener } from '@chrisnski/webshorts';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('quick-start');

  // Define the page order
  const pageOrder = ['quick-start', 'features', 'compatibility', 'license', 'configuring-webshorts', 'webshorts-provider', 'shortcut-listener', 'webshorts-dialog', 'custom-styling', 'use-shortcuts-hooks'];

  // Define page titles for navigation
  const pageTitles = {
    'quick-start': 'Quick Start',
    features: 'Features',
    compatibility: 'Compatibility',
    license: 'License',
    'configuring-webshorts': 'Configuring WebShorts',
    'webshorts-provider': 'WebShorts Provider',
    'shortcut-listeners': 'Shortcut Listeners',
    'webshorts-dialog': 'WebShorts Dialog',
    'custom-styling': 'Custom Styling',
    'use-shortcuts-hooks': 'useShortcuts Hooks',
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const getCurrentPageIndex = () => {
    return pageOrder.indexOf(activeSection);
  };

  const getPreviousPage = () => {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex > 0) {
      return pageOrder[currentIndex - 1];
    }
    return null;
  };

  const getNextPage = () => {
    const currentIndex = getCurrentPageIndex();
    if (currentIndex < pageOrder.length - 1) {
      return pageOrder[currentIndex + 1];
    }
    return null;
  };

  const handlePreviousClick = () => {
    const previousPage = getPreviousPage();
    if (previousPage) {
      setActiveSection(previousPage);
    }
  };

  const handleNextClick = () => {
    const nextPage = getNextPage();
    if (nextPage) {
      setActiveSection(nextPage);
    }
  };

  const renderPage = () => {
    switch (activeSection) {
      case 'quick-start':
        return <QuickStart />;
      case 'features':
        return <Features />;
      case 'compatibility':
        return <Compatibility />;
      case 'license':
        return <License />;
      case 'configuring-webshorts':
        return <ConfiguringWebShorts />;
      case 'webshorts-provider':
        return <WebShortsProvider />;
      case 'shortcut-listener':
        return <ShortcutListeners />;
      case 'webshorts-dialog':
        return <WebShortsDialog />;
      case 'custom-styling':
        return <CustomStyling />;
      case 'use-shortcuts-hooks':
        return <UseShortcutsHooks />;
      default:
        return <QuickStart />;
    }
  };

  const previousPage = getPreviousPage();
  const nextPage = getNextPage();

  return (
    <div className='flex min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <div className='mx-auto flex flex-col justify-center items-center min-h-full w-full'>
        <div className='flex flex-row justify-start items-start gap-4 w-[1100px] max-h-full'>
          <LeftDocsNav activeSection={activeSection} handleSectionClick={handleSectionClick} />
          <div className='flex flex-col w-full max-h-full'>
            <div className='flex flex-col w-full max-h-full overflow-y-auto'>{renderPage()}</div>
            {/* Navigation Buttons */}
            <div className='flex justify-between pt-6 mt-8 w-full'>
              <ShortcutListener keys='ALT + P' shortName='Previous Page' description='Previous Page' action={handlePreviousClick}>
                <Button variant='outline' className='text-sm' onClick={handlePreviousClick} disabled={!previousPage}>
                  {previousPage ? `← Previous: ${pageTitles[previousPage]}` : ''}
                </Button>
              </ShortcutListener>
              <ShortcutListener keys='ALT + N' shortName='Next Page' description='Next Page' action={handleNextClick}>
                <Button variant='outline' className='text-sm' onClick={handleNextClick} disabled={!nextPage}>
                  {nextPage ? `Next: ${pageTitles[nextPage]} →` : ''}
                </Button>
              </ShortcutListener>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
