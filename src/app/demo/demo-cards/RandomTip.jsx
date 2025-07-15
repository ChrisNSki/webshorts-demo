'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShortcutListener } from '@chrisnski/webshorts';
import { toast } from 'sonner';
import { Lightbulb } from 'lucide-react';

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

function RandomTip() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState('');

  const tips = [
    'Use keyboard shortcuts to boost your productivity!',
    'Take regular breaks to maintain focus and creativity.',
    'Organize your workspace for better workflow efficiency.',
    'Learn one new shortcut each day to master your tools.',
    'Use the Pomodoro technique for time management.',
    'Keep your most-used tools easily accessible.',
    'Document your workflows for future reference.',
    'Automate repetitive tasks whenever possible.',
  ];

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="ALT + T" action={handleShowRandomTip} />
const handleShowRandomTip = () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  setCurrentTip(randomTip);
  setShowTip(true);
  
  // Hide tip after 4 seconds
  setTimeout(() => setShowTip(false), 4000);
};

// Modal/Tooltip component
const TipModal = ({ isVisible, tip, onClose }) => {
  return isVisible ? (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md animate-in slide-in-from-bottom-4">
        <p className="text-lg">{tip}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Got it!
        </button>
      </div>
    </div>
  ) : null;
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleShowRandomTip = () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setCurrentTip(randomTip);
    setShowTip(true);
    toast.success('Random tip shown! 💡');

    // Hide tip after 4 seconds
    setTimeout(() => setShowTip(false), 4000);
  };

  const handleCloseTip = () => {
    setShowTip(false);
  };

  return (
    <>
      {/* Tip Modal */}
      {showTip && (
        <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center animate-in fade-in duration-200'>
          <div className='bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-300'>
            <div className='flex items-center gap-2 mb-3'>
              <Lightbulb className='w-5 h-5 text-yellow-500' />
              <h3 className='font-semibold'>Productivity Tip</h3>
            </div>
            <p className='text-gray-700 dark:text-gray-300 mb-4'>{currentTip}</p>
            <Button onClick={handleCloseTip} className='w-full'>
              Got it!
            </Button>
          </div>
        </div>
      )}

      <Card className={`relative min-w-2xl min-h-[350px] max-w-2xl p-0 mt-10 h-[350px] ${view === 'code' ? 'border-black border-2 bg-[#2D2D2D]' : ''}`}>
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
              <Lightbulb className='w-20 h-20' />
            </div>
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ShortcutListener keys='ALT + T' action={handleShowRandomTip}>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "ALT + T" for Random Tip</div>
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
              {`<ShortcutListener keys="ALT + T" action={handleShowRandomTip} />
const handleShowRandomTip = () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  setCurrentTip(randomTip);
  setShowTip(true);
  
  // Hide tip after 4 seconds
  setTimeout(() => setShowTip(false), 4000);
};

// Modal/Tooltip component
const TipModal = ({ isVisible, tip, onClose }) => {
  return isVisible ? (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md animate-in slide-in-from-bottom-4">
        <p className="text-lg">{tip}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Got it!
        </button>
      </div>
    </div>
  ) : null;
};`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default RandomTip;
