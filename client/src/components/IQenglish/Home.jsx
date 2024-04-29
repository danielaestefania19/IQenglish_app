import React, { useState, useEffect } from 'react';

function Home() {
  // Define tus frases motivacionales
  const motivationalPhrases = [
    "Conviértete en la persona que atraiga los resultados que buscas.",
    "Deja de decir 'más tarde'. No lo harás más tarde. Hazlo ahora o decide no hacerlo.",
    "El 90% de las ventas es por convicción y el 10% por persuasión.",
    "Las oportunidades no aparecen, tú las creas.",
    "Tus clientes no compran servicios, compran sentimientos.",
    "Un cliente satisfecho es la mejor estrategia de todas."
  ];


  // Crea un estado para la frase motivacional
  const [motivationalPhrase, setMotivationalPhrase] = useState("");

  // Cada vez que se renderiza el componente, selecciona una frase al azar
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    setMotivationalPhrase(motivationalPhrases[randomIndex]);
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
     <div className="py-8 px-4 max-w-screen-xl text-center lg:py-16 z-10 relative container mx-auto xs:mx-8 sm:mx-4 md:mx-16 lg:mx-32 xl:mx-64 xs:pl-60">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 sm:text-xs md:text-sm">
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">¡Es el momento!</span> <span className="text-sm font-medium">Empieza a vender ahora.</span> 
          <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white sm:text-2xl md:text-3xl">¡Nosotros creemos en tu potencial!</h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-12 lg:px-44 dark:text-gray-200 sm:text-sm md:text-base">{motivationalPhrase}</p>
        <form className="w-full max-w-md mx-auto sm:w-full md:w-3/4 lg:w-1/2">   
          <div className="relative">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 sm:text-sm md:text-base">
              Empezar
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </form>
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}

export default Home;