import React, { useState, createContext } from 'react';

// Crear un Contexto Global
export const ModalContext = createContext();

// Crear un Proveedor de Contexto Global
export const ProviderModal = ({ children }) => {
  const [isOpenModal, setisOpenModal] = useState(false);

  // Definir el valor del contexto
  const contextValue = {
    isOpenModal,
    openModal: () => setisOpenModal(true),
    closeModal: () => setisOpenModal(false),
  };

  // Retornar el Provider del contexto con el valor definido
  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
