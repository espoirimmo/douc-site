import React from 'react'
import Humburger from './humburger'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 mx-auto max-w-[1240px] text-xl text-[#fcfdfc] font-bold px-4 lg:px-10">
      <h1 className="w-full text-xl lg:text-3xl  font-bold text-[#00df9a]">
        IMMO.DOUC
      </h1>
      <Humburger />
      <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-10 py-10">
        <li>Accueil</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
