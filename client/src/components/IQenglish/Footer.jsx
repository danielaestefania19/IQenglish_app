import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from "/home/alfredo/Escritorio/IQenglish_app/client/src/assets/logo3.jpeg";

function FooterPage() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={logo} className="h-12 w-12 me-3 rounded-full" alt="IQenglish Logo" />
            <span className="text-xl font-bold">IQenglish</span>
          </a>
          <FooterLinkGroup>
            <FooterLink href="#">Acerca de</FooterLink>
            <FooterLink href="#">Política de privacidad</FooterLink>
            <FooterLink href="#">Licencia</FooterLink>
            <FooterLink href="#">Contacto</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="#" by="IQenglish™" year={2024} />
      </div>
    </Footer>
  );
}

export default FooterPage;
