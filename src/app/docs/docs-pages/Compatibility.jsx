import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/ui/button';
import DocsLink from '@/components/DocsLink';

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

export default function Compatibility() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>Compatibility</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>WebShorts is designed to work with any React framework. Learn about specific setup requirements for different frameworks.</p>
        </div>

        {/* Next.js App Router - Special Instructions */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>⚠️</div>
            <h2 className='text-2xl font-semibold'>Next.js App Router</h2>
          </div>

          <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
            <h3 className='font-semibold text-red-800 dark:text-red-200 mb-2'>⚠️ CRITICAL: Client Wrappers Required</h3>
            <p className='text-red-700 dark:text-red-300 text-sm mb-4'>
              If you are using <strong>Next.js App Router</strong> (the <code className='bg-red-100 dark:bg-red-800 px-1 rounded'>/app</code> directory), you <strong>MUST</strong> use client wrappers for both the WebShortsProvider and
              ShortcutListener components. This is not optional - you <strong>WILL</strong> encounter SSR/hydration issues without them.
            </p>
          </div>

          <h3 className='text-xl font-semibold'>Setup Instructions</h3>

          <div className='space-y-4'>
            <div>
              <h4 className='font-semibold mb-2'>1. Create the Client Provider Wrapper</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// components/ClientWebShortsProvider.jsx
'use client';
import { useEffect, useState } from 'react';
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

export default function ClientWebShortsProvider({ children, config, className }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return children without the provider during SSR
    return children;
  }

  return (
    <WebShortsProvider config={config} currentPage={pathname} className={className}>
      {children}
      <WebShortsDialog />
      <Toaster position='bottom-right' richColors />
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className='font-semibold mb-2'>2. Create the App Wrapper</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// components/WebShortsProviderWrapper.jsx
'use client';
import ClientWebShortsProvider from './ClientWebShortsProvider';
import webshortsConfig from '../webshorts.config';

export default function WebShortsProviderWrapper({ children, className }) {
  return (
    <ClientWebShortsProvider config={webshortsConfig} className={className}>
      {children}
    </ClientWebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className='font-semibold mb-2'>3. Use in Root Layout</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// app/layout.js (Server Component)
export const metadata = { 
  title: 'My App',
  description: 'My app description'
};

import WebShortsProviderWrapper from '../components/WebShortsProviderWrapper';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WebShortsProviderWrapper>
          {children}
        </WebShortsProviderWrapper>
      </body>
    </html>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className='font-semibold mb-2'>4. Create Client Wrapper for ShortcutListener (REQUIRED)</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// components/ClientShortcutListener.jsx
'use client';
import { useEffect, useState } from 'react';
import { ShortcutListener } from '@chrisnski/webshorts';

export default function ClientShortcutListener({ children, keys, action, shortName, description }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return the children without the ShortcutListener wrapper during SSR
    return children;
  }

  return (
    <ShortcutListener 
      keys={keys} 
      action={action} 
      shortName={shortName} 
      description={description}
    >
      {children}
    </ShortcutListener>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className='font-semibold mb-2'>5. Usage Example</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Instead of using ShortcutListener directly:
<ShortcutListener keys="CTRL + S" action={handleSave} shortName="Save" description="Save content">
  <div>Press CTRL + S to save</div>
</ShortcutListener>

// Use the client wrapper:
import ClientShortcutListener from '@/components/ClientShortcutListener';

<ClientShortcutListener keys="CTRL + S" action={handleSave} shortName="Save" description="Save content">
  <div>Press CTRL + S to save</div>
</ClientShortcutListener>`}
              </CodeBlock>
            </div>
          </div>

          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h4 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Why Both Wrappers Are Required</h4>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • <strong>Server Components</strong> - Next.js App Router uses server components by default
              </li>
              <li>
                • <strong>Context Providers</strong> - WebShortsProvider is a client-side context provider
              </li>
              <li>
                • <strong>Shortcut Listeners</strong> - ShortcutListener components need client-side mounting
              </li>
              <li>
                • <strong>SSR/Hydration Race</strong> - Both components will fail in production without wrappers
              </li>
              <li>
                • <strong>Guaranteed Issues</strong> - This is not optional - you WILL encounter problems without these wrappers
              </li>
            </ul>
          </div>

          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              <strong>Note:</strong> This pattern is required for all context/hook-based libraries in Next.js App Router. See the{' '}
              <a href='https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-in-server-components' className='underline text-blue-600 dark:text-blue-400' target='_blank' rel='noopener noreferrer'>
                Next.js docs
              </a>{' '}
              for more details.
            </p>
          </div>
        </div>

        {/* Other React Frameworks */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Other React Frameworks</h2>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts works seamlessly with other React frameworks without special configuration.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Create React App</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// App.jsx
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

function App() {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
      <WebShortsDialog />
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Vite</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// main.jsx
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

function App() {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
      <WebShortsDialog />
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Remix</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// app/root.jsx
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
          <Outlet />
          <WebShortsDialog />
        </WebShortsProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}`}
              </CodeBlock>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Next.js Pages Router</h4>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// pages/_app.js
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

export default function App({ Component, pageProps }) {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <Component {...pageProps} />
      <WebShortsDialog />
    </WebShortsProvider>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Browser Compatibility */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Browser Compatibility</h2>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts is compatible with all modern browsers that support React.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <h4 className='font-semibold'>Supported Browsers</h4>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>• Chrome 90+</li>
                <li>• Firefox 88+</li>
                <li>• Safari 14+</li>
                <li>• Edge 90+</li>
              </ul>
            </div>

            <div className='space-y-2'>
              <h4 className='font-semibold'>Required Features</h4>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>• ES6+ support</li>
                <li>• React 16.8+ (hooks support)</li>
                <li>• Modern DOM APIs</li>
                <li>• Keyboard event handling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* React Version Requirements */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>React Version Requirements</h2>

          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <h4 className='font-semibold text-green-800 dark:text-green-200 mb-2'>Minimum Requirements</h4>
            <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
              <li>
                • <strong>React 16.8+</strong> - Required for hooks support
              </li>
              <li>
                • <strong>React DOM 16.8+</strong> - Required for DOM manipulation
              </li>
              <li>
                • <strong>Modern JavaScript</strong> - ES6+ features required
              </li>
            </ul>
          </div>

          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h4 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Recommended Versions</h4>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • <strong>React 18+</strong> - Latest features and performance improvements
              </li>
              <li>
                • <strong>React DOM 18+</strong> - Concurrent features support
              </li>
              <li>
                • <strong>Node.js 16+</strong> - For development and build tools
              </li>
            </ul>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Common Issues & Solutions</h2>

          <div className='space-y-4'>
            <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
              <h4 className='font-semibold text-red-800 dark:text-red-200 mb-2'>"Module not found" errors</h4>
              <p className='text-red-700 dark:text-red-300 text-sm mb-2'>Make sure you've installed all peer dependencies:</p>
              <CodeBlock language='bash' style={tomorrow}>
                {`npm install @radix-ui/react-dialog sonner react react-dom`}
              </CodeBlock>
            </div>

            <div className='bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4'>
              <h4 className='font-semibold text-orange-800 dark:text-orange-200 mb-2'>Toasts not showing</h4>
              <p className='text-orange-700 dark:text-orange-300 text-sm mb-2'>Ensure Sonner is properly configured in your app:</p>
              <CodeBlock language='jsx' style={tomorrow}>
                {`import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <YourApp />
      <Toaster />
    </>
  );
}`}
              </CodeBlock>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h4 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>Shortcuts not working</h4>
              <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
                <li>• Check that the WebShortsProvider wraps your entire app</li>
                <li>• Verify key combinations are valid (e.g., "CTRL + S" not "Ctrl + S")</li>
                <li>• Enable debug mode to see registration and execution feedback</li>
                <li>• Ensure no other libraries are intercepting keyboard events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
