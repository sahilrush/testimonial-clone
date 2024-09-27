"use client";

import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button, buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ModeToggle } from './ui/mode-toggle';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            <span>Reviwely</span>
          </Link>

          <div className='hidden items-center space-x-4 sm:flex'>
            <>
              <Link
                href='/price'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Pricing
              </Link>

              {session.data?.user ? (
                <button
                  onClick={() => {
                    signOut(); 
                  }}
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  SignOut
                  {' '}
                </button>
              ) : (
                <button
                onClick={() => {
                  signIn();
                }}
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  SignIn
                </button>
              )}
            </>
            <div className='flex justify-end sticky'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
