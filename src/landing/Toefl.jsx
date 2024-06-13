import { Card, CardBody } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import card2 from "../../src/assets/toefl.png";

const Toefl = () => {

    const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const componentTop = document.querySelector(".image-container").getBoundingClientRect().top;

      if (scrollTop + windowHeight > componentTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const card2Animation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 100 },
  });

  const hoverAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-primary mt-8">
      <div id="card" className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 relative z-10 lg:z-1 -ml-48">
        <animated.img 
          src={card2} 
          alt="hero" 
          className="-mt-14 h-[80px] w-[300px] lg:h-[150px] lg:w-[450px] rounded-lg lg:ml-48 mt-6 ml-48 " 
          style={{...card2Animation, ...hoverAnimation}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0 z-10 lg:z-1 -mt-12">
        <div className="text-center lg:text-left px-4 lg:px-0 mt-16 lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-4xl font-bold tracking-tight text-rose-600 mb-4 sm:text-5xl mt-4 font-popping text-[#c9e9fc] ">¡Certificate con Nosotros!</h2>
          <p className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#8bd3f8] mb-4">
            Únete hoy y comienza tu camino<br/>hacia una persona bilingüe.
          </p>
          <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-white" style={{ letterSpacing: '-0.01em' }}>
            Prepárate para alcanzar tus metas de hablar inglés con nuestra preparación TOEFL de primer nivel.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              className="inline-flex items-center mb-12 justify-center rounded-md bg-white px-6 py-3 text-center text-xl lg:text-2xl font-medium text-gray-900 focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 lg:px-7"
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
            >
              Aprende más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toefl;
