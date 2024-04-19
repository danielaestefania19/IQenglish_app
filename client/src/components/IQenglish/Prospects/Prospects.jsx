import React, { useState, useEffect } from "react";
import useProspects from "../../../hooks/prospects/useProspects.jsx";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Spinner } from "@material-tailwind/react";
import Error from "./Error.jsx";
import { IoTrash } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";

const Prospects = () => {
    const { prospects, loading, error } = useProspects();
    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isOpen, setIsOpen] = useState([]);

    const handleMenuToggle = (index) => {
        setOpenMenuIndex(index === openMenuIndex ? null : index);
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const UpdateProspect = () => {
        console.log("Hola");
    };

    const DeleteProspect = () => {
        console.log("Hola");
    };

    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (openMenuIndex !== null && !event.target.closest("#menu-button") && !event.target.closest(".menu-options")) {
                setOpenMenuIndex(null);
                setIsOpen(prevState => prevState.map((state, i) => i === openMenuIndex ? false : state));
            }
        };

        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [openMenuIndex]);



    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <Spinner className="h-10 w-10" color="blue" />
        </div>
    );
    if (error) return <Error message={error.message} />;

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 absolute top-0 left-0 z-0 w-full h-full"></div>
            <div className="overflow-x-auto flex-grow relative">
                <Table hoverable className="relative z-10">
                    <TableHead>
                        <TableHeadCell className="p-4">
                            <Checkbox color="blue" />
                        </TableHeadCell>
                        <TableHeadCell>Nombre</TableHeadCell>
                        <TableHeadCell>Apellido</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Número de Telefono</TableHeadCell>
                        <TableHeadCell>Dirección</TableHeadCell>
                        <TableHeadCell>Edad</TableHeadCell>
                        <TableHeadCell>
                            <span className="sr-only">...</span>
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {prospects.map((prospect, index) => (
                            <TableRow key={prospect.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="p-4">
                                    <Checkbox color="blue" />
                                </TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {prospect.name}
                                </TableCell>
                                <TableCell>{prospect.lastname}</TableCell>
                                <TableCell>{prospect.email}</TableCell>
                                <TableCell>{prospect.phone_number}</TableCell>
                                <TableCell>{prospect.addresses}</TableCell>
                                <TableCell>{prospect.age}</TableCell>
                                <TableCell>
                                    <button id="menu-button" onClick={() => handleMenuToggle(index)} className={`relative group p-2 ${isOpen[index] ? 'open' : ''}`}>
                                        <div className={`relative flex overflow-hidden items-center justify-center rounded-full w-[32px] h-[32px] transform transition-all bg-white ring-0 ring-gray-300 hover:ring-8  ${isOpen[index] ? 'ring-4' : ''} ring-opacity-30 duration-200 shadow-md`}>
                                            <div className="flex flex-col justify-between w-[12px] h-[12px] transform transition-all duration-300 origin-center overflow-hidden">
                                                <div className={`bg-blue-500 h-[1px] w-3 transform transition-all duration-300 origin-left ${isOpen[index] ? 'translate-x-6' : ''}`}></div>
                                                <div className={`bg-blue-500 h-[1px] w-3 rounded transform transition-all duration-300 ${isOpen[index] ? 'translate-x-6' : ''} delay-75`}></div>
                                                <div className={`bg-blue-500 h-[1px] w-3 transform transition-all duration-300 origin-left ${isOpen[index] ? 'translate-x-6' : ''} delay-150`}></div>

                                                <div className={`absolute items-center justify-between transform transition-all duration-500 top-1 -translate-x-6 ${isOpen[index] ? 'translate-x-0' : ''} flex w-0 ${isOpen[index] ? 'w-8' : ''}`}>
                                                    <div className={`absolute bg-blue-500 h-[1px] w-3 transform transition-all duration-500 rotate-0 delay-300 ${isOpen[index] ? 'rotate-45' : ''}`}></div>
                                                    <div className={`absolute bg-blue-500 h-[1px] w-3 transform transition-all duration-500 -rotate-0 delay-300 ${isOpen[index] ? '-rotate-45' : ''}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    {openMenuIndex === index && (
                                        <div className="absolute right-0 bg-white mt-1 py-2 w-48 border rounded-lg shadow-lg menu-options" style={{ zIndex: 9999 }}>
                                            <ul>
                                                <li className="flex items-center">
                                                    <GrUpdate className="inline-block ml-8" />
                                                    <a onClick={UpdateProspect} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Actualizar Prospecto</a>
                                                </li>
                                                <li className="flex items-center">
                                                    <IoTrash className="inline-block ml-8" />
                                                    <a onClick={DeleteProspect} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Eliminar Prospecto</a>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
            </div>
        </div>
    );
};

export default Prospects;
