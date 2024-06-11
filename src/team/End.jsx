import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import React from "react";
import logo from "../assets/logo2.jpeg";
import IQbot from "../assets/IQBot.png";

const End = () => {
    return (
        <div className="content-container py-8 mx-auto relative mb-32 bg-[#F0F4F9]">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-4 lg:justify-start">
                <div className="max-w-xl mt-16 mx-auto text-center lg:text-left">
                    <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-primary">
                        ¿Todavía tienes dudas sobre aprender Inglés?
                    </h2>
                    <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black mx-auto lg:mx-0" style={{ letterSpacing: '-0.01em' }}>
                        Aprender inglés abre puertas a nuevas oportunidades, amplía tus horizontes y te conecta con el mundo. ¡Transforma tu vida hoy!
                    </p>
                    <div className="flex justify-center lg:justify-start mt-8">
                        <button
                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-600 lg:px-7"
                            onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Empieza ahora
                        </button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 mt-12 lg:mt-0 mx-auto lg:mx-0 lg:justify-start">
                    <Card className="max-w-[340px] bg-white mx-0 lg:mr-24 mt-12 lg:mt-12">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar radius="full" size="md" src={logo} />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Motivo para aprender inglés</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@iqenglish_monterrey</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>
                                Aprender inglés no solo te abre puertas laborales, sino que también te permite disfrutar de nuevas culturas y hacer amigos de todo el mundo.
                            </p>
                            <span className="pt-2">
                                #InglesParaTodos
                                <span className="py-2" aria-label="earth" role="img">
                                    🌍
                                </span>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="text-default-400 text-small">¡El momento es ahora!</p>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[340px] bg-white mx-0 lg:mr-24 mt-12 lg:mt-12">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar radius="full" size="md" src={IQbot} />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">El inglés impulsa tu carrera</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@nuevo_estudiante</h5>
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>
                                El dominio del inglés te distingue en el mercado laboral, permitiéndote acceder a mejores puestos y salarios. ¡Asegura tu futuro profesional hoy mismo!
                            </p>
                            <span className="pt-2">
                                #CarreraExitosa
                                <span className="py-2" aria-label="briefcase" role="img">
                                    💼
                                </span>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="text-default-400 text-small">¡IQ English es tu mejor opción!</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default End;
