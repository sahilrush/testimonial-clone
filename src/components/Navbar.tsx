"use client";

import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { ModeToggle } from './ui/mode-toggle';

const Navbar = () => {

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link
            href='/'
            className='flex z-40 font-semibold '>
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
           
                <button
                 onClick={()=> signIn()}
                  className={buttonVariants({
                    size: 'sm',
                  })}>
                  Login{' '}
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </button>
              </>
            
              <>
                <Link
                  href='/dashboard'
                  className={buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  })}>
                  Dashboard
                </Link>

    
              </>
              <div className='flex justify-end sticky'>       
                       <ModeToggle />
        </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar