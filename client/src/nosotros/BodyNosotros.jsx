import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Body1 from "../assets/Body1.png";
import blogsSmall from "../assets/blogsSmall.png";
import fondo_image from "../assets/fondo_image2.png";



const BodyNosotros = () => {
    const [image, setImage] = useState(Body1);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1270) {
                setImage(blogsSmall);
            } else {
                setImage(Body1);
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
        <div className="bg-primary w-full h-80vh relative z-0">
            <div className="content-container py-6 mx-auto relative mb-6 " >
                <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[200px]" >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-white mt-12">Somos una escuela con más de 36 años de experiencia</h2>
                    </div>
                    <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2 lg:ml-48">
                        <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 image-container">
                            <animated.div style={imageAnimation}>
                                <div style={{ backgroundImage: `url(${fondo_image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                                    <img src={Body1} alt="hero" className="max-w-full lg:ml-auto w-[750px] transform transition duration-500 ease-in-out hover:scale-105" />
                                </div>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyNosotros;
