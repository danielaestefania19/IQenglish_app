import  { useState, createContext } from 'react';

// Crear un Contexto Global
export const ModalContext = createContext();

// Crear un Proveedor de Contexto Global
export const ProviderModal = ({ children }) => {
  const [isOpenModalSucess, setisOpenModalSucess] = useState(false);
  const [isOpenModalError, setisOpenModalError] = useState(false);
  const [isOpenModalReview, setisOpenModalReview] = useState(false);
  // Definir el valor del contexto
  const contextValue = {
    isOpenModalSucess,
    isOpenModalError,
    isOpenModalReview,
    openModalSucess: () => setisOpenModalSucess(true),
    closeModalSucess: () => setisOpenModalSucess(false),
    openModalError: () => setisOpenModalError(true),
    closeModalError: () => setisOpenModalError(false),
    openModalReview: () => setisOpenModalReview(true),
    closeModalReview: () => setisOpenModalReview(false),
  };

  // Retornar el Provider del contexto con el valor definido
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
