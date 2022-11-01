import { useState } from 'react'
import React from 'react'
import './style.css'

import logo from '../../assets/logo.png'
import imagemLogin from '../../assets/imagemLogin.png'

export default function login(){
    return(
        <div className="login">
            <div className="secondContainer">
                <div className="containerLogo">
                    <img src={logo}/>
                </div>
                <div className="containerImage">
                    <img src={imagemLogin}/>
                </div>
            </div>
            <div className="firstContainer">
                <div className="containerTitule">   
                    <h1 className="textTitule">Já tem uma conta? Comece a ensinar e gestar de um jeito mais rápido e mais <span className="textColor">evoluído</span></h1>
                </div>
                <div className="containerInputs">
                    <div>
                        <label>CNPJ da Escola:</label>
                        <input type="text" className="inputs"/>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" className="inputs "/>
                    </div>
                    <div className="containerInput">
                        <div className="divInput">
                            <input type="radio" className="inputRadio"/>
                            <label>Escola</label>    
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="textLogin">Não tem uma conta ainda? Clique <span className="textColor click">aqui</span></h3>
                </div>
                <div>
                    <button className="btnEntrar">Entrar</button>
                </div>
            </div>
        </div>
    )
}