import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./landing/Navbar"
import Body from "./landing/Body"
import Login from "./components/IQenglish/login.jsx";
import Footer from "./landing/Footer"
import Card from "./landing/Card"
import Blog from "./landing/Blog"
import Teachers from "./landing/Teachers"
import Mediun from "./landing/Mediun.jsx"
import Reviews from "./landing/Reviews.jsx"
import Metodo from "./landing/Metodo.jsx"
import Nosotros from "./landing/Nosotros.jsx"
import { UserContextProvider } from './context/advisor.context.jsx';
import Dashboard from "./components/IQenglish/Dashboard.jsx"
import ProtectedRoute from "./components/IQenglish/middleware/ProtectedRoute.jsx";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { ProviderModalIQ } from './components/IQenglish/Prospects/IQContextModal.jsx';
import {NextUIProvider} from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import Carousel from "./landing/Carousel.jsx"
 
function App() {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <ProviderModalIQ>
          <UserContextProvider>
            <ToastContainer />
            <Router>
              <Routes>
                <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/login" element={<Login />} />
                <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

                <Route path="/" element={
                  <>
                    <Navbar /> {/* Navbar dentro de las rutas */}
                    <Body />
                    <Mediun/>
                    <Carousel/>
                    <Blog /> 
                    <Card/>
                    <Reviews/>
                    <Footer />
                  </>
                } />
                <Route path="/teachers" element={
                  <>
                    <Navbar /> {/* Navbar dentro de las rutas */}
                    <Teachers />
                    <Footer />
                  </>
                } />
                <Route path="/metodo" element={
                  <>
                    <Navbar /> {/* Navbar dentro de las rutas */}
                    <Metodo />
                    <Footer />
                  </>
                } />
                <Route path="/nosotros" element={
                  <>
                    <Navbar /> {/* Navbar dentro de las rutas */}
                    <Nosotros />
                    <Footer />
                  </>
                } />
              </Routes>
            </Router>
          </UserContextProvider>
        </ProviderModalIQ>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default App;
