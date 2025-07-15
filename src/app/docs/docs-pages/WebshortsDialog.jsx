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

export default function WebShortsDialog() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>WebShortsDialog</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>A universal help dialog that displays all available shortcuts and can be triggered with the F1 key.</p>
        </div>

        {/* Basic Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Basic Usage</h2>
          <p className='text-gray-600 dark:text-gray-300'>The WebShortsDialog is automatically included when you use WebShortsProvider. It can be triggered with F1:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { WebShortsProvider } from '@chrisnski/webshorts';
import shortcutsConfig from './webshorts.config.js';

function App() {
  return (
    <WebShortsProvider config={shortcutsConfig} currentPage={pathname}>
      <YourApp />
      {/* WebShortsDialog is automatically included */}
    </WebShortsProvider>
  );
}`}
          </CodeBlock>
        </div>

        {/* Features */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Features</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>🎯 Universal Access</h3>
              <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
                <li>• Available on every page</li>
                <li>• Triggered with Shift + ? key</li>
                <li>• Shows all registered shortcuts</li>
                <li>• Works across your entire app</li>
              </ul>
            </div>

            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <h3 className='font-semibold text-green-800 dark:text-green-200 mb-2'>📋 Organized Display</h3>
              <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
                <li>• Grouped by page/component</li>
                <li>• Clear key combination display</li>
                <li>• Description for each shortcut</li>
                <li>• Search and filter capabilities</li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>🎨 Customizable</h3>
              <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
                <li>• Custom styling options</li>
                <li>• Configurable trigger key</li>
                <li>• Custom content and layout</li>
                <li>• Theme integration</li>
              </ul>
            </div>

            <div className='bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4'>
              <h3 className='font-semibold text-orange-800 dark:text-orange-200 mb-2'>⚡ Performance</h3>
              <ul className='text-orange-700 dark:text-orange-300 text-sm space-y-1'>
                <li>• Lazy loaded when needed</li>
                <li>• Minimal bundle impact</li>
                <li>• Efficient rendering</li>
                <li>• Memory optimized</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Triggering the Dialog */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Triggering the Dialog</h2>
          <p className='text-gray-600 dark:text-gray-300'>The WebShortsDialog can be triggered in several ways:</p>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Shift + ? (Default)</h3>
              <CodeBlock language='text' style={tomorrow}>
                {`Press Shift + ? anywhere in your app to open the shortcuts dialog`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Programmatically</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`import { useShortcuts } from '@chrisnski/webshorts';

function MyComponent() {
  const { openDialog } = useShortcuts();
  
  const handleHelpClick = () => {
    openDialog();
  };
  
  return (
    <button onClick={handleHelpClick}>
      Show Shortcuts
    </button>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Custom Trigger Key</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// In your webshorts.config.js
export default {
  dialog: {
    triggerKey: 'SHIFT + ?', // Custom trigger key
  },
  // ... rest of config
};`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Dialog Content */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Dialog Content</h2>
          <p className='text-gray-600 dark:text-gray-300'>The dialog displays all registered shortcuts organized by page and component:</p>

          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>What You'll See</h3>
            <ul className='text-sm space-y-2'>
              <li className='flex items-start gap-2'>
                <span className='text-blue-600 dark:text-blue-400'>•</span>
                <span>
                  <strong>Global Shortcuts:</strong> Shortcuts that work across all pages
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-green-600 dark:text-green-400'>•</span>
                <span>
                  <strong>Page-Specific Shortcuts:</strong> Shortcuts for the current page
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-purple-600 dark:text-purple-400'>•</span>
                <span>
                  <strong>Component Shortcuts:</strong> Shortcuts from specific components
                </span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-600 dark:text-orange-400'>•</span>
                <span>
                  <strong>Search & Filter:</strong> Find specific shortcuts quickly
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Customization */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Customization</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Dialog Props & CSS Customization</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                The <code>WebShortsDialog</code> component supports several props and CSS classes for deep customization:
              </p>
              <ul className='list-disc list-inside text-gray-600 dark:text-gray-300 mb-4'>
                <li>
                  <strong>description</strong>: Custom help text for the dialog (prop or config)
                </li>
                <li>
                  <strong>className</strong>: Custom CSS class for the dialog container
                </li>
                <li>
                  <strong>style</strong>: Inline styles for the dialog container
                </li>
                <li>
                  <strong>triggerKey</strong>: Change the key combination to open the dialog
                </li>
                <li>
                  <strong>title</strong>: Custom dialog title
                </li>
                <li>
                  <strong>footer</strong>: Custom dialog footer
                </li>
              </ul>
              <CodeBlock language='jsx' style={tomorrow}>{`<WebShortsDialog description="Custom help text for your app's shortcuts." className="my-dialog" style={{ backgroundColor: '#222' }} />`}</CodeBlock>
              <CodeBlock language='js' style={tomorrow}>{`// webshorts.config.js
export default {
  dialog: {
    className: 'my-custom-dialog',
    style: { backgroundColor: '#f0f0f0', borderRadius: '12px' },
    title: 'Keyboard Shortcuts',
    description: 'Use these shortcuts to navigate and interact with the app',
    footer: 'Press ESC to close',
    triggerKey: 'CTRL + SHIFT + H',
  },
  // ... rest of config
};`}</CodeBlock>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Customizing the Description</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                You can style the help dialog description using the <code>.webshorts-help-dialog-description</code> CSS class:
              </p>
              <CodeBlock language='css' style={tomorrow}>{`.webshorts-help-dialog-description {
  font-weight: 400;
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
}`}</CodeBlock>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Available CSS Classes</h3>
              <ul className='list-disc list-inside text-gray-600 dark:text-gray-300 mb-4'>
                <li>
                  <code>.webshorts-dialog</code> – Main dialog container
                </li>
                <li>
                  <code>.webshorts-dialog-header</code> – Dialog header section
                </li>
                <li>
                  <code>.webshorts-dialog-content</code> – Dialog content area
                </li>
                <li>
                  <code>.webshorts-dialog-footer</code> – Dialog footer section
                </li>
                <li>
                  <code>.webshorts-help-dialog-description</code> – Help dialog description
                </li>
                <li>
                  <code>.webshorts-shortcut-item</code> – Individual shortcut item
                </li>
                <li>
                  <code>.webshorts-shortcut-keys</code> – Key combination display
                </li>
                <li>
                  <code>.webshorts-shortcut-description</code> – Shortcut description text
                </li>
                <li>
                  <code>.webshorts-shortcut-group</code> – Group of related shortcuts
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Configuration Options */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Configuration Options</h2>

          <div className='overflow-x-auto'>
            <table className='w-full border-collapse border border-gray-200 dark:border-gray-700'>
              <thead>
                <tr className='bg-gray-50 dark:bg-gray-800'>
                  <th className='border border-gray-200 dark:border-gray-700 px-4 py-2 text-left'>Option</th>
                  <th className='border border-gray-200 dark:border-gray-700 px-4 py-2 text-left'>Type</th>
                  <th className='border border-gray-200 dark:border-gray-700 px-4 py-2 text-left'>Default</th>
                  <th className='border border-gray-200 dark:border-gray-700 px-4 py-2 text-left'>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>triggerKey</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>string</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>'SHIFT + ?'</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>Key to trigger dialog</td>
                </tr>
                <tr>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>title</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>string</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>'Keyboard Shortcuts'</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>Dialog title</td>
                </tr>
                <tr>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>className</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>string</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>&lt;n/a&gt;</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>Custom CSS class</td>
                </tr>
                <tr>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>style</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>object</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>&lt;n/a&gt;</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>Inline styles</td>
                </tr>
                <tr>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm'>disableDefault</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>boolean</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>false</td>
                  <td className='border border-gray-200 dark:border-gray-700 px-4 py-2'>Disable F1 trigger</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Integration Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Integration Examples</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Help Button</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`import { useShortcuts } from '@chrisnski/webshorts';

function HelpButton() {
  const { openDialog } = useShortcuts();
  
  return (
    <button 
      onClick={openDialog}
      className='px-4 py-2 bg-blue-500 text-white rounded'
    >
      Help (Shift + ?)
    </button>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Custom Help Menu</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function Header() {
  const { openDialog } = useShortcuts();
  
  return (
    <header className='flex justify-between items-center p-4'>
      <h1>My App</h1>
      
      <div className='flex gap-2'>
        <button onClick={() => navigate('/settings')}>
          Settings
        </button>
        <button onClick={openDialog}>
          Keyboard Shortcuts
        </button>
      </div>
    </header>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Context-Aware Help</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function EditorPage() {
  const { openDialog } = useShortcuts();
  const [isEditing, setIsEditing] = useState(false);
  
  return (
    <div>
      <div className='toolbar'>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'View' : 'Edit'}
        </button>
        
        {isEditing && (
          <button onClick={openDialog}>
            Show Editor Shortcuts
          </button>
        )}
      </div>
      
      {/* Editor content */}
    </div>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Troubleshooting</h2>

          <div className='space-y-4'>
            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Dialog not opening?</h3>
              <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
                <li>• Ensure WebShortsProvider is wrapping your app</li>
                <li>• Check that Shift + ? key is not being intercepted by browser</li>
                <li>• Verify no other components are preventing event propagation</li>
                <li>• Try using the programmatic openDialog() method</li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>No shortcuts showing?</h3>
              <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
                <li>• Make sure shortcuts are properly registered</li>
                <li>• Check that the current page matches shortcut page settings</li>
                <li>• Verify config file is loaded correctly</li>
                <li>• Enable debug mode to see registration status</li>
              </ul>
            </div>

            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <h3 className='font-semibold text-green-800 dark:text-green-200 mb-2'>Custom styling not working?</h3>
              <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
                <li>• Ensure CSS classes are properly defined</li>
                <li>• Check that styles are not being overridden</li>
                <li>• Verify configuration is loaded before dialog opens</li>
                <li>• Use browser dev tools to inspect dialog structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
