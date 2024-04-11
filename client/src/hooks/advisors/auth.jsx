
import Context from '../../context/advisor.context.jsx';
import login_user from '../../views/advisors/login.js'; // Importa la función loginAdvisor
import verifyToken from '../../views/advisors/verifytoken.js';
import { jwtDecode } from "jwt-decode";

const user_admin = 'admin';

export default function useUser() {
  const { jwt, setJWT, isAdmin, setIsAdmin } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false });
    login_user({ username, password })
      .then(response => {
        const token = response.token; // Extrae el token de la respuesta
        if (token) {
          const decodedToken = jwtDecode(token); // Decodifica el token
          setIsAdmin(decodedToken.userForToken.userType === user_admin);
          window.localStorage.setItem('jwt', token);
          setState({ loading: false, error: false });
          setJWT(token);
        } else {
          window.localStorage.removeItem('jwt');
          setIsAdmin(false);
          setState({ loading: false, error: true });
        }
      })
      .catch(err => {
        window.localStorage.removeItem('jwt');
        setIsAdmin(false);
        setState({ loading: false, error: true });
        console.error(err);
      });
  }, [setJWT, setIsAdmin]);
  

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt');
    setJWT(null);
    setIsAdmin(false);
  }, [setJWT, setIsAdmin]);

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
    login,
    logout,
    isAdmin
  };
}
