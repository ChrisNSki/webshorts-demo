// components/WebShortsProviderWrapper.jsx (Client Component)
'use client';
import { useEffect, useState } from 'react';

import { WebShortsProvider, WebShortsDialog } from '@chrisnski/webshorts';
import webshortsConfig from '../../../webshorts.config';

export default function WebShortsProviderWrapper({ children, className }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <WebShortsProvider config={webshortsConfig} className={className}>
      {children}
      <WebShortsDialog />
    </WebShortsProvider>
  );
}
