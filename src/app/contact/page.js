import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className='min-h-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='max-w-2xl mx-auto text-center'>
        <h1 className='text-4xl font-bold mb-6'>Contact & Support</h1>
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8'>
          <p className='text-lg text-gray-600 dark:text-gray-300 mb-8'>Need help or have a question? Reach out to us anytime!</p>
          <div className='flex flex-col gap-6 items-center'>
            <a href='mailto:support@ensif.com' className='flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium'>
              <Mail className='w-5 h-5' /> support@ensif.com
            </a>
            <a href='https://discord.gg/HXg4YxJgfX' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-indigo-600 dark:text-indigo-400 hover:underline text-lg font-medium'>
              <Image src='/Discord-Symbol-Blurple.svg' alt='Discord' width={22} height={22} /> Join our Discord
            </a>
            <a href='https://github.com/ChrisNSki/webshorts' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:underline text-lg font-medium'>
              <Image src='/GitHub_Invertocat_Dark.svg' alt='GitHub' width={22} height={22} className='pb-1' /> GitHub Repository
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
