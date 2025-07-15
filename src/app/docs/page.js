'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Docs() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the quick-start page by default
    router.replace('/docs/quick-start');
  }, [router]);

  return null; // This page will redirect, so no content needed
}
