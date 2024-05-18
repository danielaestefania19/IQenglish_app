import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import React, { useState } from "react";
import { MdOutlineNotStarted } from "react-icons/md";

const End = () => {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isFollowed2, setIsFollowed2] = useState(false);

    return (
        <div className="content-container py-8 mx-auto relative mb-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start ml-0 lg:ml-[250px] gap-8">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-bold tracking-tight text-rose-600 sm:text-5xl font-popping text-primary">
                        ¿Todavia tienes dudas sobre aprender Ingles?
                    </h2>
                    <p className="mb-2 max-w-[600px] text-xl lg:text-2xl dark:text-dark-6 font-popping text-black" style={{ letterSpacing: '-0.01em' }}>
                        Aprender inglés abre puertas a nuevas oportunidades, amplía tus horizontes y te conecta con el mundo. ¡Transforma tu vida hoy!
                    </p>
                    <ul className="flex flex-wrap items-center mt-16">
                        <li>
                            <button
                                className="inline-flex items-center mt-1 justify-center rounded-md bg-primary px-6 py-3 text-center text-xl lg:text-2xl font-medium text-white hover:bg-blue-700 lg:px-7"
                                onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Empieza ahora
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mt-12 ml-16">
                    <Card className="max-w-[340px] bg-[#F0F4F9]">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar  radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Motivo para aprender ingles</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@iqenglish_monterrey</h5>
                                </div>
                            </div>
                        
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>
                                Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                            </p>
                            <span className="pt-2">
                                #FrontendWithZoey
                                <span className="py-2" aria-label="computer" role="img">
                                    💻
                                </span>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">4</p>
                                <p className="text-default-400 text-small">Following</p>
                            </div>
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">97.1K</p>
                                <p className="text-default-400 text-small">Followers</p>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className="max-w-[340px] bg-[#F0F4F9]">
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-2.png" />
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">Alex Doe</h4>
                                    <h5 className="text-small tracking-tight text-default-400">@alexdoe</h5>
                                </div>
                            </div>
                            <Button
                                className={isFollowed2 ? "bg-transparent text-foreground border-default-200" : ""}
                                color="primary"
                                radius="full"
                                size="sm"
                                variant={isFollowed2 ? "bordered" : "solid"}
                                onPress={() => setIsFollowed2(!isFollowed2)}
                            >
                                {isFollowed2 ? "Unfollow" : "Follow"}
                            </Button>
                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>
                                Backend developer and data enthusiast. Let's build something amazing together!
                            </p>
                            <span className="pt-2">
                                #BackendWithAlex
                                <span className="py-2" aria-label="gear" role="img">
                                    ⚙️
                                </span>
                            </span>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">10</p>
                                <p className="text-default-400 text-small">Following</p>
                            </div>
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">56.2K</p>
                                <p className="text-default-400 text-small">Followers</p>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default End;
