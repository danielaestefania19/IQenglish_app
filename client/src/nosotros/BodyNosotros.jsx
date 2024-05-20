import foto1 from "../assets/image-1.jpg";
import foto2 from "../assets/image-2.jpg";
import foto3 from "../assets/image-3.jpg";

const BodyNosotros = () => {


    return (

        <div className="area">
            <div className="content-container py-8 mx-auto relative mb-4 " >
                <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px]" >
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-white -mt-8">Somos una reconocida escuela de inglés con más de 36 años de experiencia en la enseñanza.</h2>
                        <p className="mb-2 max-w-[600px] text-lg lg:text-xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}> Comprometidos con brindar una educación de calidad y adaptada a las necesidades de nuestros estudiantes.</p>
                       
                        <ul className="flex flex-wrap items-center">
                            <li>
                                <button
                                    className="inline-flex items-center mt-12 ml-4 justify-center rounded-md bg-white px-6 py-3 text-center text-xl lg:text-2xl font-medium text-gray-900  focus:outline-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 lg:px-7"
                                    onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Saber más
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2 lg:ml-48">
                        <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 image-container">

                            <div className="w-full px-3 sm:px-4 xl:w-[300px]">
                                <div className="py-3 sm:py-4">
                                    <img
                                        src={foto1}
                                        alt=""
                                        className="w-full rounded-3xl"
                                    />
                                </div>
                                <div className="py-3 sm:py-4">
                                    <img
                                        src={foto2}
                                        alt=""
                                        className="w-full rounded-3xl"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:px-4 xl:w-[280px]">
                                <div className="relative z-10 my-4">
                                    <img
                                        src={foto3}
                                        alt=""
                                        className="w-full rounded-3xl"
                                    />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BodyNosotros;
