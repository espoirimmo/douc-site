import React from 'react'

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH IMMO DOUCOURE
        </p>
        <h1 className="text-4xl">
          BIENVENU SUR LE NOUVEAU SITE IMMO.DOUCOURE.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-3xl">GERER ET GAGNER DU TEMPS AVEC IMMO.DOUC</p>
        </div>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mb-3 mt-6 mx-auto py-3 text-black">
          {' '}
          +223 66 29 26 38
        </button>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
