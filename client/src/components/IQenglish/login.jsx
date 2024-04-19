import { useState, useEffect } from 'react';
import useUser from "../../hooks/auth.jsx";
import logo from "/home/alfredo/Escritorio/IQenglish_app/client/src/assets/logo3.jpeg";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Spinner } from "@material-tailwind/react";
import FooterPage from './Footer.jsx';
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { isLoginLoading, hasLoginError, setHasLoginError, login, isLogged, isAdmin } = useUser();
    const navigate = useNavigate();


    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (isLogged) {
            navigate('/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/dashboard');
            onLogin && onLogin();
        } // No hay más else
    }, [isLogged, isAdmin, navigate, onLogin]);
    


    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    };

    const handleInputChange = (e, setInput, setError) => {
        setFormSubmitted(false);
        setInput(e.target.value);
        setError(false);
        if (hasLoginError) setHasLoginError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (username.trim() === "") {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
        if (password.trim() === "") {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
        if (username.trim() !== "" && password.trim() !== "") {
            if (hasLoginError) setHasLoginError(false);
            login({ username, password }).then(() => {
                navigate('/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/dashboard');
            });
        }
    };

    const showPasswordError = formSubmitted && passwordError;

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Spinner className="h-10 w-10" color="blue" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F2F4FE] flex flex-col items-center justify-center p-4">
            <div className="max-w-lg mb-auto relative" style={{ width: '500px', height: '500px', marginTop: '80px' }}>
                <div className="flex justify-center mb-8">
                <img src={logo} className="h-12 w-12 me-3 rounded-full" />

                </div>
                <div className="bg-white w-full rounded-lg p-8 mb-8 relative">
                    <div className="flex flex-col items-center gap-1 mb-8">
                        <h1 className="text-xl text-gray-900">Bienvenido</h1>
                        <p className="text-gray-400 text-sm">
                            Ingresa con tu usuario y tu contraseña
                        </p>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                className={`w-full border py-2 px-10 rounded-md outline-none ${usernameError ? 'border-red-500' : ''}`}
                                placeholder="Usuario"
                                onChange={(e) => handleInputChange(e, setUsername, setUsernameError)}
                                value={username}
                            />

                            {formSubmitted && usernameError && <span className="text-red-500 text-xs">Este campo es obligatorio</span>}
                        </div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`w-full border py-2 px-10 rounded-md outline-none ${showPasswordError ? 'border-red-500' : ''}`}
                                placeholder="Contraseña"
                                onChange={(e) => handleInputChange(e, setPassword, setPasswordError)}
                                value={password}
                            />
                            <button
                                onClick={handleShowPassword}
                                className="absolute right-2 top-[30%] transform -translate-y-1/2"
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                            <div style={{ height: '20px' }}>
                                {showPasswordError && <span className="text-red-500 text-xs">Este campo es obligatorio</span>}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 transition-colors flex justify-center items-center"
                            >
                                {isLoginLoading ? <Spinner className="h-5 w-5" color="white" /> : 'Iniciar sesión'}
                            </button>
                        </div>
                    </form>
                    {formSubmitted && hasLoginError && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-20">
                            <strong>Usuario o contraseña inválido</strong>
                        </div>
                    )}
                </div>
            </div>
            <FooterPage />
        </div>
    );
}

export default Login;
