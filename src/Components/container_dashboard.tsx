import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'

// Assets
import hourglass from '../assets/storyset/Classroom-pana 4.png'

function Horario() {
    return (
        <div>
            <section className="professor">
                <div className='white_containerv2'>
                <div className='input_section'>
                        <h2 className='titulo_reg'>Cadastro de <span className='texto_roxo'>Horários</span></h2>
                        <br />
                        <form>
                            <section className='form'>
                                <label>Selecione o Professor:</label>
                                <select name='professor' className='input_reg' placeholder='Sandra'></select>
                            </section>
                            <section className='form'>
                                <label>Selecione a Disciplina:</label> 
                                <select name='class' className='input_reg' placeholder='Sandra'></select>
                            </section>
                            <section className='form'>
                                <label>Selecione a Turma:</label> 
                                <select name='professor' className='input_reg' placeholder='Sandra'></select>
                            </section>
                            <section className='form'>
                                <label>Digite o Número de Dias:</label> 
                                <input type='number' className='input_reg' placeholder='0'></input>
                            </section>
                        </form>
                    </div>
                    <div className='vl'></div>
                    <div className='img_section'>
                        <img className='storyset' src={hourglass} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Horario