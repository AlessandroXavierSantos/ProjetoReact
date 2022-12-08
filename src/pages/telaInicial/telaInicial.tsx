import { useState } from 'react'
import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
//COMPONENTES
import Login from '../../Components/TelaCadastroPerfil/login'

export default function telaInicial(){
    const [containerClass, setContainerClass] = useState('firstContainer')
    const [loginClass, setLoginClass] = useState('login')
    const [showLogo, setShowLogo] = useState('show')

    const changeToCadastro = ()=>{
        setContainerClass('firstContainer animation');
        setTimeout(()=> {
            setContainerClass('firstContainer');
            setLoginClass('login-reverse')
            setShowLogo('none')
        }, 1400)
    }

    return(
        <div className="telaInicial">
            <div>
                
            </div>
            <div className="firstDiv">
                <Login/>
                <div className="divOutros">
                    <h3 className="textLoginCadastro">Não tem uma conta ainda? Clique
                        <Link to='/cadastro'>
                            <a className="textColorCadastro click"> aqui</a> 
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    )
}