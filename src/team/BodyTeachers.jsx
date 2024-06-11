import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import blogs from "../assets/computer2.png";
import blogsSmall from "../assets/computer2.png";
import fondo_image from "../assets/fondo_image2.png";
import { HiEmojiHappy } from "react-icons/hi";
import { GiStairsGoal } from "react-icons/gi";
import { TbVocabulary } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

const BodyTeachers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1570);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1570);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const componentTop = document.querySelector(".image-container").getBoundingClientRect().top;

      if (scrollTop + windowHeight > componentTop) {
        setIsVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
    config: { duration: 1000 },
  });

  return (
    <div className="bg-primary">
      {isSmallScreen ? (
        <div className="content-container py-8 mx-auto flex flex-col ">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight text-rose-600 sm:text-3xl font-popping text-[#b5d3f8] xs-4  ml-8 sm:ml-16 md:ml-64 lg:ml-82">
              Habla inglés con fluidez y de forma correcta con los mejores instructores
            </h2>
            <p className="mb-4 text-lg lg:text-xl dark:text-dark-6 font-popping text-[#F0F4F9]  ml-8 sm:ml-16 md:ml-64 lg:ml-82" style={{ letterSpacing: '-0.01em' }}>
              Aprende a tu ritmo con excelentes instructores capacitados para enseñarte de la mejor manera. Con nuestro método, tendrás una inmersión total en el idioma.
            </p>
            <div className="flex flex-col justify-center items-center mx-auto max-w-[800px]">
              {/* Parejas de elementos */}
              <div className="w-full md:w-1/2 mb-4 px-4 ml-8 sm:ml-16 md:ml-64 lg:ml-82">
                <p className="text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                  <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                  Perfecciona tu pronunciación
                  <FaStar className="inline-block ml-1" />
                </p>
              </div>
              <div className="w-full md:w-1/2 mb-4 px-4 ml-8 sm:ml-16 md:ml-64 lg:ml-82">
                <p className="text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                  <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                  Mejora tu gramática
                  <HiEmojiHappy className="inline-block ml-1" />
                </p>
              </div>
              <div className="w-full md:w-1/2 mb-4 px-4 ml-8 sm:ml-16 md:ml-64 lg:ml-82">
                <p className="text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                  <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                  Amplia tu vocabulario
                  <TbVocabulary className="inline-block ml-1" />
                </p>
              </div>
              <div className="w-full md:w-1/2 mb-4 px-4 ml-8 sm:ml-16 md:ml-64 lg:ml-82">
                <p className="text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                  <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                  Cumple tu meta de hablar ingles
                  <GiStairsGoal className="inline-block ml-1" />
                </p>
              </div>
            </div>
            <ul className="flex justify-center">
              <li>
                <button
                  className="inline-flex items-center mt-4 mr-32 sm:mr-64 md:-mr-32 justify-center rounded-md bg-white px-6 py-3 text-center text-xl lg:text-2xl font-medium text-gray-900  focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:">
                  Saber más
                </button>
              </li>
            </ul>
          </div>
          <animated.div style={imageAnimation} className="w-full flex justify-center mt-4 image-container">
            <div style={{ backgroundImage: `url(${fondo_image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
              <img src={blogsSmall} alt="hero" className="max-w-full w-[450px] transform transition duration-500 ease-in-out hover:scale-105" />
            </div>
          </animated.div>
        </div>

      ) : (
        <div className="content-container py-8 mx-auto relative">
          <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px]">
            <div className="max-w-xl -mt-8">
              <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#b5d3f8]">
              Habla inglés con fluidez y de forma correcta con los mejores instructores
              </h2>
              <p className="mb-2 max-w-[600px] text-md lg:text-2xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}>
              Aprende a tu ritmo con excelentes instructores capacitados para enseñarte de la mejor manera. Con nuestro método, tendrás una inmersión total en el idioma.
              </p>
                <p className="mb-2 mt-12 ml-4 max-w-[600px] lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Perfecciona tu pronunciación
                            <FaStar className="inline-block ml-1" />
                        </p>
                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-[#F0F4F9] lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Mejora tu gramática
                            <HiEmojiHappy className="inline-block ml-1" />
                        </p>
                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-[#F0F4F9]lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Amplia tu vocabulario
                            <TbVocabulary className="inline-block ml-1" />
                        </p>
                        <p className="mb-6 mt-4 ml-4 max-w-[600px] text-[#F0F4F9] lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
                            <span className="inline-block bg-black rounded-full h-2 w-2 mr-2"></span>
                            Cumple tu meta de hablar ingles
                            <GiStairsGoal className="inline-block ml-1" />
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
            <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2 lg:ml-48">
              <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 image-container">
                <animated.div style={imageAnimation}>
                  <div style={{ backgroundImage: `url(${fondo_image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <img src={blogs} alt="hero" className="max-w-full lg:ml-auto w-[650px] transform transition duration-500 ease-in-out hover:scale-105" />
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyTeachers;
