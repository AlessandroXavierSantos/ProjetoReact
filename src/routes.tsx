import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//IMPORTE DAS PAGINAS
import TelaInicial from './pages/telaInicial/telaInicial'



export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<TelaInicial/>}/>
            </Routes>
        </BrowserRouter>
    )
}