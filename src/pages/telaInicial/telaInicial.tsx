import { useState } from 'react'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo2.png'
import imagemLogin from '../../assets/imagemLogin.png'
//COMPONENTES
import Cadastro from '../../Components/TelaCadastroPerfil/cadastro'
import Login from '../../Components/TelaCadastroPerfil/login'

export default function telaInicial(){
    const [form, setForm] = useState('');
    const [containerClass, setContainerClass] = useState('firstContainer')
    const [loginClass, setLoginClass] = useState('login')
    const [showLogo, setShowLogo] = useState('show')
    const [component, setComponent] = useState('login')

    const changeToCadastro = ()=>{
        setContainerClass('firstContainer animation');
        setTimeout(()=> {
            setContainerClass('firstContainer');
            setLoginClass('login-reverse')
            setShowLogo('none')
            // document.location.href="/cadastro";
        }, 1400)
    }

    return(
        <div className="telaInicial">
            <div className="firstDiv">
                <Login/>
            </div>
            {/* <Cadastro/> */}
        </div>
    )
}