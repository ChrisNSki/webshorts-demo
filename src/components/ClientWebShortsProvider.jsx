'use client';
import { useEffect, useState } from 'react';
import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

export default function ClientWebShortsProvider({ children, config, className }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return children without the provider during SSR
    return children;
  }

  return (
    <WebShortsProvider config={config} currentPage={pathname} className={className}>
      {children}
      <WebShortsDialog />
      <Toaster position='bottom-right' richColors />
    </WebShortsProvider>
  );
}
