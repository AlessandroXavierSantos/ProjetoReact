import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'

import logo from '../assets/icons/logo.png'
import account from '../assets/icons/account_circle.png'

function Header() {
    return (
        <div>
            <section className="top">
                <header>
                    <div className="icon">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="nav_pages">
                        <button autoFocus>Cadastro</button>
                        <button>Calendário</button>
                        <button>Horário</button>
                    </div>
                    <div className='icon'>
                        <img src={account} className="logo" />
                    </div>
                </header>
            </section>
        </div>
    )
}

export default Header
