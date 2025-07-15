import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';

// Custom CodeBlock component with copy functionality
const CodeBlock = ({ children, language, style, customStyle }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className='relative group'>
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.5',
          ...customStyle,
        }}
      >
        {children}
      </SyntaxHighlighter>
      <Button variant='outline' size='sm' onClick={handleCopy} className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800'>
        {copied ? 'Copied!' : 'Copy'}
      </Button>
    </div>
  );
};

export default function QuickStart() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>Quick Start</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>Get WebShorts up and running in your React project in just a few steps.</p>
        </div>

        {/* Next.js App Router Note */}
        <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
          <div className='flex items-start space-x-3'>
            <div className='text-yellow-600 dark:text-yellow-400 text-lg'>⚠️</div>
            <div>
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Next.js App Router Users</h3>
              <p className='text-yellow-700 dark:text-yellow-300 text-sm'>
                Next.js requires additional configuration to work with WebShorts. See the{' '}
                <a href='#nextjs-app-router-usage' className='underline font-medium'>
                  Next.js App Router Usage
                </a>{' '}
                section for important integration details.
              </p>
            </div>
          </div>
        </div>

        {/* Step 1: Installation */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>1. Install WebShorts and Dependencies</h2>
          <p className='text-gray-600 dark:text-gray-300'>Install WebShorts and let it automatically install the required dependencies:</p>

          <CodeBlock language='bash' style={tomorrow}>
            {`npm i @chrisnski/webshorts
npx webshorts init`}
          </CodeBlock>

          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h4 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>
              What the <code className='bg-blue-100 dark:bg-blue-800 px-1 rounded'>npx webshorts init</code> command does:
            </h4>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • Creates a <code className='bg-blue-100 dark:bg-blue-800 px-1 rounded'>webshorts.config.js</code> file in your project root
              </li>
              <li>
                • Automatically installs <code className='bg-blue-100 dark:bg-blue-800 px-1 rounded'>@radix-ui/react-dialog</code> and <code className='bg-blue-100 dark:bg-blue-800 px-1 rounded'>sonner</code> as dependencies
              </li>
              <li>• Detects your package manager (npm, yarn, or pnpm) to use the appropriate install command</li>
            </ul>
          </div>

          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              <strong>Note:</strong> You must already have <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>react</code> and <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>react-dom</code> installed (required for all React
              projects).
            </p>
          </div>
        </div>

        {/* Step 2: Wrap your app */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>2. Wrap your app with WebShortsProvider</h2>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

function App() {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <YourApp />
      <WebShortsDialog />
    </WebShortsProvider>
  );
}`}
          </CodeBlock>

          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <h4 className='font-semibold text-green-800 dark:text-green-200 mb-2'>Quick Notes</h4>
            <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
              <li>• Default styles are included automatically, but can be overridden.</li>
              <li>• The config must be included!</li>
              <li>• The currentPage prop must be included for proper route-based shortcuts!</li>
            </ul>
          </div>
        </div>

        {/* Step 3: Page-specific shortcuts */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>3. Adding page-specific shortcuts (Optional)</h2>
          <p className='text-gray-600 dark:text-gray-300'>When you want to add a shortcut that is page specific, you can do it in the config, or add a shortcut listener to the page/component the shortcut applies to.</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { ShortcutListener } from '@chrisnski/webshorts';

function MyPage() {
  const handleSave = () => {
    console.log('Saving...');
  };

  return (
    <div>
      <h1>My Page</h1>

      {/* Register shortcuts for this page */}
      <ShortcutListener keys='CTRL + S' action={handleSave} />
      <ShortcutListener keys='ALT + N' action={() => console.log('New item')} />

      {/* Your page content */}
    </div>
  );
}`}
          </CodeBlock>
        </div>

        {/* Next Steps */}
        <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6'>
          <h3 className='text-xl font-semibold mb-4'>Next Steps</h3>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>At this point the install can be used as is, and managed from the webshorts config if you are using global shortcuts only.</p>
          <p className='text-gray-600 dark:text-gray-300'>For page specific shortcuts, it's recommended to continue to step 3 and use Shortcut Listeners.</p>
        </div>
      </div>
    </div>
  );
}
