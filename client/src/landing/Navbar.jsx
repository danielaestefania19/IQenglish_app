import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom'; // Renombrado como RouterLink
import hamburguer from "../assets/hamburger.png"
import logo from "../assets/logo_vec.png";
import {Dropdown, DropdownTrigger, DropdownMenu, Button, DropdownItem, Link} from "@nextui-org/react";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1270);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1270);
    };

    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  return (
    <div className="relative -mx-0 flex items-center justify-between bg-primary">
      <div className="w-60 max-w-full px-12 flex-shrink-0 mx-16">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} alt="Logo" className="h-[130px]  w-auto transform scale-150" />
        </a>
      </div>

      {isSmallScreen ? (
          <div className="relative">
          <Dropdown>
            <DropdownTrigger>
              <Button variant="solid" size="md" color="secondprimary">
                <img src={hamburguer} alt="Menu" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Navigation">
              <DropdownItem key="home" href="/">Inicio</DropdownItem>
              <DropdownItem key="teachers" href="/teachers">Aprende</DropdownItem>
              <DropdownItem key="method" href="/metodo">Método</DropdownItem>
              <DropdownItem key="about" href="/nosotros">Sobre Nosotros</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Link href="/">Inicio</Link>
            <Link href="/teachers">Aprende</Link>
            <Link href="/metodo">Método</Link>
            <Link href="/nosotros">Sobre Nosotros</Link>
          </div>
        </div>
         
      ) : (
        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
          <div>
            <nav
              className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11 'hidden'`}
              id="navbarCollapse"
            >
              <ul className="block lg:flex">
                <li>
                  <RouterLink to="/" href="javascript:void(0)" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-black dark:text-white lg:ml-10 lg:inline-flex">
                    Inicio
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/teachers" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-black dark:text-white lg:ml-10 lg:inline-flex">
                    Aprende
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/metodo" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-black dark:text-white lg:ml-10 lg:inline-flex">
                    Metodo 
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/nosotros" className="flex  font-semibold py-2 text-base font-medium text-white hover:text-black dark:text-white lg:ml-10 lg:inline-flex">
                    Sobre Nosotros 
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
