import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
export default function Humburger() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu color="#fff" size={28} />
        </SheetTrigger>
        <SheetContent side={'right'}>
          <ul className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-10 py-10 font-medium ">
            <li>Accueil</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  )
}
