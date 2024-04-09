import { useCallback, useContext, useState, useEffect } from 'react';
import Context from '../context/advisor.context.jsx';
import loginAdmin from '../views/advisors/loginAdmin.js';
import verifyToken from '../views/advisors/verifytoken.js';

export default function useUser() {
  const { jwt, setJWT } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const loginAdminClient = useCallback(({ username, password }) => {
    setState({ loading: true, error: false });
    loginAdmin({ username, password })
      .then(token => {
        if (token) {
          window.sessionStorage.setItem('jwt', token);
          setState({ loading: false, error: false });
          setJWT(token);
        } else {
          window.sessionStorage.removeItem('jwt');
          setState({ loading: false, error: true });
        }
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt');
        setState({ loading: false, error: true });
        console.error(err);
      });
  }, [setJWT]);

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt');
    setJWT(null);
  }, [setJWT]);

  useEffect(() => {
    const checkToken = async () => {
      if (jwt && jwt !== "" && jwt !== "null") {
        const isValid = await verifyToken(jwt);
        if (!isValid) {
          // Si el token no es válido, cerrar la sesión
          logout();
        }
      }
    };
  
    checkToken();
  }, [jwt, logout]);
  

  return {
    isLogged: Boolean(jwt) && jwt !== "" && jwt !== "null",
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    loginAdminClient,
    logout
  };
}
