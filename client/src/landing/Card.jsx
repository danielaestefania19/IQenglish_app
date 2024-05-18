import image1 from "../assets/blogs/blog-01/image1.png"
import image3 from "../assets/blogs/blog-01/image2.jpg"
import video from "../assets/blogs/blog-01/video1.gif"
import "../css/Tailwind.css"



const Card = () => {
  return (

    <section className="w-full h-full pb-10 pt-32 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary  font-popping">
               Beneficios exclusivos
              </span>
              <h2
                className="mb-4 text-3xl font-bold text-dark text-dark sm:text-4xl md:text-[40px]  font-popping"
              >
                El mejor método para aprender inglés
              </h2>
              <p className="text-base text-dark dark:text-dark-6  font-popping">
              Algunas razones para elegir a IQ English
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  src={image1}
                  alt="image"
                  className="w-full h-64 object-cover"
                />

              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white  font-popping"
                >
                  Diciembre 22, 2024
                </span>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block  font-popping text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                     ¡Visualiza tus metas!
                  </a>
                </h3>
                <p className="text-base text-body-color  font-popping dark:text-dark-6">
                Establece objetivos claros y realistas para tu aprendizaje de inglés y celebra cada paso hacia su logro. 🥳💼 
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  src={video}
                  alt="image"
                  className="w-full h-64 object-cover"
                />

              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose  font-popping text-white"
                >
                  Marzo 15, 2024
                </span>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-xl  font-popping font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Nuestro Evento de Gala cada vez esta mas cerca!
                  </a>
                </h3>
                <p className="text-base text-body-color  font-popping dark:text-dark-6">
                 Nuestros estudiantes se estan esforzando para que nos acompañen en nuestra proxima graduación
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  src={image3}
                  alt="image"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold  font-popping leading-loose text-white"
                >
                  Mayo 05, 2024
                </span>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 inline-block text-xl  font-popping font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                   ¿Listos para un nuevo desafío?
                  </a>
                </h3>
                <p className="text-base  font-popping text-body-color dark:text-dark-6">
                Intenta hacer pequeñas tareas diarias en inglés, ¡cada palabra cuenta! 📝💼
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Card