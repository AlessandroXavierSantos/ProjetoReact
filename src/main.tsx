import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './pages/Cadastro/cadastro'
import Login from './pages/Login/login'
import Register from './pages/register/Register'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Register/> */}
    {/* <Cadastro /> */}
    <Login/>
  </React.StrictMode>
)
