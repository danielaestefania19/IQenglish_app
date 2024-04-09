import React, { useState } from "react";
import useUser from '../hooks/useAdvisor.jsx'
import { useEffect } from "react";
import './Login.css'

export default function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isLoginLoading, hasLoginError, loginAdminClient, isLogged} = useUser()


  useEffect(() => {
    if (isLogged) {
      console.log("Esta autenticado")
      onLogin && onLogin()

    }
  }, [isLogged, onLogin])

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAdminClient({ username, password })
  };

  return (
    <>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading &&
        <form className='form' onSubmit={handleSubmit}>
          <label>
            username
            <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          </label>

          <label>
            password
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>

          <button className='btn'>Login</button>
        </form>
      }
      {
        hasLoginError && <strong>Credentials are invalid</strong>
      }
    </>
  );
}