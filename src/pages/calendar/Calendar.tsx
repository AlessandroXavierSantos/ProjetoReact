import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import React from 'react'

// Components
import Header from '../../Components/header'
import Materias from '../../Components/container_materials'
import MyCalendar from '../../Components/container_calendar'

function Calendar(){
    return(
        <div>
            <section className="top">
                <Header />
            </section>
            <section className="mid_calendar">        
                <MyCalendar/>
                <Materias/>
            </section>
            <section className="bottom">

            </section>
        </div>
    )
}

export default Calendar