import student from "../../src/assets/student1.png"


const TeacherOne = () => {
  return (
    <div className="content-container py-8 mx-auto h-auto lg:h-[500px] mb-20 ml-16">
      <div className="flex flex-col lg:flex-row items-center lg:ml-[230px] mt-10">

        <div className="max-w-xl">
          <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>Estudiar con profesores nativos te permitirá desarrollar al máximo cada una de las áreas del inglés.</p>
          <p className="mb-2 mt-12 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
            <span className="inline-block bg-primary rounded-full h-2 w-2 mr-2"></span>
            Examen Online
          </p>
          <p className="mb-6 mt-4 ml-4 max-w-[600px] text-base lg:text-lg dark:text-dark-6 font-popping text-black transform transition duration-500 ease-in-out hover:scale-105" style={{ letterSpacing: '-0.01em' }}>
            <span className="inline-block bg-primary rounded-full h-2 w-2 mr-2"></span>
            Examen Presencial
          </p>

          <ul className="flex flex-wrap items-center mt-12">
            <li>
              <button onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-600 lg:px-7">

                Pruebalo
              </button>
            </li>
          </ul>
        </div>
        <div className="w-[400px] lg:w-1/3 flex items-center flex-grow ml-32 order-1 lg:order-2">
          <div className="w-full lg:w-2/3 flex justify-center mb-8 lg:mb-0 order-2 lg:order-1">
            <img src="https://th.bing.com/th/id/OIP.2Ecc2kJaDoiau98cs8wETgHaE8?rs=1&pid=ImgDetMain" alt="hero" className="w-full h-auto md:w-[400px] md:h-[350px] lg:w-[600px] lg:h-[400px] xl:w-[900px] xl:h-[500px] transform transition duration-500 ease-in-out hover:scale-105 rounded-lg" />

          </div>

        </div>
      </div>
    </div>
  );
}

export default TeacherOne;
