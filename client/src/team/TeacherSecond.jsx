import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import workshops from "../assets/icons/talleres.png";
import atencion from "../assets/icons/internet.png";
import clases from "../assets/icons/clases.png";



const TeacherSecond = () => {
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
    <div className="flex justify-between mt-32 mb-4">
        
      <div id="card" className="lg:w-1/2 flex justify-center -mt-26 mb-8 lg:mb-0 order-2 lg:order-1 relative z-10">
        <animated.img 
          src="https://www.openenglish.com/wp-content/uploads/2022/05/prof_character2__desktop_x1.png" 
          alt="hero" 
          className="h-[500px] lg:ml-48 lg:-mr-12 w-[500px] rounded-lg" 
          style={{...card2Animation, ...hoverAnimation}}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="lg:w-1/2 flex justify-center mt-8 mb-8 lg:mb-0 order-2 lg:order-1 z-1">
        <div className="text-left -ml-48">
        <p className="mb-4 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-primary" style={{ letterSpacing: '-0.01em' }}>¡Nunca estarás solo! Nuestros instructores expertos te acompañarán en tu proceso</p>

        {/* Nuevo texto con un tamaño de fuente más pequeño */}
        <p className="mb-4 max-w-[600px] text-lg lg:text-xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>Tendras la posibilidad de interactuar con nuestros instructores en diferentes espacios</p>
        
        <div className="flex flex-col mt-12 space-y-4">
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={clases} alt="Icono 1" className="w-8 h-8 mr-2" /> Clases presenciales
            </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={workshops} alt="Icono 2" className="w-8 h-8 mr-2" /> Actividades especiales
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping transform transition duration-500 ease-in-out hover:scale-105">
            <img src={atencion} alt="Icono 3" className="w-8 h-8 mr-2" /> Clases Online
          </p>
        </div>
          
          {/* Nuevo div para el botón */}
          <div className="mt-12">
            <button
              className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-600 lg:px-7"
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
            >
           ¡Conoce más!
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default TeacherSecond;
