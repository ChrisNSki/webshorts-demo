'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ClientShortcutListener from '@/components/ClientShortcutListener';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';

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

function ClearForm() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'This is a sample message',
  });
  const [isClearing, setIsClearing] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="CTRL + SHIFT + C" action={handleClearForm} />
const handleClearForm = () => {
  setIsClearing(true);
  
  // Fade out animation
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input, index) => {
    setTimeout(() => {
      input.style.opacity = '0';
      input.style.transform = 'translateX(-10px)';
    }, index * 100);
  });
  
  // Reset form after animation
  setTimeout(() => {
    setFormData({ name: '', email: '', message: '' });
    inputs.forEach(input => {
      input.style.opacity = '1';
      input.style.transform = 'translateX(0)';
    });
    setIsClearing(false);
  }, 500);
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleClearForm = () => {
    toast.success('Form cleared!');
    setIsClearing(true);

    // Fade out animation
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input, index) => {
      setTimeout(() => {
        input.style.opacity = '0';
        input.style.transform = 'translateX(-10px)';
      }, index * 100);
    });

    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      inputs.forEach((input) => {
        input.style.opacity = '1';
        input.style.transform = 'translateX(0)';
      });
      setIsClearing(false);
    }, 500);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
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
        <div className='flex flex-col items-center justify-center h-full p-6'>
          <div className='text-6xl mb-4'>
            <Trash2 className='w-20 h-20' />
          </div>
          <div className='w-full max-w-sm space-y-3'>
            <Input placeholder='Name' value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} className='transition-all duration-300' />
            <Input placeholder='Email' value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} className='transition-all duration-300' />
            <textarea placeholder='Message' value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} className='w-full p-2 border rounded-md transition-all duration-300 resize-none' rows={3} />
          </div>
          <div className='text-sm text-gray-600 dark:text-gray-300 mt-4'>
            <ClientShortcutListener keys='CTRL + SHIFT + C' action={handleClearForm} shortName='Clear Form' description='Clear all form inputs'>
              <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "CTRL + SHIFT + C" to Clear Form</div>
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
            {`<ShortcutListener keys="CTRL + SHIFT + C" action={handleClearForm} />
const handleClearForm = () => {
  setIsClearing(true);
  
  // Fade out animation
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input, index) => {
    setTimeout(() => {
      input.style.opacity = '0';
      input.style.transform = 'translateX(-10px)';
    }, index * 100);
  });
  
  // Reset form after animation
  setTimeout(() => {
    setFormData({ name: '', email: '', message: '' });
    inputs.forEach(input => {
      input.style.opacity = '1';
      input.style.transform = 'translateX(0)';
    });
    setIsClearing(false);
  }, 500);
};`}
          </DemoCodeBlock>
        </div>
      )}
    </Card>
  );
}

export default ClearForm;
