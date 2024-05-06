import { useState, useEffect } from 'react';
import {
    SpeedDial,
    SpeedDialContent,
    SpeedDialAction,
} from "@material-tailwind/react";
import llamada from "../assets/phone.png";
import whatsapp from "../assets/whatsapp.png";
import check from "../assets/marker.png";
import message from "../assets/messege.png"

function Contacto() {
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
        clearTimeout(hoverTimeout);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowOptions(false);
        }, 100);
        setHoverTimeout(timeout);
    };

    useEffect(() => {
        return () => {
            clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout, showOptions]);

    return (
        <div className="h-20 w-full relative flex justify-center items-start"
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
            <div className="absolute bottom-14 left-7">
                <SpeedDial open={showOptions}>
                    <button type="button" className="absolute h-2 w-6 z-99 top-30">
                        <img src={message} alt="Message" className="h-8 w-8" />
                        <span className="sr-only">Open message</span>
                    </button>
                    <SpeedDialContent className={`flex-row ${showOptions ? '' : 'hidden'}`}>
                        <div style={{ position: 'absolute', bottom: '0.25cm', left: '-60px' }}>
                            <SpeedDialAction style={{ transform: 'scale(0.9)', marginRight: '10px' }}>
                                <img src={llamada} alt="Llamada" className="h-5 w-5" />
                            </SpeedDialAction>
                        </div>
                        <div style={{ position: 'absolute', bottom: '0.25cm', left: '-15px' }}>
                            <SpeedDialAction style={{ transform: 'scale(0.9)', marginRight: '10px' }}>
                                <img src={whatsapp} alt="WhatsApp" className="h-5 w-5" />
                            </SpeedDialAction>
                        </div>
                        <div style={{ position: 'absolute', bottom: '0.25cm', left: '30px' }}>
                            <SpeedDialAction style={{ transform: 'scale(0.9)' }}>
                                <img src={check} alt="Check" className="h-5 w-5" />
                            </SpeedDialAction>
                        </div>
                    </SpeedDialContent>
                </SpeedDial>
            </div>
        </div>
    );
}

export default Contacto;
