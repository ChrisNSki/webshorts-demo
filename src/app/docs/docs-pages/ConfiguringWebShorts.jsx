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

export default function ConfiguringWebShorts() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>Configuring WebShorts</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>Learn how to configure WebShorts using the configuration file and understand all available options.</p>
        </div>

        {/* Configuration File */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Configuration File</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            WebShorts uses a configuration file to define shortcuts. Create a <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>webshorts.config.js</code> file in your project root:
          </p>

          <CodeBlock language='js' style={tomorrow}>
            {`// webshorts.config.js
const shortcutsConfig = {
  WEBSHORTS_OPTIONS: {
    debug: false,
    showDescriptions: true,
    helpDialogColumns: 2,
    dialogWidth: 800,
    dialogHeight: 600,
  },
  '*': [
    // Global shortcuts here
  ],
  '/dashboard': [
    // Page-specific shortcuts here
  ],
};

export default shortcutsConfig;`}
          </CodeBlock>

          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <p className='text-green-700 dark:text-green-300 text-sm'>
              <strong>Note:</strong> You must import and pass this config file to the WebShortsProvider component, along with the currentPage prop for proper route-based shortcuts.
            </p>
          </div>
        </div>

        {/* WEBSHORTS_OPTIONS */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>WEBSHORTS_OPTIONS</h2>
          <p className='text-gray-600 dark:text-gray-300'>Configure the behavior and appearance of WebShorts with these options:</p>

          <CodeBlock language='js' style={tomorrow}>
            {`{
  debug: false,              // Enable debug toasts
  showDescriptions: true,    // Show descriptions in help dialog
  helpDialogColumns: 2,      // Number of columns in help dialog
  dialogWidth: 800,          // Help dialog width (px)
  dialogHeight: 600,         // Help dialog height (px)
}`}
          </CodeBlock>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Debug Options</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>debug</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Enable toast notifications for shortcut registration and execution</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Dialog Options</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>showDescriptions</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Show shortcut descriptions in the help dialog</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>helpDialogColumns</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Number of columns in the help dialog grid</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>dialogWidth/dialogHeight</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Dimensions of the help dialog in pixels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shortcut Configuration */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Shortcut Configuration</h2>
          <p className='text-gray-600 dark:text-gray-300'>Each shortcut is defined as an object with specific properties:</p>

          <CodeBlock language='js' style={tomorrow}>
            {`{
  keys: "CTRL + S",           // Key combination
  shortName: "Save",          // Display name in help dialog
  description: "Save the file", // Description (optional)
  action: () => saveFile(),   // Function to execute
  hiddenNotes: "Internal note" // Hidden notes (optional)
}`}
          </CodeBlock>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Required Properties</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>keys</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>The keyboard shortcut (e.g., "CTRL + S", "ALT + 1")</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>shortName</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Display name shown in the help dialog</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>action</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Function to execute when shortcut is pressed</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Optional Properties</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>description</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Detailed description shown in help dialog</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>hiddenNotes</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Internal notes not shown to users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Example */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Complete Configuration Example</h2>
          <p className='text-gray-600 dark:text-gray-300'>Here's a complete example showing global and page-specific shortcuts:</p>

          <CodeBlock language='js' style={tomorrow}>
            {`// webshorts.config.js
const shortcutsConfig = {
  WEBSHORTS_OPTIONS: {
    debug: true, // Show toast notifications, disabled by default
    showDescriptions: true, // Show descriptions in help dialog
    helpDialogColumns: 2, // Number of columns in help dialog
    dialogWidth: 800, // Help dialog width
    dialogHeight: 600, // Help dialog height
  },

  // Global shortcuts (work everywhere)
  '*': [
    {
      keys: 'SHIFT + ?',
      shortName: 'Show Shortcuts',
      description: 'Open the shortcuts help dialog',
      action: () => console.log('Help dialog opened'),
    },
    {
      keys: 'ALT + 1',
      shortName: 'Home Page',
      description: 'Navigate to the home page',
      action: () => (window.location.href = '/'),
    },
  ],

  // Page-specific shortcuts (These can alternatively be pulled from the Shortcut Listeners)
  '/dashboard': [
    {
      keys: 'CTRL + S',
      shortName: 'Save Dashboard',
      description: 'Save current dashboard state',
      action: () => saveDashboard(),
    },
  ],

  '/editor': [
    {
      keys: 'CTRL + B',
      shortName: 'Bold Text',
      description: 'Make selected text bold',
      action: () => formatText('bold'),
    },
  ],
};

export default shortcutsConfig;`}
          </CodeBlock>
        </div>

        {/* Key Combinations */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Supported Key Combinations</h2>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts supports a wide range of key combinations for maximum flexibility:</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>Basic Combinations</h3>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + S</code> - Save
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + Z</code> - Undo
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>ALT + 1</code> - Navigate
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>SHIFT + ?</code> - Help
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>Advanced Combinations</h3>
              <ul className='text-sm space-y-1 text-gray-600 dark:text-gray-300'>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + SHIFT + A</code> - Multi-modifier
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>META + S</code> - Platform-aware (Cmd/Ctrl)
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>CTRL + ALT + DEL</code> - Complex combinations
                </li>
                <li>
                  • <code className='bg-gray-200 dark:bg-gray-700 px-1 rounded'>F1</code> - Function keys
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Best Practices</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>✅ Do</h3>
              <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
                <li>• Use descriptive shortNames</li>
                <li>• Provide helpful descriptions</li>
                <li>• Group related shortcuts by page</li>
                <li>• Use consistent naming conventions</li>
                <li>• Test shortcuts in different contexts</li>
              </ul>
            </div>

            <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
              <h3 className='font-semibold text-red-800 dark:text-red-200 mb-2'>❌ Don't</h3>
              <ul className='text-red-700 dark:text-red-300 text-sm space-y-1'>
                <li>• Override browser shortcuts (Ctrl+C, Ctrl+V)</li>
                <li>• Use conflicting key combinations</li>
                <li>• Create shortcuts without descriptions</li>
                <li>• Use shortcuts that interfere with typing</li>
                <li>• Forget to test in different browsers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Configuration Troubleshooting</h2>

          <div className='space-y-4'>
            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Shortcuts not working?</h3>
              <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
                <li>• Enable debug mode to see registration feedback</li>
                <li>• Check that key combinations are valid (e.g., "CTRL + S" not "Ctrl + S")</li>
                <li>• Verify the config file is in the project root</li>
                <li>• Ensure the config is properly imported in your provider</li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>Help dialog not showing?</h3>
              <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
                <li>• Check that WebShortsDialog is included in your app</li>
                <li>• Verify the SHIFT + ? shortcut is registered</li>
                <li>• Ensure no other libraries are intercepting the shortcut</li>
                <li>• Try pressing the shortcut while focused on the page</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
