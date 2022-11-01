import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import React from 'react'

// Components
import Header from '../../Components/header'
import Buttons from '../../Components/buttons'
import Professor from '../../Components/container_prof'
import Turma from '../../Components/container_class'
import Disciplina from '../../Components/container_subject'

function Register() {
    return (
        <div>
            <section className="top">
                <Header />
            </section>
            <section className='mid' >
                <div className='professor' style={{ display: 'block' }}>
                    <Professor />
                </div>
                <div className='turmas' style={{ display: 'none' }}>
                    <Turma />
                </div>
                <div className='disciplinas' style={{ display: 'none' }}>
                    <Disciplina />
                </div>
            </section>
            <section className='bottom'>
                <Buttons />
            </section>
        </div>

    )
}

export default Register
