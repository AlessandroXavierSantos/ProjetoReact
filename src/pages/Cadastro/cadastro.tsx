import { useState } from 'react'
import React from 'react'
import './style.css'
import login from '../Login/login'

import imagemCadastro from '../../assets/imageCadastro.png'
import logo from '../../assets/logo.png'

export default function cadastro(){
    return(
        <div className="cadastro">
            <div className="firstContainer">
                <div className="containerTitule">   
                    <h1 className="textTitule">Crie a sua conta e comece a <span className="textColor">administrar</span> a sua escola</h1>
                </div>
                <div className="containerInputs">
                    <div>
                        <label>Nome da Escola:</label>
                        <input type="text" className="inputs"/>
                    </div>
                    <div>
                        <label>CNPJ da Escola:</label>
                        <input type="text" className="inputs"/>
                    </div>
                    <div>
                        <label>Email da Escola:</label>
                        <input type="text" className="inputs"/>
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type="password" className="inputs "/>
                    </div>
                    <div>
                        <label>Confirmar Senha:</label>
                        <input type="password" className="inputs"/>
                    </div>
                </div>
                <div>
                    <h3 className="textLogin">Já possui uma conta? Clique <span className="textColor click">aqui</span></h3>
                </div>
                <div>
                    <button className="btnCriar">Criar</button>
                </div>
            </div>
            <div className="secondContainer">
                <div className="containerLogo">
                    <img src={logo}/>
                </div>
                <div className="containerImage">
                    <img src={imagemCadastro}/>
                </div>
            </div>
        </div>
    )
}