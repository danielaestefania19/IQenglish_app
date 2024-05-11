import logo1 from "../assets/logo1.jpeg";
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from "./ModalConext";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Usar el hook useContext para acceder al ModalContext
  const { isOpenModalSucess, isOpenModalError, isOpenModalReview } = useContext(ModalContext);

  return (

    <div className="container mx-auto ">
      <div className="relative -mx-4 flex items-center justify-between ">
        <div className="w-60 max-w-full px-4">
          {/* Renderizar el logo solo si ni el modal de éxito ni el de error están abiertos */}
          {!isOpenModalSucess && !isOpenModalError && !isOpenModalReview && (
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo1} alt="Logo" className="h-12 w-auto" /> {/* Aumentar el tamaño del logo */}
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">IQEnglish</span> {/* Aumentar el tamaño del texto */}
            </a>
          )}

        </div>
        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
          <div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${navbarOpen ? 'navbarTogglerActive' : ''}`}
              id="navbarToggler"
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
            <nav
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11 ${!navbarOpen ? 'hidden' : ''}`}
              id="navbarCollapse"
            >
              <ul className="block lg:flex">
                <li>
                  <Link to="/" href="javascript:void(0)" className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Hogar
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Equipo
                  </Link>
                </li>
                <li>
                <Link to="/metodo"className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Metodo 
                  </Link>
                </li>
                <li>
                <Link to="/nosotros"className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Sobre Nosotros 
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar