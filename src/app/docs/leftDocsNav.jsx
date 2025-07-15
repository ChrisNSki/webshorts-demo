import React from 'react';
import { Button } from '@/components/ui/button';

export default function LeftDocsNav({ activeSection, handleSectionClick }) {
  const handleClick = (section) => {
    handleSectionClick(section);
  };

  return (
    <div className='flex flex-col w-[225px] justify-start gap-2 border-r-2 border-gray-200 min-h-full'>
      <Button variant='ghost' className={`flex justify-start w-full cursor-pointer ${activeSection === 'quick-start' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('quick-start')}>
        <span className='text-sm'>Quick Start (Installation)</span>
      </Button>
      <Button variant='ghost' className={`flex justify-start w-full cursor-pointer ${activeSection === 'features' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('features')}>
        <span className='text-sm'>Features</span>
      </Button>
      <div className='flex flex-col gap-0 ml-3'>
        <Button variant='ghost' className={`flex justify-start w-full cursor-pointer py-0 my-0 border-0 ${activeSection === 'compatibility' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('compatibility')}>
          <div className='flex text-sm pl-2 py-0 my-0 border-l-2 h-full border-gray-200 items-center'>
            <span>Compatibility</span>
          </div>
        </Button>
        <Button variant='ghost' className={`flex justify-start w-full cursor-pointer py-0 my-0 border-0 ${activeSection === 'license' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('license')}>
          <div className='flex text-sm pl-2 py-0 my-0 border-l-2 h-full border-gray-200 items-center'>
            <span>License</span>
          </div>
        </Button>
      </div>
      <Button variant='ghost' className={`flex justify-start w-full cursor-pointer ${activeSection === 'configuring-webshorts' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('configuring-webshorts')}>
        <span className='text-sm'>Configuring WebShorts</span>
      </Button>
      <div className='flex flex-col gap-0 ml-3'>
        <Button variant='ghost' className={`flex justify-start w-full cursor-pointer py-0 my-0 border-0 ${activeSection === 'webshorts-provider' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('webshorts-provider')}>
          <div className='flex text-sm pl-2 py-0 my-0 border-l-2 h-full border-gray-200 items-center'>
            <span>WebShorts Provider</span>
          </div>
        </Button>
        <Button variant='ghost' className={`flex justify-start w-full cursor-pointer py-0 my-0 border-0 ${activeSection === 'shortcut-listener' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('shortcut-listener')}>
          <div className='flex text-sm pl-2 py-0 my-0 border-l-2 h-full border-gray-200 items-center'>
            <span>Shortcut Listener</span>
          </div>
        </Button>
        <Button variant='ghost' className={`flex justify-start w-full cursor-pointer py-0 my-0 border-0 ${activeSection === 'webshorts-dialog' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('webshorts-dialog')}>
          <div className='flex text-sm pl-2 py-0 my-0 border-l-2 h-full border-gray-200 items-center'>
            <span>WebShorts Dialog</span>
          </div>
        </Button>
      </div>
      <Button variant='ghost' className={`flex justify-start w-full cursor-pointer ${activeSection === 'custom-styling' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('custom-styling')}>
        <span className='text-sm'>Custom Styling</span>
      </Button>
      <Button variant='ghost' className={`flex justify-start w-full cursor-pointer ${activeSection === 'use-shortcuts-hooks' ? 'bg-gray-100 font-bold' : ''}`} onClick={() => handleClick('use-shortcuts-hooks')}>
        useShortcuts Hooks
      </Button>
    </div>
  );
}
