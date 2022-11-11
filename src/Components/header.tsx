import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Link, useNavigate, useLocation } from "react-router-dom";
import './styles.css'
import React from 'react'

import logo from '../assets/icons/logo.png'
import account from '../assets/icons/account_circle.png'

function Header() {
    const location = useLocation();
    const path = location.pathname;
  
    return (
        <div>
            <section className="top">
                <header>
                    <div className="icon">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="nav_pages">
                        <Link to='/register'>
                            <button className={path == "/register" ? "active" : ''}> Cadastro</button>
                        </Link>
                        <Link to='/calendar'>
                            <button className={path == "/calendar" ? "active" : ''}>Calendário</button>
                        </Link>
                        <Link to='/dashboard'>
                            <button className={path == "/dashboard" ? "active" : ''}>Horário</button>
                        </Link>
                    </div>
                    <div className='icon'>
                        <img src={account} className="logo" />
                    </div>
                </header>
            </section>
        </div >
    )
}

export default Header
