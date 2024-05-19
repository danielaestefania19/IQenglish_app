import image1 from "../assets/groups.png";
import image2 from "../assets/users.png";
import visual from "../assets/visual.png";
import "../css/Tailwind.css";
import { useTransition, animated, config } from 'react-spring';
import React, { useState, useEffect } from 'react';

const issues = [
  { id: 1, image: image1, name: "Aprende inglés a distancia", description: "Utilizamos las herramientas tecnológicas posibles para segurar tu aprenzaje a la distancia." },
  { id: 2, image: image2, name: "Grupos pequeños", description: "Manejamos un máximo de 6 alumnos por grupo en el instituto y 4 alumnos por sala en línea." },
  { id: 3, image: visual, name: "Sistema audiovisual", description: "Aprenderás inglés de la misma forma que aprendiste español: observando, escuchando y repitiendo." },
];

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const componentTop = document.getElementById('card').offsetTop;

      // Verifica si el componente es visible en la ventana
      if (scrollTop + windowHeight > componentTop && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Configura las transiciones
  const transitions = useTransition(isVisible ? issues : [], {
    from: { opacity: 0, transform: 'translateY(100px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    config: config.molasses,
  });

  return (
    <section id="card" className="w-full h-full pb-10 pt-32 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-16">
              <span className="mb-2 block text-lg font-semibold text-primary font-popping">
                Beneficios exclusivos
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark text-dark sm:text-4xl md:text-[40px] font-popping">
                Por qué estudiar en IQ English
              </h2>
              <p className="text-xl text-dark dark:text-dark-6 font-popping">
                Somos una escuela de inglés con más de 36 años de experiencia en la enseñansa del idioma ingles
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {transitions((props, item) => (
            <animated.div key={item.id} style={props} className="m-6 flex flex-col">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-32 mb-3 rounded-full mt-12"  /* Añadir margin-top aquí */
                  src={item.image}
                  alt={`${item.name} image`}
                />
                  <h5 className="mb-1 text-xl font-medium text-black dark:text-white">{item.name}</h5>
                  <span className="text-lg text-gray-800 text-center dark:text-gray-400">{item.description}</span>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Card;
