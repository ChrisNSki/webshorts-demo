'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShortcutListener } from '@chrisnski/webshorts';
import { toast } from 'sonner';
import { Camera } from 'lucide-react';

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

function TakeScreenshot() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="SHIFT + P" action={handleScreenshot} />
const handleScreenshot = () => {
  // Add blur to page
  document.body.style.filter = 'blur(2px)';
  
  // Show camera overlay
  setShowOverlay(true);
  
  // Flash effect
  setShowFlash(true);
  setTimeout(() => setShowFlash(false), 200);
  
  // Remove effects after screenshot
  setTimeout(() => {
    document.body.style.filter = 'none';
    setShowOverlay(false);
  }, 1000);
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleScreenshot = () => {
    toast.success('Screenshot taken!');

    // Add blur to page
    document.body.style.filter = 'blur(2px)';

    // Show camera overlay
    setShowOverlay(true);

    // Flash effect
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 200);

    // Remove effects after screenshot
    setTimeout(() => {
      document.body.style.filter = 'none';
      setShowOverlay(false);
    }, 1000);
  };

  return (
    <>
      {/* Flash overlay */}
      {showFlash && <div className='fixed inset-0 bg-white z-50 animate-pulse' style={{ animationDuration: '200ms' }}></div>}

      {/* Camera overlay */}
      {showOverlay && (
        <div className='fixed inset-0 z-40 flex items-center justify-center'>
          <div className='bg-black/50 rounded-full p-8'>
            <Camera className='w-16 h-16 text-white' />
          </div>
        </div>
      )}

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
              <Camera className='w-20 h-20' />
            </div>
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ShortcutListener keys='SHIFT + P' action={handleScreenshot}>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "SHIFT + P" to Take Screenshot</div>
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
              {`<ShortcutListener keys="SHIFT + P" action={handleScreenshot} />
const handleScreenshot = () => {
  // Add blur to page
  document.body.style.filter = 'blur(2px)';
  
  // Show camera overlay
  setShowOverlay(true);
  
  // Flash effect
  setShowFlash(true);
  setTimeout(() => setShowFlash(false), 200);
  
  // Remove effects after screenshot
  setTimeout(() => {
    document.body.style.filter = 'none';
    setShowOverlay(false);
  }, 1000);
};`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default TakeScreenshot;
