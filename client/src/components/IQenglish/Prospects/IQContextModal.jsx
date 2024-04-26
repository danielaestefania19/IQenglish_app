import React, { useState, createContext } from 'react';

// Crear un Contexto Global
export const ModalContextIQ = createContext();

// Crear un Proveedor de Contexto Global
export const ProviderModalIQ = ({ children }) => {
  const [isOpenModal, setisOpenModal] = useState(false);


  // Definir el valor del contexto
  const contextValue = {
    isOpenModal,
    openModalContext: () => setisOpenModal(true),
    closeModalContext: () => setisOpenModal(false),
  };

  // Retornar el Provider del contexto con el valor definido
  return (
    <ModalContextIQ.Provider value={contextValue}>
      {children}
    </ModalContextIQ.Provider>
  );
};
