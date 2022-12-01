import { useState } from 'react'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'

import logo from '../../assets/logo2.png'
import imagemLogin from '../../assets/imagemLogin.png'


export default function login(){
    return(
        <div className="login">
            <div className="firstContainer">
                <div className="containerTitule">
                    <h1 className="textTitule">Já tem uma Conta? Comece a ensinar de um jeito mais rápido e mais <span className="textColor">evoluído</span></h1>
                </div>
            </div>
            <div className="containerForms">
                <form>
                    <div>
                        <label className="labelInput">Email: </label>
                        <input type="text" className="inputs"/>
                    </div>
                    <div>
                        <label className="labelInput">Senha: </label>
                        <input type="password" className="inputs"/>
                    </div>
                </form>
            </div>
            <div className="divOutros">
                <button className="btnCriarCadastro">Entrar</button>
            </div>
        </div>
    )
}