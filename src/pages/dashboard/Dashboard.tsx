import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import React from 'react'

// Components
import Header from '../../Components/header'
import Buttons from '../../Components/buttons'
import Horario from '../../Components/container_dashboard'

function Dashboard(){
    return(
        <div>
            <section className="top">
                <Header />
            </section>
            <section className="mid">
                <Horario/>
            </section>
            <section className="bottom">

            </section>
        </div>
    )
}

export default Dashboard