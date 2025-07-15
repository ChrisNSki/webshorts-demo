'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShortcutListener } from '@chrisnski/webshorts';
import { toast } from 'sonner';
import { Settings, X, Palette, Bell, Shield, Monitor } from 'lucide-react';

// Custom CodeBlock component with copy functionality for demo cards
const DemoCodeBlock = ({ children, language, style, customStyle }) => {
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
    <div className='h-full'>
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={true}
        customStyle={{
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.5',
          ...customStyle,
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

function ToggleSettingsPanel() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="ALT + S" action={handleToggleSettings} />
const handleToggleSettings = () => {
  setIsOpen(!isOpen);
  toast.success(isOpen ? 'Settings closed' : 'Settings opened');
};

// Settings sidebar component
const SettingsPanel = ({ isOpen, onClose }) => {
  return (
    <div className={\`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Settings content */}
      </div>
    </div>
  );
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleToggleSettings = () => {
    setIsOpen(!isOpen);
    toast.success(isOpen ? 'Settings closed' : 'Settings opened');
  };

  const handleCloseSettings = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Settings sidebar */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='p-6'>
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-bold'>Settings</h2>
            <button onClick={handleCloseSettings} className='hover:bg-gray-100 dark:hover:bg-gray-700 p-1 rounded'>
              <X className='w-5 h-5' />
            </button>
          </div>

          <div className='space-y-4'>
            <div className='flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer'>
              <Palette className='w-5 h-5 text-blue-500' />
              <span>Appearance</span>
            </div>
            <div className='flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer'>
              <Bell className='w-5 h-5 text-green-500' />
              <span>Notifications</span>
            </div>
            <div className='flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer'>
              <Shield className='w-5 h-5 text-red-500' />
              <span>Privacy</span>
            </div>
            <div className='flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer'>
              <Monitor className='w-5 h-5 text-purple-500' />
              <span>Display</span>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className='fixed inset-0 bg-black/20 z-40 animate-in fade-in duration-200' onClick={handleCloseSettings} />}

      <Card className={`relative min-w-2xl max-w-2xl p-0 mt-10 h-[350px] min-h-[350px] ${view === 'code' ? 'border-black border-2 bg-[#2D2D2D]' : ''}`}>
        <div className='absolute top-0 left-0 p-2 flex w-full justify-between items-center gap-2'>
          <Tabs defaultValue='preview' onValueChange={handleViewChange}>
            <TabsList>
              <TabsTrigger value='preview'>Preview</TabsTrigger>
              <TabsTrigger value='code'>Code</TabsTrigger>
            </TabsList>
          </Tabs>
          {view === 'code' && (
            <Button variant='outline' size='sm' onClick={handleCopy} className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800'>
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          )}
        </div>
        {view === 'preview' ? (
          <div className='flex flex-row items-center justify-center h-full'>
            <div className='text-6xl mb-4'>
              <Settings className='w-20 h-20' />
            </div>
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ShortcutListener keys='ALT + S' action={handleToggleSettings}>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "ALT + S" to Toggle Settings</div>
              </ShortcutListener>
            </div>
          </div>
        ) : (
          <div className='h-full pt-10 rounded-lg'>
            <DemoCodeBlock
              language='jsx'
              style={tomorrow}
              customStyle={{
                backgroundColor: '#2D2D2D',
                minHeight: '100%',
                height: '100%',
              }}
            >
              {`<ShortcutListener keys="ALT + S" action={handleToggleSettings} />
const handleToggleSettings = () => {
  setIsOpen(!isOpen);
  toast.success(isOpen ? 'Settings closed' : 'Settings opened');
};

// Settings sidebar component
const SettingsPanel = ({ isOpen, onClose }) => {
  return (
    <div className={\`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Settings</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* Settings content */}
      </div>
    </div>
  );
};`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default ToggleSettingsPanel;
