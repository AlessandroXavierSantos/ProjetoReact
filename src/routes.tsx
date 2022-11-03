import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//IMPORTE DAS PAGINAS
import Cadastro from './pages/Cadastro/cadastro'
import Login from './pages/Login/login'



export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
        </BrowserRouter>
    )
}