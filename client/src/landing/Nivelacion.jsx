import Nivelacion from "../../src/assets/Nivelacion.png"


const Blog = () => {
    return (
      <div className="content-container py-8 mx-auto relative h-auto lg:h-[500px]">
        <div className="flex flex-col-reverse lg:flex-row items-center ml-0 lg:ml-[250px] mt-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-[#000000]">Construye tu futuro aprendiendo inglés.</h2>
            <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-[#F0F4F9]" style={{ letterSpacing: '-0.01em' }}>Domina el inglés y abre tus horizontes. El idioma más hablado del mundo te lleva a nuevas culturas y oportunidades. ¡Haz del inglés tu llave al mundo!</p>
            <ul className="flex flex-wrap items-center">
              <li>
                <button className="inline-flex items-center mt-1 justify-center rounded-md bg-[#b5d3f8] px-6 py-3 text-center text-xl lg:text-2xl font-medium text-black hover:bg-blue-dark lg:px-7">
                  Comenzar
                </button>
              </li>
            </ul>
          </div>
          <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-0 order-1 lg:order-2">
            <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
              <img src={Nivelacion} alt="hero" className="max-w-full lg:ml-auto w-[500px] transform transition duration-500 ease-in-out hover:scale-105 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Blog;
  