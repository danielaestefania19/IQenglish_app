import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import blogs from "../assets/blogs.png";
import blogsSmall from "../assets/blogsSmall.png";
import Contacto from "./Contacto.jsx";
import fondo_image from "../assets/fondo_image.png";


const Body = () => {
    const [image, setImage] = useState(blogs);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1270) {
                setImage(blogsSmall);
            } else {
                setImage(blogs);
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
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="content-container py-8 mx-auto relative " >
                <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px]" >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#b5d3f8]">Construyamos tu futuro aprendiendo inglés.</h2>
                        <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}> Domina el inglés y abre tus horizontes. El idioma más hablado del mundo te lleva a nuevas culturas y oportunidades. ¡Haz del inglés tu llave al mundo!</p>
                        <ul className="flex flex-wrap items-center">
                            <li>
                                <button
                                    className="inline-flex items-center mt-1 justify-center rounded-md bg-[#b5d3f8] px-6 py-3 text-center text-xl lg:text-2xl font-medium text-black hover:bg-blue-200 lg:px-7"
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
                    <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2 lg:ml-48">
                        <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 image-container">
                            <animated.div style={imageAnimation}>
                                <div style={{ backgroundImage: `url(${fondo_image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                                    <img src={image} alt="hero" className="max-w-full lg:ml-auto w-[350px] transform transition duration-500 ease-in-out hover:scale-105" />
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
