import { useState } from 'react'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './style.css'

import imagemCadastro from '../../assets/imageCadastro.png'
import logo from '../../assets/logo2.png'
import { Form } from 'react-router-dom'

export default function cadastro(){
    return(
        <div className="cadastro">
            <div className="firstContainerCadastro">
                <div className="containerTituleCadastro">   
                    <h1 className="textTituleCadastro">Crie a sua conta e comece a <span className="textColorCadastro">administrar</span> a sua escola</h1>
                </div>
                <div className="containerInputsCadastro">
                    <div>
                        <label className="labelInput">Nome da Escola:</label>
                        <input type="text" className="inputsCadastro"/>
                    </div>
                    <div>
                        <label className="labelInput">CNPJ da Escola:</label>
                        <input type="text" className="inputsCadastro"/>
                    </div>
                    <div>
                        <label className="labelInput">Email da Escola:</label>
                        <input type="text" className="inputsCadastro"/>
                    </div>
                    <div>
                        <label className="labelInput">Senha:</label>
                        <input type="password" className="inputsCadastro"/>
                    </div>
                    <div>
                        <label className="labelInput">Confirmar Senha:</label>
                        <input type="password" className="inputsCadastro"/>
                    </div>
                </div>
                <div>
                    <button className="btnCriarCadastro">Criar</button>
                </div>

                <div className="divOutros">
                    <h3 className="textLoginCadastro">Já tem uma conta? Clique
                        <Link to='/'>
                            <a className="textColorCadastro click"> aqui</a> 
                        </Link>
                    </h3>
                </div>
            </div>
            <div className="secondContainerCadastro">
                <div className="containerLogoCadastro">
                    <img src={logo}/>
                </div>
                <div className="containerImageCadastro">
                    <img src={imagemCadastro}/>
                </div>
            </div>
        </div>
    )
}