import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import professorstory from '../assets/storyset/Classroom-pana 1.png'

//services
import { createProfessor } from '../Services/TeacherService';

function Professor() {

    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [repeteSenha, setRepeteSenha] = useState<string>("")

    //states para senha
    const [classe, setClasse] = useState<string>("input_reg")

    const handleSubmit = async () => {
        console.log(nome)
        console.log(email)
        console.log(senha)

        if(senha != repeteSenha){
            toast.error("As senhas não coincidem", {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setClasse("error") 

            return
        }
        setClasse("input_reg") 


        if(!email.includes("@") || !email.includes(".com")){
            toast.error("O email digitado não é valido", {
                position: "top-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            return
        }

        if(nome === "" || email === "" || senha === "" || repeteSenha === ""){
            toast.error("Preencha todos os campos corretamente", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            return
        }

        const data = await createProfessor({
            nome: nome,
            email: email,
            senha: senha
        })

        console.log(data)

        if(data.data.status == false){
            toast.error(data.data.msg, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

            return
        }

        if(data.data.status == true){
            toast.success(data.data.msg, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })

        }

        document.getElementById('form').reset()
    }

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
                        <form id='form'>
                            <section className='form'>
                                <label>Nome do Professor:</label>
                                <input type='text' className='input_reg' placeholder='Sandra' onChange={(e)=>{setNome(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Email do Professor:</label> 
                                <input type='email' className='input_reg' placeholder='Sandra@gmail.com.br' onChange={(e)=>{setEmail(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Idade do Professor:</label> 
                                <input type='number' className='input_reg' placeholder='32'></input>
                            </section>
                            <section className='form'>
                                <label>Senha do Professor:</label> 
                                <input type='password' className={classe} placeholder='Mínimo de 8 caracteres' onChange={(e)=>{setSenha(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Confirmar Senha:</label> 
                                <input type='password' className={classe} placeholder='Repita a senha' onChange={(e)=>{setRepeteSenha(e.target.value)}}></input>
                            </section>
                            <section className='button'>
                                <button type='button' className='register_btn' style={{marginTop: "-20px"}} onClick={handleSubmit} >Cadastrar</button>
                            </section>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                            />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Professor