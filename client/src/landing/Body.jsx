import { useState, useEffect } from "react";
import blogs from "../assets/blogs.png";
import blogsSmall from "../assets/blogsSmall.png"; // Nueva imagen para pantallas pequeñas
import Contacto from "./Contacto.jsx";
const Body = () => {
  const [image, setImage] = useState(blogs);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImage(blogsSmall);
      } else {
        setImage(blogs);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a handleResize cuando el componente se monta para establecer la imagen inicial

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Vacío para que solo se ejecute una vez al montar el componente

  return (
    <div className="py-5 mx-auto  bg-gradient-to-b from-white to-blue-50 "> 
      <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[150px]">
        {/* Div izquierdo */}
        <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
          <img src={image} alt="hero" className="max-w-full lg:ml-auto w-[350px] transform transition duration-500 ease-in-out hover:scale-105" />
        </div>
        {/* Div derecho */}
        <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-4 order-1 lg:order-2">
          <div className="w-full lg:w-6/6">
            <p className="mb-1 text-4xl lg:text-6xl font-bold leading-[1.208] text-dark dark:text-white text-primary sm:text-[32px] lg:text-[48px] xl:text-[140px] font-montserrat" style={{ letterSpacing: '-0.05em' }}>
              LA MEJOR
            </p>

            <h1 className="mb-2 text-2xl lg:text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-[24px] lg:text-[40px] xl:text-4xl font-montserrat" style={{ letterSpacing: '-0.02em' }}>
              FORMA DE APRENDER ES CON NOSOTROS
            </h1>
            <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-montserrat" style={{ letterSpacing: '-0.01em' }}>
              Con IQenglish, los estudiantes prosperan juntos. Los estudiantes pueden adaptar perfectamente su vida personal para aprender inglés en el día a día.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <button
                  className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-dark lg:px-7"
                  onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                >
                  Comenzar
                </button>
              </li>
              <li>
                <Contacto /> {/* Renderizar el componente Contacto aquí */}
                <a />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;