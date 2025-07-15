//
// WebShorts Configuration Template
//

const webShortsConfig = {
  WEBSHORTS_OPTIONS: {
    debug: false, // Enable debug toast notifications
    showDescriptions: true, // Show descriptions in help dialog
    helpDialogColumns: 2, // Number of columns in help dialog
    dialogWidth: 900, // Help dialog width (px)
    dialogHeight: 700, // Help dialog height (px)
  },

  // Global shortcuts (work on all pages)
  '*': [
    {
      keys: 'SHIFT + ?',
      shortName: 'Show Shortcuts',
      description: 'Open the shortcuts help dialog',
      action: () => {
        // This is handled automatically by WebShorts
        console.log('Help dialog opened');
      },
    },
    {
      keys: 'ALT + H',
      shortName: 'Home Page',
      description: 'Navigate to the home page',
      action: () => {
        window.location.href = '/';
      },
    },
  ],
  // Page-specific shortcuts
  '/': [
    {
      keys: 'ALT + SHIFT + W',
      shortName: 'Show WebShorts Info',
      description: 'Displays WebShorts author information',
      action: () => {
        window.alert('WebShorts by Chris Narowski');
      },
      hiddenNotes: 'This is here just for example purposes, you can remove it, or leave it for attribution purposes.',
    },
    {
      keys: 'ALT + T',
      shortName: 'Test Shortcut',
      description: 'Test shortcut',
      action: () => {
        window.alert('Your test worked!');
      },
    },
  ],
  '/settings': [
    {
      keys: 'CTRL + S',
      shortName: 'Save Settings',
      description: 'Save current settings',
      action: () => {
        // Implement your settings save logic here
        console.log('Settings saved');
      },
    },
  ],
};

export default webShortsConfig;
