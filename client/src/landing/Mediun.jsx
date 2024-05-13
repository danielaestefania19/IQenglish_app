import IQBot from "../assets/IQBot.png";
import React from 'react';
import fondo from "../assets/fondo.png";

const Mediun = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[40vw] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondo})`, height: '15cm' }}>
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 relative z-10">
          <img src={IQBot} alt="hero" className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110" />
        </div>
      </div>

      <div className="w-[60vw] flex justify-center flex-col mt-12">
        <h1 className="text-2xl font-bold tracking-tight text-rose-600 sm:text-4xl font-popping" > Aprende ingles en en 8 a 12 meses</h1>
        <p className="text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping" >Aprende ingles en en 8 a 12 meses</p>
        <p className="text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping" >  Aprende ingles en en 8 a 12 meses</p>
        <p className="text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping" > Aprende ingles en en 8 a 12 meses </p>
        <p className="text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping" > Aprende ingles en en 8 a 12 meses</p>
        <p className="text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping" > Aprende ingles en en 8 a 12 meses</p>
      </div>
    </div>
  )
}

export default Mediun;
