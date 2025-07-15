// components/WebShortsProviderWrapper.jsx (Client Component)
'use client';
import ClientWebShortsProvider from '@/components/ClientWebShortsProvider';
import webshortsConfig from '../../../webshorts.config';

export default function WebShortsProviderWrapper({ children, className }) {
  return (
    <ClientWebShortsProvider config={webshortsConfig} className={className}>
      {children}
    </ClientWebShortsProvider>
  );
}
