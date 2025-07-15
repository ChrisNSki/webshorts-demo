'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import { toast } from 'sonner';
import { SaveIcon } from 'lucide-react';

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

function SaveCard() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="CTRL + S" action={handleSave} />
const handleSave = () => {
  toast.success('Saved successfully');
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleSave = () => {
    toast.success('Saved successfully');
    // Show the indicator
    setShowIndicator(true);
    // Hide the indicator after 3 seconds
    setTimeout(() => setShowIndicator(false), 3000);
  };

  return (
    <Card className={`relative min-w-2xl max-w-2xl p-0 mt-10 h-[350px] min-h-[350px] ${view === 'code' ? 'bg-[#2D2D2D]' : ''}`}>
      {/* Shortcut indicator */}
      {showIndicator && (
        <div className='absolute top-2 right-2 z-10'>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50'></div>
        </div>
      )}

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
            <SaveIcon className='w-20 h-20' />
          </div>
          <div className='text-lg text-gray-600 dark:text-gray-300'>
            <ClientShortcutListener keys='CTRL + S' action={handleSave} shortName='Save' description='Save the current content'>
              <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "CTRL + S" to Save</div>
            </ClientShortcutListener>
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
            {`<ShortcutListener keys="CTRL + S" action={handleSave} />
    const handleSave = () => {
    toast.success('Saved successfully');
    // Other Save Logic Might Go Here
};`}
          </DemoCodeBlock>
        </div>
      )}
    </Card>
  );
}

export default SaveCard;
