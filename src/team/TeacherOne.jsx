import student from "../../src/assets/student1.png"
import { Card, CardBody } from "@nextui-org/react";
import teacherone from "../assets/teacherone.jpeg"
const TeacherOne = () => {
    return (
        <div className="content-container py-8 mx-auto h-auto lg:h-[500px] mb-64 ml-16">
            <div className="flex flex-col lg:flex-row items-center lg:ml-[230px] mt-10">

            <div className="max-w-xl">
    <p className="mb-8 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-primary" style={{ letterSpacing: '-0.01em' }}>Estudiar con nuestros instructores te va a permitir desarrollar al máximo cada una de las áreas del inglés.</p>

    <div className="mb-6 mt-4 ml-4 max-w-[600px] transform transition duration-500 ease-in-out hover:scale-105 flex items-center"> {/* Añade un margen inferior a esta div */}
        <span className="inline-block bg-primary rounded-full h-2 w-3 mr-2"></span>
        <Card>
            <CardBody>
                <p className="text-base lg:text-lg dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>Nuestros instructores ofrecen un apoyo personalizado para que alcances tus metas en el aprendizaje del inglés.</p>
            </CardBody>
        </Card>
    </div>

    <div className="mb-6 mt-4 ml-4 max-w-[600px] transform transition duration-500 ease-in-out hover:scale-105 flex items-center"> {/* Añade un margen inferior a esta div */}
        <span className="inline-block bg-primary rounded-full h-2 w-3 mr-2"></span>
        <Card>
            <CardBody>
            <p className="text-base lg:text-lg dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>Con la ayuda de nuestros instructores serás capaz de hablar de forma fluida el idioma inglés con cualquier persona.</p>
            </CardBody>
        </Card>
    </div>

    <div className="mb-6 mt-4 ml-4 max-w-[600px] transform transition duration-500 ease-in-out hover:scale-105 flex items-center"> {/* Añade un margen inferior a esta div */}
        <span className="inline-block bg-primary rounded-full h-2 w-3 mr-2"></span>
        <Card>
            <CardBody>
            <p className="text-base lg:text-lg dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>Nuestros instructores te ayudarán con cualquier problema o duda que tengas en el camino.</p>
            </CardBody>
        </Card>
    </div>

    <div className="mb-6 mt-4 ml-4 max-w-[600px] transform transition duration-500 ease-in-out hover:scale-105 flex items-center"> {/* Añade un margen inferior a esta div */}
    <span className="inline-block bg-primary rounded-full h-2 w-3 mr-2"></span>
        <Card>
            <CardBody>
            <p className="text-base lg:text-lg dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}> Con años de experiencia, nuestros instructores están capacitados para que tengas los mejores resultados posibles.</p>
            </CardBody>
        </Card>
    </div>
</div>



                <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-32 order-1 lg:order-2 mt-16">
                    <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
                        <img src={teacherone} alt="hero" className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[600px] lg:h-[400px] xl:w-[900px] xl:h-[500px] transform transition duration-500 ease-in-out hover:scale-105 rounded-lg" />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default TeacherOne;
