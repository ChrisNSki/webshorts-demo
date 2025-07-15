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

export default function UseShortcutsHooks() {
  return (
    <div className='flex-1 p-6 max-w-4xl'>
      <div className='space-y-8'>
        {/* Header */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>useShortcuts Hook</h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>Access WebShorts functionality and manage shortcuts programmatically using the useShortcuts hook.</p>
        </div>

        {/* Basic Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Basic Usage</h2>
          <p className='text-gray-600 dark:text-gray-300'>Import and use the useShortcuts hook in any component within the WebShortsProvider:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`import { useShortcuts } from '@chrisnski/webshorts';

function MyComponent() {
  const { shortcuts, registerShortcut, unregisterShortcut } = useShortcuts();
  
  // Use the hook values
  return <div>My Component</div>;
}`}
          </CodeBlock>
        </div>

        {/* Hook Return Values */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Hook Return Values</h2>
          <p className='text-gray-600 dark:text-gray-300'>The useShortcuts hook returns an object with the following properties:</p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>State Values</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>shortcuts</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Array of all registered shortcuts</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>currentPage</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Current page/route</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>isDialogOpen</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Whether help dialog is open</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>debug</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Debug mode status</p>
                </div>
              </div>
            </div>

            <div className='space-y-4'>
              <h3 className='text-xl font-semibold'>Functions</h3>
              <div className='space-y-2'>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>registerShortcut</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Register a new shortcut programmatically</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>unregisterShortcut</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Remove a registered shortcut</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>openDialog</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Open the help dialog</p>
                </div>
                <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm'>closeDialog</h4>
                  <p className='text-xs text-gray-600 dark:text-gray-400'>Close the help dialog</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Function Examples */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Function Examples</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>registerShortcut</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function MyComponent() {
  const { registerShortcut } = useShortcuts();
  
  useEffect(() => {
    // Register a shortcut programmatically
    registerShortcut({
      keys: 'CTRL + SHIFT + S',
      action: () => console.log('Custom save action'),
      description: 'Custom save shortcut',
      page: '/editor'
    });
  }, [registerShortcut]);
  
  return <div>Component with custom shortcut</div>;
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>unregisterShortcut</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function MyComponent() {
  const { unregisterShortcut } = useShortcuts();
  
  const handleRemoveShortcut = () => {
    // Remove a specific shortcut
    unregisterShortcut('CTRL + SHIFT + S');
  };
  
  return (
    <button onClick={handleRemoveShortcut}>
      Remove Shortcut
    </button>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>openDialog / closeDialog</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function HelpButton() {
  const { openDialog, closeDialog, isDialogOpen } = useShortcuts();
  
  return (
    <div>
      <button onClick={openDialog}>
        Show Help
      </button>
      
      {isDialogOpen && (
        <button onClick={closeDialog}>
          Close Help
        </button>
      )}
    </div>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* State Usage */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>State Usage</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Accessing Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function ShortcutsList() {
  const { shortcuts } = useShortcuts();
  
  return (
    <div>
      <h3>Available Shortcuts:</h3>
      <ul>
        {shortcuts.map((shortcut, index) => (
          <li key={index}>
            {shortcut.keys} - {shortcut.description}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Current Page Awareness</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function PageSpecificComponent() {
  const { currentPage } = useShortcuts();
  
  return (
    <div>
      <p>Current page: {currentPage}</p>
      
      {currentPage === '/dashboard' && (
        <div>Dashboard-specific content</div>
      )}
      
      {currentPage === '/editor' && (
        <div>Editor-specific content</div>
      )}
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Dialog State</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function DialogAwareComponent() {
  const { isDialogOpen, openDialog } = useShortcuts();
  
  return (
    <div>
      <button 
        onClick={openDialog}
        disabled={isDialogOpen}
      >
        {isDialogOpen ? 'Dialog Open' : 'Open Help'}
      </button>
      
      {isDialogOpen && (
        <div className='overlay'>
          Help dialog is currently open
        </div>
      )}
    </div>
  );
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Advanced Patterns */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Advanced Patterns</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Dynamic Shortcuts</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function DynamicShortcuts() {
  const { registerShortcut, unregisterShortcut } = useShortcuts();
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    if (isEditing) {
      // Register editing shortcuts
      registerShortcut({
        keys: 'CTRL + S',
        action: handleSave,
        description: 'Save document'
      });
      
      registerShortcut({
        keys: 'ESC',
        action: () => setIsEditing(false),
        description: 'Exit edit mode'
      });
    } else {
      // Remove editing shortcuts
      unregisterShortcut('CTRL + S');
      unregisterShortcut('ESC');
    }
  }, [isEditing, registerShortcut, unregisterShortcut]);
  
  return (
    <button onClick={() => setIsEditing(!isEditing)}>
      {isEditing ? 'Stop Editing' : 'Start Editing'}
    </button>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Shortcut Analytics</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`function ShortcutAnalytics() {
  const { shortcuts } = useShortcuts();
  const [usageStats, setUsageStats] = useState({});
  
  useEffect(() => {
    // Track shortcut usage
    const stats = shortcuts.reduce((acc, shortcut) => {
      acc[shortcut.keys] = {
        description: shortcut.description,
        page: shortcut.page,
        usageCount: 0
      };
      return acc;
    }, {});
    
    setUsageStats(stats);
  }, [shortcuts]);
  
  return (
    <div>
      <h3>Shortcut Usage Statistics</h3>
      <pre>{JSON.stringify(usageStats, null, 2)}</pre>
    </div>
  );
}`}
              </CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'>Custom Hook</h3>
              <CodeBlock language='jsx' style={tomorrow}>
                {`// Custom hook for specific functionality
function useEditorShortcuts() {
  const { registerShortcut, unregisterShortcut } = useShortcuts();
  
  const registerEditorShortcuts = useCallback(() => {
    registerShortcut({
      keys: 'CTRL + B',
      action: () => document.execCommand('bold'),
      description: 'Bold text'
    });
    
    registerShortcut({
      keys: 'CTRL + I',
      action: () => document.execCommand('italic'),
      description: 'Italic text'
    });
  }, [registerShortcut]);
  
  const unregisterEditorShortcuts = useCallback(() => {
    unregisterShortcut('CTRL + B');
    unregisterShortcut('CTRL + I');
  }, [unregisterShortcut]);
  
  return {
    registerEditorShortcuts,
    unregisterEditorShortcuts
  };
}

// Usage
function Editor() {
  const { registerEditorShortcuts, unregisterEditorShortcuts } = useEditorShortcuts();
  
  useEffect(() => {
    registerEditorShortcuts();
    return () => unregisterEditorShortcuts();
  }, [registerEditorShortcuts, unregisterEditorShortcuts]);
  
  return <div>Editor with custom shortcuts</div>;
}`}
              </CodeBlock>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Error Handling</h2>
          <p className='text-gray-600 dark:text-gray-300'>Handle potential errors when using the useShortcuts hook:</p>

          <CodeBlock language='jsx' style={tomorrow}>
            {`function SafeShortcutsComponent() {
  const shortcutsContext = useShortcuts();
  
  // Check if hook is available
  if (!shortcutsContext) {
    return <div>WebShorts not available</div>;
  }
  
  const { shortcuts, registerShortcut } = shortcutsContext;
  
  const handleRegisterShortcut = useCallback((shortcut) => {
    try {
      registerShortcut(shortcut);
    } catch (error) {
      console.error('Failed to register shortcut:', error);
      // Handle error appropriately
    }
  }, [registerShortcut]);
  
  return (
    <div>
      <button onClick={() => handleRegisterShortcut({
        keys: 'CTRL + T',
        action: () => console.log('Test shortcut'),
        description: 'Test shortcut'
      })}>
        Register Test Shortcut
      </button>
    </div>
  );
}`}
          </CodeBlock>
        </div>

        {/* Best Practices */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Best Practices</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4'>
              <h3 className='font-semibold text-green-800 dark:text-green-200 mb-2'>✅ Do</h3>
              <ul className='text-green-700 dark:text-green-300 text-sm space-y-1'>
                <li>• Use the hook only within WebShortsProvider</li>
                <li>• Clean up shortcuts when components unmount</li>
                <li>• Use useCallback for function dependencies</li>
                <li>• Handle errors gracefully</li>
                <li>• Check for hook availability</li>
                <li>• Use descriptive shortcut descriptions</li>
              </ul>
            </div>

            <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4'>
              <h3 className='font-semibold text-red-800 dark:text-red-200 mb-2'>❌ Don't</h3>
              <ul className='text-red-700 dark:text-red-300 text-sm space-y-1'>
                <li>• Use the hook outside of WebShortsProvider</li>
                <li>• Forget to clean up registered shortcuts</li>
                <li>• Create infinite re-render loops</li>
                <li>• Ignore error handling</li>
                <li>• Use the hook in server components (Next.js)</li>
                <li>• Register duplicate shortcuts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className='space-y-4'>
          <h2 className='text-2xl font-semibold'>Troubleshooting</h2>

          <div className='space-y-4'>
            <div className='bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4'>
              <h3 className='font-semibold text-yellow-800 dark:text-yellow-200 mb-2'>"useShortcuts must be used within WebShortsProvider"</h3>
              <ul className='text-yellow-700 dark:text-yellow-300 text-sm space-y-1'>
                <li>• Ensure WebShortsProvider wraps your component tree</li>
                <li>• Check that the component is a client component (Next.js)</li>
                <li>• Verify the import path is correct</li>
                <li>• Make sure the hook is called in a React component</li>
              </ul>
            </div>

            <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
              <h3 className='font-semibold text-blue-800 dark:text-blue-200 mb-2'>Shortcuts not registering?</h3>
              <ul className='text-blue-700 dark:text-blue-300 text-sm space-y-1'>
                <li>• Check that the shortcut object has required properties</li>
                <li>• Verify the keys format is correct</li>
                <li>• Ensure the action function is properly defined</li>
                <li>• Check for conflicts with existing shortcuts</li>
                <li>• Enable debug mode to see registration feedback</li>
              </ul>
            </div>

            <div className='bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4'>
              <h3 className='font-semibold text-purple-800 dark:text-purple-200 mb-2'>Performance issues?</h3>
              <ul className='text-purple-700 dark:text-purple-300 text-sm space-y-1'>
                <li>• Use useCallback for function dependencies</li>
                <li>• Avoid registering shortcuts in render</li>
                <li>• Clean up shortcuts in useEffect cleanup</li>
                <li>• Use React.memo for components that use the hook</li>
                <li>• Limit the number of shortcuts registered</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
