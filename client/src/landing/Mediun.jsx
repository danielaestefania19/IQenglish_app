import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import IQBot from "../assets/IQBot.png";
import aprendizaje from "../assets/icons/cerebro.png";
import horario from "../assets/icons/reloj.png"
import atencion from "../assets/icons/internet.png";
import certificacion from "../assets/icons/certificado.png";
import poliza from "../assets/icons/garantia.png";
import card from "../assets/icons/card.png";
import fondo from "../assets/fondo.png";


const Mediun = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const componentTop = document.querySelector(".image-container").getBoundingClientRect().top;

      // Verifica si el componente es visible en la ventana
      if (scrollTop + windowHeight > componentTop && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  // Define la animación para la imagen IQBot
  const iqBotAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Ajusta la duración de la animación según sea necesario
  });

  return (
    <div className="flex justify-between">
      <div className="w-[40vw] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondo})`, height: "15cm" }}>
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 relative z-10">
          {/* Aplica la animación de difuminado a la imagen IQBot */}
          <animated.img src={IQBot} alt="hero" className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110" style={iqBotAnimation} />
        </div>
      </div>
      <div className="w-[60vw] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold tracking-tight text-rose-600 sm:text-4xl font-popping mt-[2px]">
          Aprende ingles  solamente en 8 a 12 meses
        </h1>
        <div className="flex flex-col mt-12 space-y-4">
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={aprendizaje} alt="Icono 1" className="w-8 h-8 mr-2" /> Aprendizaje Integral
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={horario} alt="Icono 2" className="w-8 h-8 mr-2" /> Horarios Personalizados
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={atencion} alt="Icono 3" className="w-8 h-8 mr-2" /> Atencion Online
          </p>
          
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={certificacion} alt="Icono 4" className="w-8 h-8 mr-2" /> Certificacion Toefl
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={poliza} alt="Icono 5" className="w-8 h-8 mr-2" /> Poliza de aprendizaje asegurada
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={card} alt="Icono 4" className="w-8 h-8 mr-2" /> Aprendizaje de por vida
          </p>
        </div>
      </div>


    </div>
  )
}

export default Mediun;
