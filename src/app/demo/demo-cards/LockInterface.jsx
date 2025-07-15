'use client';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import { toast } from 'sonner';
import { Lock, Unlock } from 'lucide-react';

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

function LockInterface() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const handleViewChange = (view) => setView(view);
  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="CTRL + L" action={handleLockInterface} />
const [isLocked, setIsLocked] = useState(false);
const handleLockInterface = () => {
  setIsLocked(!isLocked);
  toast.success(!isLocked ? 'Interface locked! 🔒' : 'Interface unlocked! 🔓');
};

// In your JSX:
<Card className={isLocked ? 'blur-sm pointer-events-none select-none' : ''}>...</Card>
{isLocked && <SecurityOverlay onUnlock={handleLockInterface} />}

// Security overlay component
const SecurityOverlay = ({ onUnlock }) => (
  <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
      <Lock className="w-12 h-12 mx-auto mb-4 text-red-500" />
      <h2 className="text-xl font-bold mb-2">Interface Locked</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Press CTRL + L to unlock</p>
      <Button onClick={onUnlock}>Unlock</Button>
    </div>
  </div>
);`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  const handleLockInterface = () => {
    setIsLocked(!isLocked);
    toast.success(!isLocked ? 'Interface locked! 🔒' : 'Interface unlocked! 🔓');
  };
  // Overlay component
  const SecurityOverlay = ({ onUnlock }) => (
    <div className='fixed inset-0 bg-black/20 z-50 flex items-center justify-center animate-in fade-in duration-300'>
      <div className='bg-white dark:bg-gray-800 p-8 rounded-lg text-center animate-in slide-in-from-bottom-4 duration-300'>
        <Lock className='w-12 h-12 mx-auto mb-4 text-red-500' />
        <h2 className='text-xl font-bold mb-2'>Interface Locked</h2>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>Press CTRL + L to unlock</p>
        <Button onClick={onUnlock}>Unlock</Button>
        <div className='flex justify-center space-x-2 mt-4'>
          <div className='w-3 h-3 bg-red-500 rounded-full animate-pulse'></div>
          <div className='w-3 h-3 bg-yellow-500 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
          <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {isLocked && <SecurityOverlay onUnlock={handleLockInterface} />}
      <Card className={`relative min-w-2xl max-w-2xl p-0 mt-10 h-[350px] min-h-[350px] transition-all duration-300 ${view === 'code' ? 'border-black border-2 bg-[#2D2D2D]' : ''} ${isLocked ? 'blur-sm pointer-events-none select-none' : ''}`}>
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
            <div className='text-6xl mb-4'>{isLocked ? <Lock className='w-20 h-20 text-red-500' /> : <Unlock className='w-20 h-20 text-green-500' />}</div>
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ClientShortcutListener keys='CTRL + L' action={handleLockInterface} shortName='Lock Interface' description='Lock the interface with blur overlay'>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "CTRL + L" to {isLocked ? 'Unlock' : 'Lock'} Interface</div>
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
              {`<ShortcutListener keys="CTRL + L" action={handleLockInterface} />
const [isLocked, setIsLocked] = useState(false);
const handleLockInterface = () => {
  setIsLocked(!isLocked);
  toast.success(!isLocked ? 'Interface locked! 🔒' : 'Interface unlocked! 🔓');
};

// In your JSX:
<Card className={isLocked ? 'blur-sm pointer-events-none select-none' : ''}>...</Card>
{isLocked && <SecurityOverlay onUnlock={handleLockInterface} />}

// Security overlay component
const SecurityOverlay = ({ onUnlock }) => (
  <div className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
      <Lock className="w-12 h-12 mx-auto mb-4 text-red-500" />
      <h2 className="text-xl font-bold mb-2">Interface Locked</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Press CTRL + L to unlock</p>
      <Button onClick={onUnlock}>Unlock</Button>
    </div>
  </div>
);`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default LockInterface;
