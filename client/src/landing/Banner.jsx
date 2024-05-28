import React from 'react';
import cohete from "../assets/cohete2.png";
import { Button } from "@nextui-org/react";
import "../index.css"; // Archivo CSS para estilos adicionales

const Banner = () => {
  return (
    <div id="sticky-banner" tabIndex="-1" className="fixed top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 mb-8">
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400 banner-text">
          <img src={cohete} alt="Rocket icon" className="w-6 h-6 mr-3" />
          <span className="animated-text">
            <span>Promocion</span> <span className="sale">Limitada</span>  60% OFF para que seas bilingüe este 2024
          </span>
          <Button color="primary" size='sm' variant='shadow' className="ml-4">
           Empieza hoy
          </Button>  
        </p>
      </div>
      <div className="flex items-center"></div>
    </div>
  );
}

export default Banner;
