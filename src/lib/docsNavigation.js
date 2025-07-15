// Navigation mapping for docs pages
export const docsPageMap = {
  'quick-start': '/docs/quick-start',
  features: '/docs/features',
  compatibility: '/docs/compatibility',
  license: '/docs/license',
  'configuring-webshorts': '/docs/configuring-webshorts',
  'webshorts-provider': '/docs/webshorts-provider',
  'shortcut-listener': '/docs/shortcut-listener',
  'webshorts-dialog': '/docs/webshorts-dialog',
  'custom-styling': '/docs/custom-styling',
  'use-shortcuts-hooks': '/docs/use-shortcuts-hooks',
};

// Page titles for navigation
export const pageTitles = {
  'quick-start': 'Quick Start',
  features: 'Features',
  compatibility: 'Compatibility',
  license: 'License',
  'configuring-webshorts': 'Configuring WebShorts',
  'webshorts-provider': 'WebShorts Provider',
  'shortcut-listener': 'Shortcut Listener',
  'webshorts-dialog': 'WebShorts Dialog',
  'custom-styling': 'Custom Styling',
  'use-shortcuts-hooks': 'useShortcuts Hooks',
};

// Page order for navigation
export const pageOrder = ['quick-start', 'features', 'compatibility', 'license', 'configuring-webshorts', 'webshorts-provider', 'shortcut-listener', 'webshorts-dialog', 'custom-styling', 'use-shortcuts-hooks'];

// Utility function to navigate to a docs page
export const navigateToDocsPage = (section) => {
  const targetPath = docsPageMap[section];
  if (targetPath && targetPath !== window.location.pathname) {
    window.location.href = targetPath;
  }
};

// Utility function to get previous page
export const getPreviousPage = (currentSection) => {
  const currentIndex = pageOrder.indexOf(currentSection);
  if (currentIndex > 0) {
    return pageOrder[currentIndex - 1];
  }
  return null;
};

// Utility function to get next page
export const getNextPage = (currentSection) => {
  const currentIndex = pageOrder.indexOf(currentSection);
  if (currentIndex < pageOrder.length - 1) {
    return pageOrder[currentIndex + 1];
  }
  return null;
};
