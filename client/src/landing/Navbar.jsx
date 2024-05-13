import logo from "../assets/logo_vec.png";
import { useState} from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);



  return (

      <div className="relative -mx-0 flex items-center justify-between bg-[#0A259C]">
   <div className="w-60 max-w-full px-12 flex-shrink-0 mx-16"> {/* Agregué 'mx-auto' para centrar horizontalmente */}
  <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} alt="Logo" className="h-50 w-auto transform scale-150" /> {/* Añade 'transform scale-110' para hacer el logo un 10% más grande */}
  </a>
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
                  <Link to="/" href="javascript:void(0)" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Hogar
                  </Link>
                </li>
                <li>
                  <Link to="/teachers" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/metodo" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Metodo 
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-primary dark:text-white lg:ml-10 lg:inline-flex">
                    Sobre Nosotros 
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    
  );
}

export default Navbar;