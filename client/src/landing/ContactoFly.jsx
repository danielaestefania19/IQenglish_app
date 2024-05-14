import { Tooltip, Avatar } from '@nextui-org/react';
import llamada from "../assets/phone_black.png";
import whatsapp from "../assets/whatsapp_black.png"; 
import icon from "../assets/logo2.jpeg"; 
import { useEffect, useState } from 'react';

function ContactoFly() {
    const telefono = "+5218180144572";
    const [mostrarBotones, setMostrarBotones] = useState(false);
    const [mostrarContactos, setMostrarContactos] = useState(false);

    const hacerLlamada = (e) => {
        e.stopPropagation();
        window.location.href = `tel:${telefono}`;
    };

    const enviarMensaje = (e) => {
        e.stopPropagation();
        window.location.href = `https://wa.me/${telefono}`;
    };

    const toggleContactos = (e) => {
        e.stopPropagation();
        setMostrarContactos(!mostrarContactos);
    };

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;
            const pageHeight = document.body.offsetHeight;

            if (scrollPosition > (pageHeight / 4) - windowHeight) {
                setMostrarBotones(true);
            } else {
                setMostrarBotones(false);
            }
        };

        const handleClickOutside = () => {
            setMostrarContactos(false);
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-end z-999">
            {mostrarBotones && (
                <>
                    {mostrarContactos && (
                        <>
                            <Tooltip showArrow={true} color='foreground' content="Llamada">
                                <img src={llamada} alt="Llamada" className="h-8 w-8 mr-4 mb-4 hover:shadow-md hover:opacity-50" onClick={hacerLlamada} />
                            </Tooltip>
                            <Tooltip showArrow={true} color='foreground' content="WhatsApp">
                                <img src={whatsapp} alt="WhatsApp" className="h-8 w-8 mr-4 mb-4 hover:shadow-md hover:opacity-50" onClick={enviarMensaje} />
                            </Tooltip>
                        </>
                    )}
                    <Avatar src={icon}  isBordered radius="full" color="default" size="lg" className="z-99"  onClick={toggleContactos} />
                </>
            )}
        </div>
    );
}

export default ContactoFly;
