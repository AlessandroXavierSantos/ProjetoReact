import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//IMPORTE DAS PAGINAS
import TelaInicial from './pages/telaInicial/telaInicial'
import Calendar from './pages/calendar/Calendar'
import Dashboard from './pages/dashboard/Dashboard'
import Register from './pages/register/Register'
import Cadastro from './Components/TelaCadastroPerfil/cadastro'



export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TelaInicial/>}/>
                <Route path='/Cadastro' element={<Cadastro/>}/>
                <Route  path='/dashboard' element={<Dashboard />}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route  path='/register' element={<Register />}/>
                
            </Routes>
        </BrowserRouter>
    )
}