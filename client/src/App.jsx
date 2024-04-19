import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./landing/Navbar";
import Login from "./components/IQenglish/login.jsx";
import { UserContextProvider } from './context/advisor.context.jsx';
import Dashboard from "./components/IQenglish/Dashboard.jsx"
import ProtectedRoute from "./components/IQenglish/middleware/ProtectedRoute.jsx";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/login" element={<Login />} />
          <Route path="/ma9ypwq1420s/sa9v5r3cd64q/prospects/secure/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/" element={
            <>
              <Navbar />
            </>
          } />
          {/* Agrega más rutas aquí si es necesario */}
        </Routes>
      </Router>
    </UserContextProvider>
  );
}



export default App;
