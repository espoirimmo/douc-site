import React from 'react'

const Navbar = () => {
  
  return (
    <div className='flex justify-between text-4xl items-center h-24 max-w-[1240px ] text-xl text-[#fcfdfc] font-bold'>
       <h1 className="w-full text-3xl  font-bold text-[#00df9a]">IMMO.DOUC</h1>
        <ul className='flex'>
            <li className='p-10'>Accueil</li>
            <li className='p-10'>About</li>
            <li className='p-10'>Services</li>
            <li className='p-10'>Contact</li>
        </ul>
        
    </div>
  )
}

export default Navbar