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
                    <div className="">
                        <label>Email: </label>
                        <input type="text" className="inputs"/>
                    </div>
                </form>
            </div>
        </div>
    )
}