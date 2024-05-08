import { useState, useContext } from 'react';
import useReviews from '../hooks/reviews/useReviews';
import { ModalContext } from "./ModalConext.jsx";
import StarRatings from 'react-rating-stars-component';
import { toast } from 'react-toastify';
import { IconButton } from "@material-tailwind/react";

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { openModalReview, closeModalReview } = useContext(ModalContext);
  const [step, setStep] = useState(1);
  const [name, setName] = useState({ value: '', completed: false });
  const [title, setTitle] = useState({ value: '', completed: false });
  const [comment, setComment] = useState({ value: '', completed: false });
  const [rating, setRating] = useState({ value: '', completed: false });
  const [isLoading, setIsLoading] = useState(false);
  const [attemptedAdvance, setAttemptedAdvance] = useState(false);
  const { createNewReview, reviews } = useReviews();
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 6;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };




  const handleNext = (e) => {
    e.preventDefault();
    if (step < 4) {
      // Verificar si todos los campos están completos antes de avanzar
      if (step === 1 && !name.completed) {
        setAttemptedAdvance(true);
        return;
      }
      if (step === 2 && !title.completed) {
        setAttemptedAdvance(true);
        return;
      }
      if (step === 3 && !comment.completed) {
        setAttemptedAdvance(true);
        return;
      }
      if (step === 4 && !rating.completed) {
        setAttemptedAdvance(true);
        return;
      }

      // Si todos los campos están completos, avanzar al siguiente paso
      setStep(step + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNameChange = (event) => {
    setName({ value: event.target.value, completed: !!event.target.value });
    setAttemptedAdvance(false);
  };

  const handleTitleChange = (event) => {
    setTitle({ value: event.target.value, completed: !!event.target.value });
    setAttemptedAdvance(false);
  };

  const handleCommentChange = (event) => {
    setComment({ value: event.target.value, completed: !!event.target.value });
    setAttemptedAdvance(false);
  };

  const ratingChanged = (newRating) => {
    setRating({ value: newRating, completed: !!newRating });
    setAttemptedAdvance(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    openModalReview();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    closeModalReview();
    setStep(1);
    setName({ value: '', completed: false });
    setTitle({ value: '', completed: false });
    setComment({ value: '', completed: false });
    setRating({ value: '', completed: false });
    setAttemptedAdvance(false);
    setCurrentPage(1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verificar si el campo de calificación está vacío
    if (!rating.value) {
      setAttemptedAdvance(true);
      return;
    }

    setIsLoading(true);

    try {
      const result = await createNewReview({
        puntuacion: rating.value,
        titulo: title.value,
        description: comment.value,
        nombre: name.value
      });

      if (result.success) {
        toast.info('¡El comentario se creó exitosamente!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          progressStyle: {
            background: '#1D4ED8', // Color de la barra de progreso (azul oscuro)
          }
        });
      } else if (result.error) {
        toast.error('¡Algo mal sucedio al crear el comentario intenta de nuevo!.')
      }
    } catch (error) {
      console.error(error)
      toast.error('¡Algo mal sucedio al crear el comentario intenta de nuevo!.')
    } finally {
      setIsLoading(false);
    }

    closeModal();
  };

  console.log(currentPage)


  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Comentarios
            </h2>
          </div>

          <button
            onClick={openModal}
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
          >
            <span className="font-medium">Añade un comentario...</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>





        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {currentReviews.map(review => (
            <blockquote key={review.id} className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 transform transition duration-500 ease-in-out hover:scale-105">
              <div>
                <div className="flex gap-0.5 text-yellow-500">
                  <StarRatings
                    count={review.puntuacion}
                    value={review.puntuacion}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{review.titulo}</p>
                  <p className="mt-4 leading-relaxed text-gray-700">{review.description}</p>
                </div>
              </div>

              <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; Hola
              </footer>
            </blockquote>
          ))}
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto" style={{ height: '100vh' }}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute bg-black opacity-50 inset-0"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative">
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2 right-2 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 12 12m0-12-12 12" />
                  </svg>
                  <span className="sr-only">Cerrar modal</span>
                </button>
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                          Añadir comentario
                        </h3>
                        <div className="mt-2">
                          {step === 1 && (
                            <div>
                              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                              <input
                                value={name.value}
                                onChange={handleNameChange}
                                id="small-input"
                                className={`block w-96 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${attemptedAdvance && !name.completed && 'border-red-500'}`}
                                placeholder="Tu nombre"
                                required // Campo requerido
                              />
                              {attemptedAdvance && !name.completed && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                            </div>
                          )}

                          {step === 2 && (
                            <div>
                              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Titulo</label>
                              <input
                                value={title.value}
                                onChange={handleTitleChange}
                                id="small-input"
                                className={`block w-96 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${attemptedAdvance && !title.completed && 'border-red-500'}`}
                                placeholder="Titulo de el comentario"
                                required // Campo requerido
                              />
                              {attemptedAdvance && !title.completed && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                            </div>
                          )}

                          {step === 3 && (
                            <div>
                              <textarea
                                value={comment.value}
                                onChange={handleCommentChange}
                                className={`block w-full sm:min-w-[11cm] h-32 px-3 py-2 mt-1 border border-gray-300 rounded-md resize-none ${attemptedAdvance && !comment.completed && 'border-red-500'}`}
                                placeholder="Tu comentario"
                                required // Campo requerido
                              ></textarea>
                              {attemptedAdvance && !comment.completed && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                            </div>
                          )}

                          {step === 4 && (
                            <>
                              <p className="mb-4">¿Cuántas estrellas le darías a IQenglish?</p>
                              <StarRatings
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"

                              />
                              {attemptedAdvance && !rating.completed && <p className="text-red-500 text-xs mt-1">Este campo es requerido</p>}
                            </>
                          )}


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {step < 4 ? (
                      <button
                        onClick={handleNext}
                        type="button"
                        className="w-full inline-flex justify-center rounded-md text-white bg-primary hover:bg-blue-dark focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Siguiente
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        {isLoading ? (
                          <div role="status">
                            <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                          </div>
                        ) : (
                          'Crear'
                        )}
                      </button>

                    )}
                    {step > 1 && (
                      <button
                        onClick={handleBack}
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Atras
                      </button>
                    )}
                  </div>
                </form>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Reviews;
