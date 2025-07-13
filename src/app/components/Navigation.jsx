import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <div className='flex justify-between items-center py-7'>
      <div id='left-top-bar' className='flex flex-row justify-center items-center'>
        <div id='logo'>
          <Image src='/WebShorts.svg' alt='WebShorts Logo' width={50} height={50} className='bg-transparent drop-shadow-xl mr-12' />
        </div>
        <div id='top-bar-links' className='flex flex-row justify-center items-center gap-2 text-lg font-semibold'>
          <Link href='/'>
            <Button variant='ghost' className='font-semibold text-lg py-5 cursor-pointer'>
              Home
            </Button>
          </Link>
          <Link href='/about'>
            <Button variant='ghost' className='font-semibold text-lg py-5 cursor-pointer'>
              About
            </Button>
          </Link>
          <Link href='/demo'>
            <Button variant='ghost' className='font-semibold text-lg py-5 cursor-pointer'>
              Demo
            </Button>
          </Link>
          <Link href='/contact'>
            <Button variant='ghost' className='font-semibold text-lg py-5 cursor-pointer'>
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <div id='right-top-bar' className='flex flex-row justify-center items-center gap-4'>
        <Link href='https://discord.gg/HXg4YxJgfX'>
          <Button variant='outline' className='font-semibold text-lg py-6 px-6 cursor-pointer bg-[#1f1f1f] text-white hover:bg-[#1f1f1f]/80 hover:text-white'>
            <Image src='/Discord-Symbol-Blurple.svg' alt='Discord Logo' width={25} height={25} />
            Discord
          </Button>
        </Link>
        <Link href='https://github.com/ChrisNSki/webshorts' className='cursor-pointer'>
          <Button variant='outline' className='font-semibold text-lg py-6 px-6 cursor-pointer'>
            <Image src='/GitHub_Invertocat_Dark.svg' alt='GitHub Logo' width={25} height={25} />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}
