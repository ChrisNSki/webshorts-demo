'use client';
import { useEffect, useState } from 'react';
import { ShortcutListener } from '@chrisnski/webshorts';

export default function ClientShortcutListener({ children, keys, action, shortName, description }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return the children without the ShortcutListener wrapper during SSR
    return children;
  }

  return (
    <ShortcutListener keys={keys} action={action} shortName={shortName} description={description}>
      {children}
    </ShortcutListener>
  );
}
