'use client';

import { navigateToDocsPage } from '@/lib/docsNavigation';

export default function DocsLink({ to, children, className = '' }) {
  const handleClick = () => {
    navigateToDocsPage(to);
  };

  return (
    <button onClick={handleClick} className={`underline font-medium hover:opacity-80 transition-opacity ${className}`}>
      {children}
    </button>
  );
}
