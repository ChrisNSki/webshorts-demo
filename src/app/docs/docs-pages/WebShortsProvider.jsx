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

export default function WebShortsProvider() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>WebShortsProvider</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>The main provider component that wraps your app and provides the WebShorts context to all child components.</p>
        </div>

        {/* Basic Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Basic Usage</h2>
          <p className='text-gray-600 dark:text-gray-300'>Wrap your entire application with the WebShortsProvider component:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { WebShortsProvider } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

function App() {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <YourApp />
    </WebShortsProvider>
  );
}`}
          </CodeBlock>
        </div>

        {/* Props Reference */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Props Reference</h2>
          <p className='text-gray-600 dark:text-gray-300'>The WebShortsProvider accepts several props to customize its behavior:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import shortcutsConfig from './webshorts.config.js';

<WebShortsProvider 
  config={shortcutsConfig}
  currentPage={pathname} 
  className='my-custom-class' 
  style={{ padding: '1rem' }} 
/>`}
          </CodeBlock>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Required Props</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>config</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Shortcut configuration object</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Optional Props</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>currentPage</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Current page/route (default: '/')</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>className</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>CSS class name for styling</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>style</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Inline styles object</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Configuration Examples</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Basic Setup</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Basic setup with config
import shortcutsConfig from './webshorts.config.js';

<WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
  <YourApp />
</WebShortsProvider>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>With Custom Config</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Explicit config import
import shortcutsConfig from './webshorts.config.js';

<WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
  <YourApp />
</WebShortsProvider>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>With Current Page</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Specify current page for route-based shortcuts
import shortcutsConfig from './webshorts.config.js';

<WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
  <YourApp />
</WebShortsProvider>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>With Styling</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Add custom styling
import shortcutsConfig from './webshorts.config.js';

<WebShortsProvider 
  config={shortcutsConfig}
  currentPage={pathname}
  className='my-custom-provider'
  style={{ padding: '1rem' }}
>
  <YourApp />
</WebShortsProvider>`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Framework Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Framework-Specific Examples</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>Next.js App Router</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// components/WebShortsProviderWrapper.jsx
'use client';
import { WebShortsProvider } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

export default function WebShortsProviderWrapper({ children }) {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      {children}
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h3 className='font-semibold mb-2'>React Router</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`import { useLocation } from 'react-router-dom';
import shortcutsConfig from './webshorts.config.js';

function App() {
  const location = useLocation();
  
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={location.pathname}>
      <Router>{/* Your routes */}</Router>
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Context Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Context Usage</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            The WebShortsProvider creates a React context that provides shortcut functionality to all child components. Use the <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>useShortcuts</code> hook to access this context.
          </p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { useShortcuts } from '@chrisnski/webshorts';

function MyComponent() {
  const { shortcuts, registerShortcut } = useShortcuts();
  
  // Use the context values
  return <div>My Component</div>;
}`}
          </CodeBlock>

          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Important Notes</h3>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • <strong>Must wrap your entire app</strong> - All components that need shortcuts must be children of WebShortsProvider
              </li>
              <li>
                • <strong>Config required</strong> - You must provide a config prop with your shortcut configuration
              </li>
              <li>
                • <strong>CurrentPage required</strong> - You must provide currentPage prop for proper route-based shortcuts
              </li>
              <li>
                • <strong>Context provider</strong> - Creates React context for shortcut functionality
              </li>
            </ul>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Troubleshooting</h2>

          <div className='space-y-4'>
            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Shortcuts not working?</h3>
              <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
                <li>• Ensure WebShortsProvider wraps your entire application</li>
                <li>• Check that the config file exists and is properly formatted</li>
                <li>• Verify that the currentPage prop matches your route structure</li>
                <li>• Enable debug mode to see registration feedback</li>
              </ul>
            </div>

            <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
              <h3 className='font-semibold text-red-800 dark:text-red-200 mb-2'>"useShortcuts must be used within WebShortsProvider"</h3>
              <ul className='text-red-700 dark:text-red-300 text-sm space-y-1'>
                <li>• Make sure WebShortsProvider is imported and used</li>
                <li>• Check that the component using useShortcuts is a child of WebShortsProvider</li>
                <li>• Verify the import path is correct</li>
                <li>• Ensure you're not using useShortcuts in a server component (Next.js)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
