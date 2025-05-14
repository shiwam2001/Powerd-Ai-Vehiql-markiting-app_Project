import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react'


const Header = async ({ isAdminPage = false }) => {

  const isAdmin = true


  return (
    <>
      <header className='fixed top-0 w-full bg-white/80 blackdrop-blur-md z-50  border-b'>
        <nav className='mx-auto py-3 gap-4 px-4 flex justify-between items-center'>
          <Link href={!isAdminPage ? "/admin" : "/"} className='flex' >
            <Image
              src={"/logo.png"}
              alt='Vehiql Logo'
              width={200}
              height={60}
              className='h-12 w-auto object-contain'
            />
            {
              isAdminPage && (
                <span className='text-2xl font-extralight'>Admin</span>
              )
            }
          </Link>

          <div className='flex items-center space-x-3.5 '>

            {isAdminPage ? (
                <Link href='/'>
                <Button variant='outline' className="flex items-center gap-2">
                  <ArrowLeft size={18} />

                  <span className='hidden md:inline'>Back to app</span>
                </Button>

              </Link>

            ):(<SignedIn>

              <Link href='/saved-cars'>
                <Button>
                  <Heart size={18} />

                  <span className='hidden md:inline'>Saved Cars</span>
                </Button>

              </Link>

              {!isAdmin ? (<Link href='/reservation'>
                <Button variant="outline">
                  <CarFront size={18} />
                  <span className='hidden md:inline'> My Reservation</span>
                </Button>

              </Link>) :
                (
                  <Link href='/admin'>
                    <Button variant="outline">
                      <Layout size={18} />
                      <span className='hidden md:inline'>Admin Portal</span>
                    </Button>

                  </Link>)}
            </SignedIn>)}

            <SignedOut>
              <SignInButton>
                <Button veriant="outline">Login</Button>
              </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                appearance={
                  {elements:{
                    avatarBox:"w-10 h-10"
                  }}
                }
                />
                  
                
              </SignedIn>
          </div>

        </nav>

      </header>
    </>


  )
}

export default Header
