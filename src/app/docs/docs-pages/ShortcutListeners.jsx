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

export default function ShortcutListeners() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>ShortcutListener</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>Register page-specific shortcuts that only work on specific pages or components.</p>
        </div>

        {/* Basic Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Basic Usage</h2>
          <p className='text-gray-600 dark:text-gray-300'>Use ShortcutListener to register shortcuts that are specific to a page or component:</p>

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

        {/* Props Reference */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Props Reference</h2>
          <p className='text-gray-600 dark:text-gray-300'>The ShortcutListener component accepts several props to customize its behavior:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`<ShortcutListener
  keys='CTRL + S'
  action={handleSave}
  page='/dashboard' // Optional, defaults to current page
/>`}
          </CodeBlock>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Required Props</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>keys</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Key combination (e.g., "CTRL + SHIFT + A")</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>action</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Function to execute when shortcut is pressed</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Optional Props</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>page</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Page where this shortcut is active (defaults to current page)</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>children</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Optional children for semantic grouping (not required for functionality)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Usage Examples</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Basic Shortcut</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Simple shortcut with function
<ShortcutListener 
  keys='CTRL + S' 
  action={() => saveDocument()} 
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>With Specific Page</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Shortcut that only works on a specific page
<ShortcutListener 
  keys='CTRL + B' 
  action={handleBold}
  page='/editor'
/>`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Multiple Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Register multiple shortcuts in one component
function EditorPage() {
  return (
    <div>
      <ShortcutListener keys='CTRL + S' action={handleSave} />
      <ShortcutListener keys='CTRL + Z' action={handleUndo} />
      <ShortcutListener keys='CTRL + Y' action={handleRedo} />
      <ShortcutListener keys='CTRL + B' action={handleBold} />
      <ShortcutListener keys='CTRL + I' action={handleItalic} />
      
      {/* Editor content */}
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>With Children (Optional)</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// ShortcutListener can wrap children for semantic grouping
// Children are optional and don't affect functionality
<ShortcutListener keys='ESC' action={handleEscape}>
  <div className='editor-toolbar'>
    {/* Toolbar content */}
  </div>
</ShortcutListener>

// Or without children (functionally identical)
<ShortcutListener keys='ESC' action={handleEscape} />
<div className='editor-toolbar'>
  {/* Toolbar content */}
</div>`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Children Functionality */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Children Functionality</h2>
          <p className='text-gray-600 dark:text-gray-300'>
            ShortcutListener can optionally wrap children for semantic grouping, but this is purely for code organization and readability. The children don't affect the shortcut functionality in any way.
          </p>

          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Semantic Grouping</h3>
            <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
              <li>
                • <strong>Optional</strong> - Children are not required for shortcut functionality
              </li>
              <li>
                • <strong>Semantic</strong> - Useful for grouping related UI elements with their shortcuts
              </li>
              <li>
                • <strong>Readability</strong> - Makes code more self-documenting
              </li>
              <li>
                • <strong>No Impact</strong> - Children don't affect shortcut behavior or registration
              </li>
            </ul>
          </div>

          <CodeBlock language='jsx' style={tomorrow}>
            {`// These two approaches are functionally identical:

// With children (semantic grouping)
<ShortcutListener keys='CTRL + S' action={handleSave}>
  <button className='save-button'>Save</button>
</ShortcutListener>

// Without children (same functionality)
<ShortcutListener keys='CTRL + S' action={handleSave} />
<button className='save-button'>Save</button>`}
          </CodeBlock>
        </div>

        {/* Component Lifecycle */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Component Lifecycle</h2>
          <p className='text-gray-600 dark:text-gray-300'>ShortcutListener automatically handles registration and cleanup of shortcuts:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`function MyComponent() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* This shortcut is registered when component mounts */}
      <ShortcutListener 
        keys='CTRL + S' 
        action={handleSave} 
      />
      
      {/* This shortcut is only registered when isEditing is true */}
      {isEditing && (
        <ShortcutListener 
          keys='ESC' 
          action={() => setIsEditing(false)} 
        />
      )}
    </div>
  );
}`}
          </CodeBlock>

          <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
            <h3 className='font-semibold text-green-800 dark:text-green-200 mb-2'>Automatic Cleanup</h3>
            <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
              <li>
                • <strong>Registration</strong> - Shortcuts are registered when the component mounts
              </li>
              <li>
                • <strong>Cleanup</strong> - Shortcuts are automatically unregistered when the component unmounts
              </li>
              <li>
                • <strong>Conditional</strong> - Shortcuts can be conditionally registered based on component state
              </li>
              <li>
                • <strong>Memory safe</strong> - No memory leaks from forgotten event listeners
              </li>
            </ul>
          </div>
        </div>

        {/* Common Patterns */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Common Patterns</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Form Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function ContactForm() {
  return (
    <form>
      <ShortcutListener keys='CTRL + ENTER' action={handleSubmit} />
      <ShortcutListener keys='ESC' action={handleCancel} />
      
      {/* Form fields */}
    </form>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Button Grouping (Semantic)</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function Toolbar() {
  return (
    <div className='toolbar'>
      <ShortcutListener keys='CTRL + S' action={handleSave}>
        <button className='toolbar-button'>Save</button>
      </ShortcutListener>
      
      <ShortcutListener keys='CTRL + Z' action={handleUndo}>
        <button className='toolbar-button'>Undo</button>
      </ShortcutListener>
      
      <ShortcutListener keys='CTRL + Y' action={handleRedo}>
        <button className='toolbar-button'>Redo</button>
      </ShortcutListener>
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Editor Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function TextEditor() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <ShortcutListener keys='CTRL + E' action={() => setIsEditing(!isEditing)} />
      
      {isEditing && (
        <>
          <ShortcutListener keys='CTRL + S' action={handleSave} />
          <ShortcutListener keys='CTRL + Z' action={handleUndo} />
          <ShortcutListener keys='ESC' action={() => setIsEditing(false)} />
        </>
      )}
      
      {/* Editor content */}
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Navigation Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function DashboardPage() {
  return (
    <div>
      <ShortcutListener keys='ALT + 1' action={() => navigate('/dashboard')} />
      <ShortcutListener keys='ALT + 2' action={() => navigate('/profile')} />
      <ShortcutListener keys='ALT + 3' action={() => navigate('/settings')} />
      
      {/* Dashboard content */}
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
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>Shortcut not working?</h3>
              <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
                <li>• Check that the component is mounted and rendered</li>
                <li>• Verify the key combination format (e.g., "CTRL + S" not "Ctrl + S")</li>
                <li>• Ensure the action function is properly defined</li>
                <li>• Check for conflicts with other shortcuts or browser defaults</li>
                <li>• Enable debug mode to see registration feedback</li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>Shortcut conflicts?</h3>
              <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
                <li>• Check for duplicate shortcuts on the same page</li>
                <li>• Verify that the page prop is correctly set</li>
                <li>• Ensure conditional rendering logic is correct</li>
                <li>• Test with debug mode enabled to see all registered shortcuts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
