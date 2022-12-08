import { Link, useLocation } from "react-router-dom";
import './styles.css'
import React from 'react'

import logo from '../assets/icons/logo.png'
import logout from '../assets/icons/logout.png'

function Header() {
    const location = useLocation();
    const path = location.pathname;
  
    const checkId = localStorage.getItem("id") !== null
    const type = localStorage.getItem("type")
    if(!checkId){
      window.location.href = "/"
    }

    const killSection = () =>{
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <div>
            <section className="top">
                <header>
                    <div className="icon">
                        <img src={logo} className="logo" />
                    </div>
                    <div className="nav_pages">
                        {
                            type == "user" ? (
                            <Link to='/register'>
                                <button className={path == "/register" ? "active" : ''}> Cadastro</button>
                            </Link>
                            ) : (
                                <div style={{display: "flex"}}> 
                                <Link to='/calendar'>
                                    <button className={path == "/calendar" ? "active" : ''}>Calendário</button>
                                </Link>
                                <Link to='/dashboard'>
                                    <button className={path == "/dashboard" ? "active" : ''}>Horário</button>
                                </Link>
                                </div>
                            )
                        }
                    </div>
                    <div className='icon' >
                        <abbr title="Fazer logout">
                            <img src={logout} className="logo" onClick={killSection}/>
                        </abbr>
                    </div>
                </header>
            </section>
        </div >
    )
}

export default Header
