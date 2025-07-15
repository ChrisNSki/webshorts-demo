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

export default function CustomStyling() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>Custom Styling</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>Customize the appearance of WebShorts components to match your application's design system.</p>
        </div>

        {/* Overview */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Overview</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            WebShorts provides multiple ways to customize the styling of its components, including the help dialog, shortcut indicators, and other UI elements. You can use CSS classes, inline styles, or theme integration.
          </p>
        </div>

        {/* Dialog Styling */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Dialog Styling</h2>
          <p className='text-gray-600 dark:text-gray-300'>Customize the appearance of the WebShortsDialog component:</p>

          <CodeBlock language='js' style={tomorrow}>
            {`// webshorts.config.js
export default {
  dialog: {
    // Custom CSS class
    className: 'my-custom-dialog',
    
    // Inline styles
    style: {
      backgroundColor: '#1a1a1a',
      borderRadius: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    },
    
    // Custom content
    title: 'Keyboard Shortcuts',
    description: 'Use these shortcuts to navigate efficiently',
    footer: 'Press ESC to close this dialog',
  },
  // ... rest of config
};`}
          </CodeBlock>
        </div>

        {/* CSS Classes */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>CSS Classes</h2>
          <p className='text-gray-600 dark:text-gray-300'>Use CSS classes to style WebShorts components. Here are the available class names:</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Dialog Classes</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-dialog</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Main dialog container</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-dialog-header</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Dialog header section</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-dialog-content</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Dialog content area</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-dialog-footer</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Dialog footer section</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-help-dialog-description</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Help dialog description (new, for custom styling)</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-lg font-semibold'>Shortcut Classes</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-shortcut-item</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Individual shortcut item</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-shortcut-keys</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Key combination display</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-shortcut-description</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Shortcut description text</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>webshorts-shortcut-group</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Group of related shortcuts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Integration */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Theme Integration</h2>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts automatically adapts to your application's theme using CSS custom properties:</p>

          <CodeBlock language='css' style={tomorrow}>
            {`/* Custom CSS Variables */
:root {
  --webshorts-bg: #ffffff;
  --webshorts-text: #1a1a1a;
  --webshorts-border: #e5e7eb;
  --webshorts-primary: #3b82f6;
  --webshorts-secondary: #6b7280;
}

/* Dark theme */
[data-theme="dark"] {
  --webshorts-bg: #1a1a1a;
  --webshorts-text: #ffffff;
  --webshorts-border: #374151;
  --webshorts-primary: #60a5fa;
  --webshorts-secondary: #9ca3af;
}`}
          </CodeBlock>
        </div>

        {/* Custom CSS Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Custom CSS Examples</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            You can also use dialog props and config options for even more control. For example, pass <code>className</code>, <code>style</code>, or <code>description</code> to <code>WebShortsDialog</code> or set them in your config file.
          </p>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Modern Dark Theme</h3>
              <CodeBlock language='css' style={tomorrow}>
                {`/* Modern dark theme styling */
.webshorts-dialog {
  background: linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%);
  border: 1px solid #3a3a5a;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.webshorts-help-dialog-description {
  font-weight: 400;
  font-size: 1rem;
  color: #b3b3b3;
  margin-top: 0.5rem;
}

.webshorts-dialog-header {
  background: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid #3a3a5a;
  padding: 20px;
}

.webshorts-shortcut-keys {
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid #3b82f6;
  border-radius: 6px;
  padding: 4px 8px;
  font-family: 'Monaco', 'Menlo', monospace;
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Minimal Light Theme</h3>
              <CodeBlock language='css' style={tomorrow}>
                {`/* Minimal light theme */
.webshorts-dialog {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.webshorts-shortcut-item {
  padding: 12px;
  border-bottom: 1px solid #f3f4f6;
  transition: background-color 0.2s;
}

.webshorts-shortcut-item:hover {
  background-color: #f9fafb;
}

.webshorts-shortcut-keys {
  background: #f3f4f6;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.875rem;
  font-weight: 500;
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Branded Theme</h3>
              <CodeBlock language='css' style={tomorrow}>
                {`/* Branded theme with custom colors */
.webshorts-dialog {
  background: #ffffff;
  border: 2px solid #8b5cf6;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(139, 92, 246, 0.1);
}

.webshorts-dialog-header {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
}

.webshorts-shortcut-keys {
  background: #f3e8ff;
  color: #7c3aed;
  border: 1px solid #c084fc;
  border-radius: 6px;
  padding: 4px 8px;
  font-weight: 600;
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Responsive Design */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Responsive Design</h2>
          <p className='text-gray-600 dark:text-gray-300'>WebShorts components are responsive by default, but you can add custom responsive styles:</p>

          <CodeBlock language='css' style={tomorrow}>
            {`/* Responsive dialog styling */
.webshorts-dialog {
  width: 90vw;
  max-width: 600px;
  max-height: 80vh;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .webshorts-dialog {
    width: 95vw;
    margin: 10px;
    border-radius: 8px;
  }
  
  .webshorts-shortcut-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .webshorts-shortcut-keys {
    font-size: 0.75rem;
    padding: 2px 4px;
  }
}

/* Tablet optimizations */
@media (min-width: 769px) and (max-width: 1024px) {
  .webshorts-dialog {
    width: 80vw;
    max-width: 700px;
  }
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
