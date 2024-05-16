import { Tooltip, Avatar, Button } from '@nextui-org/react';
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
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
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* Cambio aquí */}
                    {mostrarContactos && (
                        <>
                            <Tooltip showArrow={true} color='foreground' content="Llamada">
                                <Button isIconOnly color="primary" variant="bordered" aria-label="Like" onClick={hacerLlamada} style={{ margin: '0.5rem' }}>
                                    <IoCall size="4.5em" />
                                </Button>
                            </Tooltip>
                            <Tooltip showArrow={true} color='foreground' content="WhatsApp">
                                <Button isIconOnly color="primary" variant="bordered" aria-label="Like" onClick={enviarMensaje} style={{ margin: '0.5rem' }}>
                                    <IoLogoWhatsapp size="4.5em" />
                                </Button>
                            </Tooltip>
                        </>
                    )}
                    <Avatar src={icon} isBordered radius="full" color="default" size="lg" className="z-99" onClick={toggleContactos} style={{ margin: '0.8rem' }} />
                </div>
            )}
        </div>
    );
}

export default ContactoFly;
