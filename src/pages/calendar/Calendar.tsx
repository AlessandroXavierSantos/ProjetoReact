import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import React from 'react'

// Components
import Header from '../../components/header'
import Buttons from '../../components/buttons'
import Calendario from '../../components/container_calendar'
import Materias from '../../components/container_materials'

function Calendar(){
    return(
        <div>
            <section className="top">
                <Header />
            </section>
            <section className="mid_calendar">
                <Calendario/>
                <Materias/>
            </section>
            <section className="bottom">

            </section>
        </div>
    )
}

export default Calendar