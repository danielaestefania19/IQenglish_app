import React, { useState, useEffect } from "react";
import useProspects from "../../../hooks/prospects/useProspects.jsx";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Spinner } from "@material-tailwind/react";
import Error from "./Error.jsx";
import { IoTrash } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { Pagination } from "flowbite-react";
import { IoMdCheckmark } from "react-icons/io";
import createProspect from "../../../views/prospects/createProspect.js";
import { toast } from 'react-toastify';



const Prospects = () => {
    const { prospects, loading, error } = useProspects();

    const [openMenuIndex, setOpenMenuIndex] = useState(null);
    const [isOpen, setIsOpen] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState("")
    const [searchType, setSearchType] = useState("Nombre");
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentProspects, setCurrentProspects] = useState([]);


    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        phone_number: '',
        age: '',
        address: '' // Cambiado de 'addresses' a 'address'
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         await createProspect({
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            phone_number: formData.phone_number,
            age: formData.age,
            address: formData.address // Cambiado a 'address'
          });
          // Display a success toast notification
          toast.info('Su mensaje ha sido enviado correctamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            className: 'bg-white text-blue-300', 
          });
      
        } catch (error) {
          console.error(error); // Maneja el error aquí
        }
      };

    // Estado para controlar si el modal está abierto o cerrado
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        let reversedProspects = prospects ? [...prospects].reverse() : null;

        if (reversedProspects) {
            setTotalPages(Math.ceil(reversedProspects.length / itemsPerPage));
            setCurrentProspects(reversedProspects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
        } else {
            setTotalPages(2);
            setCurrentProspects([]);
        }
    }, [prospects, currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const toggleDropdown = () => setIsSearchOpen(!isSearchOpen);


    const handleSearchTypeChange = (type) => {
        setSearchType(type);
        setIsSearchOpen(false);
    };


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



    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 absolute top-0 left-0 z-0 w-full h-full"></div>

            <div data-dial-init className="fixed end-6 bottom-41 group">
                <div id="speed-dial-menu-bottom-right" className="flex flex-col items-center hidden mb-4 space-y-2">
                </div>
                <button onClick={openModal} type="button" className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="sr-only">Open modal</span>
                </button>
            </div>


            {isModalOpen && (
    <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
        <div className="relative p-4 mx-auto mt-20 max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Crear Nuevo Prospecto
                </h3>
                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <form className="p-4 md:p-5">
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            id="floating_first_name"
                            value={formData.name}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Nombre
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="lastname"
                            id="floating_last_name"
                            value={formData.lastname}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_last_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Apellido
                        </label>
                    </div>
                </div>
                <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="tel"
                            pattern="[0-9]{2}\s[0-9]{4}\s[0-9]{4}" 
                            name="phone_number"
                            id="floating_phone"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Numero de teléfono (123-456-7890)
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="age"
                            id="floating_company"
                            value={formData.age}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_company"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Edad
                        </label>
                    </div>
                </div>
                <div className="relative z-20 mb-6">
                    <select
                        className="relative z-20 w-full appearance-none rounded-lg border border-stroke bg-transparent px-5 py-[10px] text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-black dark:border-dark-3"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona tu ubicacion</option>
                        <option value="Apodaca">Apodaca</option>
                        <option value="Cadereyta Jiménez">Cadereyta Jiménez</option>
                        <option value="García">García</option>
                        <option value="San Pedro Garza García">San Pedro Garza García</option>
                        <option value="General Escobedo">General Escobedo</option>
                        <option value="Guadalupe">Guadalupe</option>
                        <option value="Juárez">Juárez</option>
                        <option value="Monterrey">Monterrey</option>
                        <option value="Salinas Victoria">Salinas Victoria</option>
                        <option value="San Nicolás de los Garza">San Nicolás de los Garza</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="Santiago">Santiago</option>
                    </select>
                    <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-b-2 border-r-2 border-body-color"></span>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
)}


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
                <div className="overflow-x-hidden"> {/* Modificado overflow-x-hidden */}
                    <Table hoverable className="relative z-10 min-w-max" style={{ minWidth: '400px', marginLeft: 'auto' }}>
                        <TableHead>
                            <TableHeadCell className="p-4">
                                <Checkbox color="blue" />
                            </TableHeadCell>
                            <TableHeadCell>Nombre</TableHeadCell>
                            <TableHeadCell>Apellido</TableHeadCell>
                            <TableHeadCell>Email</TableHeadCell>
                            <TableHeadCell>Número de Teléfono</TableHeadCell>
                            <TableHeadCell>Dirección</TableHeadCell>
                            <TableHeadCell>Edad</TableHeadCell>
                            <TableHeadCell>
                                <span className="sr-only">Acciones</span>
                            </TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            {currentProspects.map((prospect, index) => (
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
                                    <TableCell>{prospect.addresses ? prospect.addresses : "No disponible"}</TableCell>
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
                </div>
                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
                </div>
            </div>
        </div>
    );
};

export default Prospects;
