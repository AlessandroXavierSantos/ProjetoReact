import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'

// Assets
import professorstory from '../assets/storyset/Classroom-pana 1.png'



function Professor() {
    return (
        <div>
            <section className="professor">
                <div className='white_container'>
                    <div className='img_section'>
                        <img className='storyset' src={professorstory} />
                    </div>
                    <div className='vl'></div>
                    <div className='input_section'>
                        <h2 className='titulo_reg'>Cadastro de <span className='texto_roxo'>Professores</span></h2>
                        <br />
                        <form>
                            <section className='form'>
                                <label>Nome do Professor:</label>
                                <input type='text' className='input_reg' placeholder='Sandra'></input>
                            </section>
                            <section className='form'>
                                <label>Email do Professor:</label> 
                                <input type='email' className='input_reg' placeholder='Sandra@gmail.com.br'></input>
                            </section>
                            <section className='form'>
                                <label>Idade do Professor:</label> 
                                <input type='number' className='input_reg' placeholder='32'></input>
                            </section>
                            <section className='form'>
                                <label>Senha do Professor:</label> 
                                <input type='password' className='input_reg' placeholder='Mínimo de 8 caracteres'></input>
                            </section>
                            <section className='form'>
                                <label>Confirmar Senha:</label> 
                                <input type='password' className='input_reg' placeholder='Repita a senha'></input>
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

export default Professor