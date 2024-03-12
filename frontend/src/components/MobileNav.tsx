import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const MobileNav = () => {
    const { loginWithRedirect } = useAuth0()
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500' />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetHeader>
                <SheetTitle>
                    <span>Welcome to Daniel Eats</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button 
                        className="flex-1 font-bold bg-orange-500"  
                        onClick={async () => await loginWithRedirect()}
                    >
                        Log In
                    </Button>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav