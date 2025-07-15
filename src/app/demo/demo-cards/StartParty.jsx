'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ShortcutListener } from '@chrisnski/webshorts';
import { toast } from 'sonner';
import { PartyPopper } from 'lucide-react';

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

// Confetti component
const Confetti = ({ isActive }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 3 + 2,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'][Math.floor(Math.random() * 6)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      }));
      setParticles(newParticles);

      const interval = setInterval(() => {
        setParticles((prev) =>
          prev
            .map((particle) => ({
              ...particle,
              x: particle.x + particle.vx,
              y: particle.y + particle.vy,
              rotation: particle.rotation + particle.rotationSpeed,
              vy: particle.vy + 0.1, // gravity
            }))
            .filter((particle) => particle.y < window.innerHeight + 100)
        );
      }, 16);

      return () => clearInterval(interval);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className='fixed inset-0 pointer-events-none z-50'>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className='absolute w-2 h-2 rounded-full'
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

function StartParty() {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [isPartyActive, setIsPartyActive] = useState(false);

  const handleViewChange = (view) => {
    setView(view);
  };

  const handleCopy = async () => {
    try {
      const codeContent = `<ShortcutListener keys="ALT + SHIFT + P" action={handleStartParty} />
const handleStartParty = () => {
  setIsPartyActive(true);
  toast.success('Party started! 🎉');
  
  // Stop party after 3 seconds
  setTimeout(() => setIsPartyActive(false), 3000);
};

// Confetti component with canvas animation
const Confetti = ({ isActive }) => {
  // Canvas confetti implementation
  // Creates colorful particles with physics
};`;
      await navigator.clipboard.writeText(codeContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleStartParty = () => {
    setIsPartyActive(true);
    toast.success('Party started! 🎉');

    // Stop party after 3 seconds
    setTimeout(() => setIsPartyActive(false), 3000);
  };

  return (
    <>
      <Confetti isActive={isPartyActive} />

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
              <PartyPopper className='w-20 h-20' />
            </div>
            <div className='text-lg text-gray-600 dark:text-gray-300'>
              <ShortcutListener keys='ALT + SHIFT + P' action={handleStartParty}>
                <div className='bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-lg p-2'>Press "ALT + SHIFT + P" to Start Party</div>
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
              {`<ShortcutListener keys="ALT + SHIFT + P" action={handleStartParty} />
const handleStartParty = () => {
  setIsPartyActive(true);
  toast.success('Party started! 🎉');
  
  // Stop party after 3 seconds
  setTimeout(() => setIsPartyActive(false), 3000);
};

// Confetti component with canvas animation
const Confetti = ({ isActive }) => {
  // Canvas confetti implementation
  // Creates colorful particles with physics
};`}
            </DemoCodeBlock>
          </div>
        )}
      </Card>
    </>
  );
}

export default StartParty;
