import React from 'react'
import { UserContextProvider } from "./context/advisor.context.jsx";
import Login from './prueba/index.jsx' // Asegúrate de que la ruta al archivo Login es correcta

function App() {

  return (
    <UserContextProvider>
      <Login  />
    </UserContextProvider>
  )
}

export default App
