import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './pages/Cadastro/cadastro'
import Login from './pages/Login/login'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Cadastro /> */}
    <Login/>
  </React.StrictMode>
)
