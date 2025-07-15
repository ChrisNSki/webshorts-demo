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

export default function Features() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>Features</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>WebShorts provides a comprehensive set of features to enhance your React applications with powerful keyboard shortcuts.</p>
        </div>

        {/* Universal Help Dialog */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>🔥</div>
            <h2 className='text-2xl font-semibold'>Universal Help Dialog</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>
            Press <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>Shift + ?</code> from anywhere to see all available shortcuts for the current page.
          </p>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h4 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Key Benefits:</h4>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • <strong>Always accessible</strong> - Works from any page in your app
              </li>
              <li>
                • <strong>Context-aware</strong> - Shows only shortcuts relevant to the current page
              </li>
              <li>
                • <strong>User-friendly</strong> - Clear descriptions and key combinations
              </li>
              <li>
                • <strong>Customizable</strong> - Adjust columns, size, and styling
              </li>
            </ul>
          </div>
        </div>

        {/* Page-Specific Shortcuts */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>🎯</div>
            <h2 className='text-2xl font-semibold'>Page-Specific Shortcuts</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>Register shortcuts that only work on specific pages or components, keeping your keyboard shortcuts organized and contextual.</p>
          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <h4 className='font-semibold text-green-800 dark:text-green-200 mb-2'>Use Cases:</h4>
            <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
              <li>
                • <strong>Editor shortcuts</strong> - Bold, italic, save only in text editors
              </li>
              <li>
                • <strong>Dashboard actions</strong> - Refresh, export only on dashboard pages
              </li>
              <li>
                • <strong>Form shortcuts</strong> - Submit, clear only in forms
              </li>
              <li>
                • <strong>Navigation</strong> - Page-specific navigation shortcuts
              </li>
            </ul>
          </div>
        </div>

        {/* Debug Mode */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>🐛</div>
            <h2 className='text-2xl font-semibold'>Debug Mode</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>Get toast notifications showing when shortcuts are registered, executed, fail, or when no shortcut is found.</p>
          <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
            <h4 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Debug Features:</h4>
            <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
              <li>
                • <strong>Registration feedback</strong> - See when shortcuts are successfully registered
              </li>
              <li>
                • <strong>Execution tracking</strong> - Know when shortcuts are triggered
              </li>
              <li>
                • <strong>Error reporting</strong> - Identify when shortcuts fail to execute
              </li>
              <li>
                • <strong>Missing shortcut alerts</strong> - Discover when no shortcut matches a key combination
              </li>
            </ul>
          </div>
        </div>

        {/* Framework Agnostic */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>📱</div>
            <h2 className='text-2xl font-semibold'>Framework Agnostic</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>Works seamlessly with Next.js, Create React App, Vite, Remix, and any React framework.</p>
        </div>

        {/* Key Combinations */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>⌨️</div>
            <h2 className='text-2xl font-semibold'>Supported Key Combinations</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts has the ability to support a wide range of key combinations for maximum flexibility.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <h4 className='font-semibold'>Example Combinations</h4>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + S</code> - Save
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + Z</code> - Undo
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + Y</code> - Redo
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>ALT + 1</code> - Navigate
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <h4 className='font-semibold'>Advanced Combinations</h4>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + SHIFT + A</code> - Multi-modifier
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>META + S</code> - Platform-aware (Cmd/Ctrl)
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>SHIFT + ?</code> - Universal help
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + ALT + DEL</code> - Complex combinations
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance & Reliability */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>⚡</div>
            <h2 className='text-2xl font-semibold'>Performance & Reliability</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Lightweight</h4>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Minimal bundle size with zero unnecessary dependencies.</p>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Event Management</h4>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Proper event listener cleanup and component lifecycle integration.</p>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
              <h4 className='font-semibold mb-2'>Simple API</h4>
              <p className='text-sm text-gray-600 dark:text-gray-300'>Clean, intuitive API design that's easy to use and understand.</p>
            </div>
          </div>
        </div>

        {/* Customization */}
        <div className='space-y-4'>
          <div className='flex items-center space-x-3'>
            <div className='text-2xl'>🎨</div>
            <h2 className='text-2xl font-semibold'>Extensive Customization</h2>
          </div>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts is designed to adapt to your application's design system and requirements.</p>

          <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
            <h4 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>Customization Options:</h4>
            <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
              <li>
                • <strong>Dialog styling</strong> - Customize colors, fonts, layout, and animations
              </li>
              <li>
                • <strong>Toast notifications</strong> - Integrate with your preferred toast library
              </li>
              <li>
                • <strong>Key display</strong> - Customize how keyboard combinations are shown
              </li>
              <li>
                • <strong>Theme support</strong> - Automatic dark/light mode adaptation
              </li>
              <li>
                • <strong>Responsive design</strong> - Works perfectly on all screen sizes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
