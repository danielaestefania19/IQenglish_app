import Nosotros1 from "../assets/Nosotros1.png";
import Nosotros2 from "../assets/Nosotros2.png";


const Nosotros = () => {
    return (

        <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-7xl p-0 mb-8">
                <img src={Nosotros1} className="object-cover w-full h-128 md:w-96 md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg" /> 
                <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-5xl font-bold tracking-tight text-black">¿Quiénes somos?</h5>
                    <p className="mb-3 font-normal text-gray-900 text-[18px] ">
                    IQ English es el resultado de la pasión por compartir conocimientos y por hacer de la educación algo accesible. Somos una institución con un sistema de enseñanza innovador, eficiente, personalizado y garantizado que forma líderes bilingües que potencian su vida personal y profesional al superar positivamente cualquier comunicación en inglés. Desde que comenzamos a operar, hemos tenido la oportunidad de ayudar a que muchas personas adquieran habilidades y nuevas técnicas para desarrollarse mejor.</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row-reverse md:max-w-7xl p-0 mb-8">
                     <img src={Nosotros2} className="object-cover w-full h-128 md:w-96 md:h-auto rounded-t-lg md:rounded-none md:rounded-e-lg" /> 
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-5xl font-bold tracking-tight text-black">Nuestra Visión</h5>
                        <p className="mb-3 font-normal text-gray-900 text-[18px]">Trascender como la mejor institución en Latinoamérica, formadora de líderes bilingües capaces de potenciar su vida personal y profesional al superar toda comunicación en inglés.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-7xl p-0 mb-8">
                 <img src={Nosotros2} className="object-cover w-full h-128 md:w-96 md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg" /> 
                <div className="flex flex-col justify-between p-2 leading-normal">
                    <h5 className="mb-2 text-5xl font-bold tracking-tight text-black">Nuestra Visión</h5>
                    <p className="mb-3 font-normal text-gray-900 text-[18px] ">
                    Trascender como la mejor institución en Latinoamérica, formadora de líderes bilingües capaces de potenciar su vida personal y profesional al superar toda comunicación en inglés.</p>
                </div>
            </div>

            
        </div>
    );
}

export default Nosotros;
