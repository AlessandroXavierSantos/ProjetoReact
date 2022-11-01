import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'

// Assets
import classstory from '../assets/storyset/Classroom-pana 3.png'



function Disciplina() {
    return (
        <div>
            <section className="professor">
                <div className='white_container'>
                    <div className='img_section'>
                        <img className='storyset' src={classstory} />
                    </div>
                    <div className='vl'></div>
                    <div className='input_section'>
                        <h2 className='titulo_reg'>Cadastro de <span className='texto_roxo'>Disciplinas</span></h2>
                        <br />
                        <form>
                            <section className='form'>
                                <label>Nome da Disciplina:</label>
                                <input type='text' className='input_reg' placeholder='Framework'></input>
                            </section>
                            <section className='form'>
                                <label>Nome do Professor:</label> 
                                <input type='text' className='input_reg' placeholder='Sandra'></input>
                            </section>
                            <section className='button'>
                                <button type='submit' className='register_btn'>Cadastrar</button>
                            </section>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Disciplina