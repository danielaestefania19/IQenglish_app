import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const Metodo = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cards = [
        {
            id: 1,
            title: "Nivel Inicial",
            description: "Al termino de nuestro nivel inicial estaras dentro de un nivel A2 de acuerdo al MCERL.",
            details: [
                "Objetivo: Seras capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia (Información basica sobre ti mismo y tu familia).",
                "Clubes de práctica:Participaras en al menos 22 clubes para que estes preparado para el siguiente nivel."
            ],
            color: "#3056D3"  // Azul oscuro
        },
        {
            id: 2,
            title: "Nivel Intermedio",
            description: "Al termino de nuestro nivel intermedio estaras dentro de un nivel B1 de acuerdo al MCERL.",
            details: [
                "Objetivo: Seras capaz de hablar en la mayor parte de situaciones que pueden surgir durante un viaje donde se utiliza la lengua inglesa.",
                "Clubes de práctica:Participaras en al menos 32 clubes en los cuales podras describir experiencias, acontecimientos deseos y aspiraciones personales."
            ],
            color: "#6B9DFE"  // Azul claro
        },
        {
            id: 3,
            title: "Nivel Avanzado",
            description: "Al termino de nuestro nivel avanzado estaras dentro de un nivel B2 de acuerdo al MCERL.",
            details: [
                "Objetivo: Seras capaz de interactuar con fluidez y confianza con hablantes nativos sin que haya tensión en la conversación.",
                "Clubes de práctica: Participaras en al menos 32 clubes donde podras expresar ideas complejas y detalladas sobre temas abstractos y concretos, argumentar y defender tu punto de vista."
            ],
            color: "#D4AF37"  // Dorado
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const componentTop = document.getElementById('metodo').offsetTop;

            if (scrollTop + windowHeight > componentTop) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const transitions = useTransition(isVisible ? cards : [], {
        from: { opacity: 0, transform: 'translateY(100px)' },
        enter: { opacity: 1, transform: 'translateY(0px)' },
        config: config.molasses,
    });

    return (
        <section id="metodo" className="relative z-10 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                Nuestro Metodo
                            </span>
                            <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                                3 Niveles de 14 lecciones
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                El mejor sistema de enseñanza: observando, escuchando y repitiendo. Lo que nos permitirá tener conversaciones más fluidas en menos tiempo y con menos esfuerzo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    {transitions((props, item) => (
                        <animated.div key={item.id} style={props} className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
                                <span className="mb-2 block text-lg font-semibold text-primary" style={{ color: item.color }}>
                                    {item.title}
                                </span>
                                <h2 className="mb-0 text-[42px] font-bold text-dark dark:text-white">
                                    <span style={{ color: item.color }}>Nivel {item.id}</span>
                                </h2>
                                <p className="mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6">
                                    {item.description}
                                </p>
                                <div className="mb-9 flex flex-col gap-[14px]">
                                    {item.details.map((detail, index) => (
                                        <p key={index} className="text-base text-body-color dark:text-dark-6">
                                            <strong>{detail.split(":")[0]}:</strong> {detail.split(":")[1]}
                                        </p>
                                    ))}

                                    <a href="#" className="inline-flex font-medium items-center text-primary hover:underline" style={{ color: item.color }}>
                                        Conoce más!
                                        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                        </svg>
                                    </a>
                                </div>
                                <div>
                                    <span className="absolute right-0 top-7 z-[-1]">
                                        <svg
                                            width="77"
                                            height="172"
                                            viewBox="0 0 77 172"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear"
                                                    x1="86"
                                                    y1="0"
                                                    x2="86"
                                                    y2="172"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor={item.color} stopOpacity="0.09" />
                                                    <stop
                                                        offset="1"
                                                        stopColor="#C4C4C4"
                                                        stopOpacity="0"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span className="absolute right-4 top-4 z-[-1]">
                                        <svg
                                            width="41"
                                            height="89"
                                            viewBox="0 0 41 89"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="38.9138"
                                                cy="87.4849"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 87.4849)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="74.9871"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 74.9871)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="62.4892"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 62.4892)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="38.3457"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 38.3457)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="13.634"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 13.634)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="50.2754"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 50.2754)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="26.1319"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 26.1319)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="38.9138"
                                                cy="1.42021"
                                                r="1.42021"
                                                transform="rotate(180 38.9138 1.42021)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="87.4849"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 87.4849)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="74.9871"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 74.9871)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="62.4892"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 62.4892)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="38.3457"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 38.3457)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="13.634"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 13.634)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="50.2754"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 50.2754)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="26.1319"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 26.1319)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="26.4157"
                                                cy="1.4202"
                                                r="1.42021"
                                                transform="rotate(180 26.4157 1.4202)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="87.4849"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 87.4849)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="74.9871"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 74.9871)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="62.4892"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 62.4892)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="38.3457"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 38.3457)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="13.634"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 13.634)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="50.2754"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 50.2754)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="26.1319"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 26.1319)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="13.9177"
                                                cy="1.42019"
                                                r="1.42021"
                                                transform="rotate(180 13.9177 1.42019)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="87.4849"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 87.4849)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="74.9871"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 74.9871)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="62.4892"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 62.4892)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="38.3457"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 38.3457)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="13.634"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 13.634)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="50.2754"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 50.2754)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="26.1319"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 26.1319)"
                                                fill={item.color}
                                            />
                                            <circle
                                                cx="1.41963"
                                                cy="1.4202"
                                                r="1.42021"
                                                transform="rotate(180 1.41963 1.4202)"
                                                fill={item.color}
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metodo;
