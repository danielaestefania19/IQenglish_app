import Body1 from "../assets/Body1.png";
import "../css/Tailwind.css"
import Contacto from "./Contacto.jsx"
const Body = () => {
    
    return (
        <div
        className="relative bg-white pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]"
      >
      

        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1
                  className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl"
                >
                  La mejor <br />
                  forma de aprender<br />
                  es con nosotros
                </h1>
                <p
                  className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6"
                >
                  Con IQenglish, los estudiantes prosperan juntos. Los estudiantes pueden adaptar perfectamente su vida personal para aprender inglés en el día a día.
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Comenzar
                    </a>
                  </li>
                  <li>
                  <Contacto /> {/* Renderizar el componente Contacto aquí */}

                  <a/>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6
                    className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6"
                  >
                    Uno de nuestros estudiantes
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>
                </div>
              </div>
            </div>
            
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={Body1} 
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Body;
  