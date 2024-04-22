import React, { useState, useEffect } from "react";
import useProspects from "../../../hooks/prospects/useProspects.jsx";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Spinner } from "@material-tailwind/react";
import Error from "./Error.jsx";
import { IoTrash } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import './style.css'; // Importa los estilos de la barra de desplazamiento
import { Pagination } from "flowbite-react";
import check from "../../../assets/check.png"
import { IoMdCheckmark } from "react-icons/io";



const Prospects = () => {
    const { prospects, loading, error } = useProspects();

    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isOpen, setIsOpen] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [searchType, setSearchType] = useState("Nombre");

    const toggleDropdown = () => setIsSearchOpen(!isSearchOpen);


    const handleSearchTypeChange = (type) => {
        setSearchType(type);
        setIsSearchOpen(false);
    };
    // Invierte el array de prospects
    const reversedProspects = [...prospects].reverse();

    // Divide los prospects invertidos en páginas
    const pages = [];
    for (let i = 0; i < reversedProspects.length; i += recordsPerPage) {
        const page = reversedProspects.slice(i, i + recordsPerPage);
        pages.push(page);
    }
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
        <div className="flex items-start justify-start h-screen" style={{ position: 'relative' }}>
            <Spinner className="h-10 w-10" color="blue" style={{ position: 'absolute', top: '200px', left: '70px' }} />
        </div>
    );

    if (error) return <Error message={error.message} />;

    // Calcula el número total de páginas
    const totalPages = pages.length;

    const onPageChange = (page) => setCurrentPage(page);



    return (

        <div className="flex flex-col min-h-screen">

            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 absolute top-0 left-0 z-0 w-full h-full"></div>

            <div data-dial-init class="fixed end-6 bottom-41 group">
                <div id="speed-dial-menu-bottom-right" class="flex flex-col items-center hidden mb-4 space-y-2">
                </div>
                <button type="button" data-dial-toggle="speed-dial-menu-bottom-right" aria-controls="speed-dial-menu-bottom-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                    <span class="sr-only">Open actions menu</span>
                </button>
            </div>
            <form className="max-w-lg mx-auto mb-8" style={{ position: 'relative', top: '-1cm', zIndex: 999 }}>
                <div className="flex">
                    <button
                        id="dropdown-button"
                        onClick={toggleDropdown}
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                    >
                        Filtrar por:
                        <svg
                            className={`w-2.5 h-2.5 ms-2.5 transition-transform ${isSearchOpen ? "rotate-180" : ""}`}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {isSearchOpen && (
                        <div
                            id="dropdown"
                            className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-12"
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleSearchTypeChange("Nombre")}>

                                        Nombre
                                        {searchType === "Nombre" && <IoMdCheckmark className="w-4 h-4 ml-2" />}
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => handleSearchTypeChange("Id")}>
                                        Id
                                        {searchType === "Id" && <IoMdCheckmark className="w-4 h-4 ml-2" />}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div className="relative w-full">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search Prospects:"
                            required
                            style={{ width: "300px" }} // Establece un ancho específico para el botón
                        />
                        <button
                            type="submit"
                            disabled={searchType === "Nombre"}
                            className={`absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white ${searchType === "Nombre" ? "bg-gray-400 border-gray-400 cursor-not-allowed" : "bg-blue-700 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}`}
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            <div className="flex-grow relative" style={{ paddingLeft: '250px', marginTop: '-30px' }}>
                <div className="overflow-x-auto">
                    <Table hoverable className="relative z-10 min-w-max" style={{ minWidth: '400px', marginLeft: 'auto' }}>
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
                            {pages[currentPage - 1] && pages[currentPage - 1].length > 0 ? (
                                pages[currentPage - 1].map((prospect, index) => (
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
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-4">
                                        No hay datos disponibles todavía.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>

                    </Table>
                </div>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            </div>
        </div>
    );
};

export default Prospects;
