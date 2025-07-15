// components/WebShortsProviderWrapper.jsx (Client Component)
'use client';
import { useEffect, useState } from 'react';

import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import webshortsConfig from '../../../webshorts.config';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

export default function WebShortsProviderWrapper({ children, className }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <WebShortsProvider config={webshortsConfig} currentPage={pathname} className={className}>
      {children}
      <WebShortsDialog />
      <Toaster position='bottom-right' richColors />
    </WebShortsProvider>
  );
}
