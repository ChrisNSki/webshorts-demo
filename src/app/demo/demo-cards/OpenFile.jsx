'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShortcutListener } from '@chrisnski/webshorts';
import { toast } from 'sonner';
import { FolderOpen, FileText } from 'lucide-react';

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

function OpenFile() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef(null);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="CTRL + O" action={handleOpenFile} />
const handleOpenFile = () => {
  // Trigger file input click
  fileInputRef.current.click();
  
  // Show dialog animation
  setShowDialog(true);
  setTimeout(() => setShowDialog(false), 2000);
};

// Hidden file input
<input
  ref={fileInputRef}
  type="file"
  onChange={handleFileSelect}
  style={{ display: 'none' }}
/>`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleOpenFile = () => {
    // Trigger file input click
    fileInputRef.current.click();

    // Show dialog animation
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 2000);

    toast.success('File picker opened! 📁');
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      toast.success(`Selected: ${file.name}`);
    }
  };

  return (
    <>
      {/* Hidden file input */}
      <input ref={fileInputRef} type='file' onChange={handleFileSelect} style={{ display: 'none' }} />

      {/* File picker dialog overlay */}
      {showDialog && (
        <div className='fixed inset-0 bg-black/30 z-50 flex items-center justify-center animate-in fade-in duration-200'>
          <div className='bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-300'>
            <div className='flex items-center gap-3 mb-4'>
              <FolderOpen className='w-6 h-6 text-blue-500' />
              <h3 className='font-semibold'>Open File</h3>
            </div>
            <div className='space-y-2'>
              <div className='flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded'>
                <FileText className='w-4 h-4' />
                <span>document.pdf</span>
              </div>
              <div className='flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded'>
                <FileText className='w-4 h-4' />
                <span>image.jpg</span>
              </div>
              <div className='flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded'>
                <FileText className='w-4 h-4' />
                <span>data.json</span>
              </div>
            </div>
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
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='text-6xl mb-4'>
              <FolderOpen className='w-20 h-20' />
            </div>
            {selectedFile && (
              <div className='mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg'>
                <p className='text-sm text-green-700 dark:text-green-300'>Selected: {selectedFile.name}</p>
              </div>
            )}
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ShortcutListener keys='CTRL + O' action={handleOpenFile}>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "CTRL + O" to Open File</div>
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
              {`<ShortcutListener keys="CTRL + O" action={handleOpenFile} />
const handleOpenFile = () => {
  // Trigger file input click
  fileInputRef.current.click();
  
  // Show dialog animation
  setShowDialog(true);
  setTimeout(() => setShowDialog(false), 2000);
};

// Hidden file input
<input
  ref={fileInputRef}
  type="file"
  onChange={handleFileSelect}
  style={{ display: 'none' }}
/>`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default OpenFile;
