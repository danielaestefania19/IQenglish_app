import { Routes, Route } from 'react-router-dom';
import Navbar from "./landing/Navbar";
import Body from "./landing/Body";
import Login from "./components/IQenglish/login.jsx";
import Footer from "./landing/Footer";
import Card from "./landing/Card";
import Blog from "./landing/Blog";
import Mediun from "./landing/Mediun.jsx";
import Reviews from "./landing/Reviews.jsx";
import Nivelacion from "./landing/Nivelacion.jsx";
import { UserContextProvider } from './context/advisor.context.jsx';
import Dashboard from "./components/IQenglish/Dashboard.jsx";
import ProtectedRoute from "./components/IQenglish/middleware/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProviderModalIQ } from './components/IQenglish/Prospects/IQContextModal.jsx';
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import Carousel from "./landing/Carousel.jsx";
import ContactoFly from "./landing/ContactoFly.jsx";
import Course from "./landing/Course.jsx"
import Practica from "./landing/Practica.jsx"
import Teachers from "./team/Teachers.jsx";
import BodyTeachers from './team/BodyTeachers.jsx';
import Cards from "./team/Cards.jsx"
import ContactoFlyTeachers from "./team/ContactoTeachers.jsx"
import TeacherOne from './team/TeacherOne.jsx';
import TeacherSecond from './team/TeacherSecond.jsx';
import BodyNosotros from './nosotros/BodyNosotros.jsx';
import Nosotros from './nosotros/Nosotros.jsx';
import CardNosotros from './nosotros/CardNosotros.jsx';
import VideoNosotros from './nosotros/VideoNosotros.jsx';
import BodyMetodo from './metodo/BodyMetodo.jsx';


function App() {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <ProviderModalIQ>
          <UserContextProvider>
            <ToastContainer />
            <Routes>
              <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/login" element={<Login />} />
              <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path="/" element={
                <>
                  <Navbar />
                  <Body />
                  <ContactoFly />
                  <Mediun />
                  <Blog />
                  <Course />
  
                  <Practica />
                  <Carousel />
                  <Nivelacion />
                  <Card />
                  <Reviews />
                  <Footer />
                </>
              } />
              <Route path="/teachers" element={
                <>
                  <Navbar />
                  <BodyTeachers />
                  <ContactoFlyTeachers />
                  <Cards />
                  <TeacherOne />
                  <TeacherSecond />
                  <Teachers />
                  <Footer />
                </>
              } />
              <Route path="/metodo" element={
                <>
                  <Navbar />
                  <BodyMetodo />
                  <Footer />
                </>
              } />
              <Route path="/nosotros" element={
                <>
                  <Navbar />
                  <BodyNosotros/>
                  <Nosotros />
                  <CardNosotros/>
                  <VideoNosotros/>
                  <Footer />
                </>
              } />
            </Routes>
          </UserContextProvider>
        </ProviderModalIQ>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;