import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className='text-orange-500' />
        </SheetTrigger>
        <SheetContent className='space-y-3'>
            <SheetHeader>
                <SheetTitle>
                    <span>Welcome to DanielEats.com</span>
                </SheetTitle>
                <Separator />
                <SheetDescription className="flex">
                    <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav