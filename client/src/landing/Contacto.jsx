import React, { useState } from 'react';
import whatsapp from "../assets/whatsapp3.jpeg"
import llamada from "../assets/llamada.png"

const Contacto = () => {
    return (
        <button type="button" className="fixed top-55  right-10 z-50 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-4 text-center">
            !Contáctanos!
        </button>
    );
}

export default Contacto;
