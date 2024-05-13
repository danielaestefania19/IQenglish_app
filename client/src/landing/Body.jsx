import { useState, useEffect } from "react";
import blogs from "../assets/blogs.png";
import blogsSmall from "../assets/blogsSmall.png";
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
            <div className="content-container py-8 mx-auto relative">
                <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px]">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#b5d3f8]">Construye tu futuro aprendiendo ingles.</h2>
                        <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}> Domina el inglés y abre tus horizontes. El idioma más hablado del mundo te lleva a nuevas culturas y oportunidades. ¡Haz del inglés tu llave al mundo!</p>
                        <ul className="flex flex-wrap items-center">
                            <li>
                                <button
                                    className="inline-flex items-center mt-1 justify-center rounded-md bg-[#b5d3f8] px-6 py-3 text-center text-xl lg:text-2xl font-medium text-black hover:bg-blue-dark lg:px-7"
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
                    <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2">
                        <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
                            <img src={image} alt="hero" className="max-w-full lg:ml-auto w-[350px] transform transition duration-500 ease-in-out hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body; 