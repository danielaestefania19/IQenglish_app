import IQBot from "../assets/IQBot.png";
import fondo from "../assets/fondo.png";
import aprendizaje from "../assets/aprendizaje.png";
import horario from "../assets/horario.png";
import atencion from "../assets/atencion.png";
import certificacion from "../assets/certificacion.png";
import poliza from "../assets/poliza.png";


const Mediun = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[40vw] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${fondo})`, height: '15cm' }}>
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1 relative z-10">
          <img src={IQBot} alt="hero" className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110" />
        </div>
      </div>

      <div className="w-[60vw] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold tracking-tight text-rose-600 sm:text-4xl font-popping mt-[2px]">
          Aprende ingles  en 8 a 12 meses
        </h1>
        <div className="flex flex-col mt-12 space-y-4">
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping">
            <img src={aprendizaje} alt="Icono 1" className="w-8 h-8 mr-2" /> Aprendizaje Integral
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping">
            <img src={horario} alt="Icono 2" className="w-8 h-8 mr-2" /> Horarios Personalizados
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping">
            <img src={atencion} alt="Icono 3" className="w-8 h-8 mr-2" /> Atencion Online
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping">
            <img src={certificacion} alt="Icono 4" className="w-8 h-8 mr-2" /> Certificacion Toefl
          </p>
          <p className="flex items-center text-2xl font-bold tracking-tight text-rose-600 sm:text-2xl font-popping">
            <img src={poliza} alt="Icono 5" className="w-8 h-8 mr-2" /> Poliza de aprendizaje asegurada
          </p>
        </div>
      </div>


    </div>
  )
}

export default Mediun;
