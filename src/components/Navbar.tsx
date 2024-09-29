"use client";

import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button, buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ModeToggle } from './ui/mode-toggle';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


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
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>SR</AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="#" className="block w-full text-left" prefetch={false}>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant="outline" className="block w-full text-left">
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
