import { useState } from 'react'
import './styles.css'
import React from 'react'

// Assets
import classstory from '../assets/storyset/Classroom-pana 2.png'



function Turma() {
    return (
        <div>
            <section className="professor">
                <div className='white_container'>
                    <div className='img_section'>
                        <img className='storyset' src={classstory} />
                    </div>
                    <div className='vl'></div>
                    <div className='input_section'>
                        <h2 className='titulo_reg'>Cadastro de <span className='texto_roxo'>Turmas</span></h2>
                        <br />
                        <form>
                            <section className='form'>
                                <label>Nome da Turma:</label>
                                <input type='text' className='input_reg' placeholder='3B1'></input>
                            </section>
                            <section className='form'>
                                <label>Limite de alunos da Turma:</label> 
                                <input type='number' className='input_reg' placeholder='51'></input>
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

export default Turma