import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import IQBot from "../assets/student.jpg";
import blogsSmall from "../assets/blogsSmall.png";
import { IoMdCheckmark } from "react-icons/io";
import fondo_image from "../assets/fondo_image2.png";



const BodyMetodo = () => {
    const [image, setImage] = useState(IQBot);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1270) {
                setImage(blogsSmall);
            } else {
                setImage(IQBot);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const componentTop = document.querySelector(".image-container").getBoundingClientRect().top;

            if (scrollTop + windowHeight > componentTop) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const imageAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        config: { duration: 1000 }, // Ajusta la duración de la animación según sea necesario
    });

    return (
        <div className="area">
            <div className="content-container py-8 mx-auto relative mb-4 " >
                <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px]" >
                    <div className="max-w-xl -mt-8">
                        <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#b5d3f8] mt-12">Habla inglés en 8 meses con nuestro metodo inovador </h2>
                        <p className="mb-2 max-w-[600px] text-lg lg:text-xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}> IQ English es tu opción para aprender inglés rápido e intensivo</p>
                        <p className="mb-2 mt-12 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Método innovador
                        </p>
                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Aprendizaje personalizado
                        </p>

                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Horarios flexibles
                        </p>

                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Clubes de practica
                        </p>

                        <ul className="flex flex-wrap items-center">
                            <li>
                                <button
                                    className="inline-flex items-center mt-4 ml-4 justify-center rounded-md bg-white px-6 py-3 text-center text-xl lg:text-2xl font-medium text-gray-900  focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 lg:px-7"
                                    onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                                >
                                   Saber más
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2 lg:ml-32">
                        <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 image-container ">
                            <animated.div style={imageAnimation}>
                            <div>
                                    <img src={IQBot} alt="hero" className="max-w-full lg:ml-auto w-[750px] transform transition duration-500 ease-in-out hover:scale-105 rounded-3xl" />
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyMetodo;
