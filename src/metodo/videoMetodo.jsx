

const VideoMetodo = () => {



    return (
      <div className="flex flex-col lg:flex-row justify-center items-center mb-32  gap-8  bg-[#F0F4F9]">
        <video className="h-[30rem] max-w-full border border-gray-200 rounded-lg dark:border-gray-700 mt-16" autoPlay muted controls>
          <source src="https://gateway.pinata.cloud/ipfs/QmXkpjYf6hfx4jKKoiWnGTVhP1ZgDEpy4XEGUTK5hEaX7X" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col items-center lg:items-start lg:ml-8">
          <div className="max-w-xl text-center lg:text-left mt-32">
            <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-primary">
            ¿Todavia tienes dudas sobre iniciar tu transformación hacia una persona bilingüe?
            </h2>
            <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>
            Escribe hoy, te asesoraremos con todas las preguntas que tengas
            </p>
            <ul className="flex flex-wrap items-center mt-8 lg:mt-8">
              <li>
                <button
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-700 lg:px-7"
                  onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                >
                  Hazlo ahora
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-16 lg:h-12"></div>
      </div>
    );
  }
  
  export default VideoMetodo;
  