import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";

const CardNosotros = () => {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="w-[60vw] mx-auto flex flex-col items-center mt-16 mb-12">
        <h1 className="text-2xl font-bold tracking-tight text-black sm:text-4xl font-popping text-center mb-4">
          NUESTRAS INSTALACIONES
        </h1>
      </div>
      <div className="flex justify-center space-x-16 w-full">
        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[350px] w-full" src={foto1} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Estratégicamente ubicados</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">IQ English Monterrey Sur</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Av. Chapultepec 2039, Buenos Aires, 64800 Monterrey, N.L.</p>
            <a href="#" className="inline-flex font-medium items-center text-primary hover:underline">
                    Conoce más!
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                  </a>
          </div>
        </div>

        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[350px] w-full" src={foto2} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Horarios personalizados</h5>
            </a>
            <p className="mb-6 font-normal text-gray-700 dark:text-gray-400">
              Horarios personalizados
              Tendrás la libertad de elegir el día y hora de tus prácticas.
            </p>
            
            <a href="#" className="inline-flex font-medium items-center text-primary hover:underline">
                    Conoce más!
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                  </a>
          </div>
        </div>

        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[350px] w-full" src={foto3} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grupos pequeños</h5>
            </a>
            <p className="mb-12 font-normal text-gray-700 dark:text-gray-400">Nuestros grupos se componen de tres a cuatro alumnos y como máximo seis.</p>
            <a href="#" className="inline-flex font-medium items-center text-primary hover:underline">
                    Conoce más!
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNosotros;
