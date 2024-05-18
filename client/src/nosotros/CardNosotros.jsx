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
      <div className="flex justify-around w-full">
        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
          <img className="rounded-t-lg h-[350px] w-[400px]" src={foto1} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Estratégicamente ubicados</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">IQ English Monterrey Sur</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Av. Chapultepec 2039, Buenos Aires, 64800 Monterrey, N.L.</p>
          </div>
        </div>

        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
          <img className="rounded-t-lg h-[350px] w-[400px]" src={foto2} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Horarios personalizados</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Horarios personalizados
              Tendrás la libertad de elegir el día y hora de tus prácticas.</p>
          </div>
        </div>

        <div className="w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
          <img className="rounded-t-lg h-[350px] w-[400px]" src={foto3} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Grupos pequeños</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nuestros grupos se componen de tres a cuatro alumnos y como máximo seis.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNosotros;
