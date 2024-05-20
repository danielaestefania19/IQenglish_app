const VideoNosotros = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mb-32 mt-32 gap-8">
      <video className="h-[30rem] max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoPlay muted controls>
        <source src="https://gateway.pinata.cloud/ipfs/QmVLsyt5rZYqHrs5xPNqtiiaKoUtj6HWipKgXEwy4BXrU4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col items-center lg:items-start lg:ml-8">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-primary">
          Es hora de aprender Inglés con los mejores
          </h2>
          <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>
          Únete a la Familia IQ English y domina el Inglés
          </p>
          <ul className="flex flex-wrap items-center mt-8 lg:mt-16">
            <li>
              <button
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-700 lg:px-7"
                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
              >
                Empieza ahora
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VideoNosotros;
