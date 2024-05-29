import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import card2 from "../../src/assets/tarjeta.png";

const Course = () => {
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
    <div className="flex justify-between mt-24 mb-36">
        
      <div id="card" className="lg:w-1/2 flex justify-center -mt-26 mb-8 lg:mb-0 order-2 lg:order-1 relative z-10">
        <animated.img 
          src={card2} 
          alt="hero" 
          className="h-[400px] lg:ml-48 lg:mr-12 w-[600px] rounded-lg" 
          style={{...card2Animation, ...hoverAnimation}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="lg:w-1/2 flex justify-center mt-12 mb-8 lg:mb-0 order-2 lg:order-1 z-1">
        <div className="text-left -ml-48">
          <h2 className="text-4xl font-bold tracking-tight text-rose-600 mb-4 sm:text-5xl font-popping text-[#000000]">¡Practica inglés de por vida!</h2>
          <p className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-primary mb-4 -mt-304">Únete a nuestra gran comunidad</p>
          <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>
          Nuestros graduados podrán seguir practicando su inglés de por vida presentando su Gold Card en cualquiera de nuestros institutos. </p>
          
          {/* Nuevo div para el botón */}
          <div className="mt-8">  
            <button
              className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-600 lg:px-7"
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
            >
            Aprende más
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Course;
