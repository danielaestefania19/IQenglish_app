import React from 'react';
import llamada from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import check from "../assets/marker.png";

function Contacto() {
    return (
        <div className="h-20 w-full relative flex justify-center items-start">
            <div className="absolute bottom-7 left-7">
                <div className="flex">
                    <img src={llamada} alt="Llamada" className="h-5 w-5 mr-2 mr-3 hover:shadow-md hover:opacity-50" />
                    <img src={whatsapp} alt="WhatsApp" className="h-5 w-5 mr-3 hover:shadow-md hover:opacity-50" />
                    <img src={check} alt="Check" className="h-5 w-5 hover:shadow-md hover:opacity-50" />
                </div>
            </div>
        </div>
    );
}

export default Contacto;
