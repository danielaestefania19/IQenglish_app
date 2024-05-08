import blogs from "../assets/blogs.png";
import Contacto from "./Contacto.jsx";

const Body = () => {
  return (
    <div className="container mx-auto py-32 bg-[#F0F4F9]">
      <div className="flex">
        {/* Div izquierdo */}
        <div className="w-[400px] flex justify-center">
          <img src={blogs} alt="hero" className="max-w-full lg:ml-auto w-[350px]" />
        </div>
        {/* Div derecho */}
        <div className="w-full lg:w-1/2 flex items-center flex-grow ml-4 ">
          <div className="w-full lg:w-6/6">
            <p className="mb-2 text-[150px] font-bold leading-[1.208] text-dark dark:text-white text-primary sm:text-[42px] lg:text-[48px] xl:text-[140px] font-montserrat" style={{ letterSpacing: '-0.05em' }}>
              LA MEJOR
            </p>

            <h1 className="mb-2 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-4xl font-montserrat" style={{ letterSpacing: '-0.02em' }}>
              FORMA DE APRENDER ES CON NOSOTROS
            </h1>
            <p className="mb-2 max-w-[600px] text-2xl dark:text-dark-6 font-montserrat" style={{ letterSpacing: '-0.01em' }}>
              Con IQenglish, los estudiantes prosperan juntos. Los estudiantes pueden adaptar perfectamente su vida personal para aprender inglés en el día a día.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <button className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-[20px] font-medium text-white hover:bg-blue-dark lg:px-7">
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
