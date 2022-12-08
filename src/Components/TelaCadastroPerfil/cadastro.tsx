import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import imagemCadastro from '../../assets/imageCadastro.png'
import logo from '../../assets/logo2.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//services
import { createUser } from '../../Services/UserService'

export default function cadastro(){

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [repeteSenha, setRepeteSenha] = useState("")

    //loading screen
    const [loading, setLoading] = useState("none")

    const handleSubmit = async () => {

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
            return
        }

        setLoading("flex")
        const data = await createUser({
            nome: nome,
            email: email,
            senha: senha
        })
    
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
            
            setLoading("none")
            return
        }

        if(data.data.status == true){
            localStorage.clear()
            localStorage.setItem("id", data.data.userToCreate.id)
            localStorage.setItem("type", "user")
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

        window.location.href = "/register"
        
        setLoading("none")
    }

    return(
        <div className="cadastro">
            <div className="firstContainerCadastro">
                <div className="containerTituleCadastro">   
                    <h1 className="textTituleCadastro">Crie a sua conta e comece a <span className="textColorCadastro">administrar</span> a sua escola</h1>
                </div>
                <div className="containerInputsCadastro">
                    <div>
                        <label className="labelInput">Nome da Escola:</label>
                        <input type="text" className="inputsCadastro" onChange={(e)=>{setNome(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="labelInput">Email da Escola:</label>
                        <input type="text" className="inputsCadastro" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="labelInput">Senha:</label>
                        <input type="password" className="inputsCadastro" onChange={(e)=>{setSenha(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="labelInput">Confirmar Senha:</label>
                        <input type="password" className="inputsCadastro" onChange={(e)=>{setRepeteSenha(e.target.value)}}/>
                    </div>
                </div>
                <div>
                    <button className="btnCriarCadastro" onClick={handleSubmit}>Criar</button>
                </div>

                <div className="divOutros">
                    <h3 className="textLoginCadastro">Já tem uma conta? Clique
                        <Link to='/'>
                            <a className="textColorCadastro click"> aqui</a> 
                        </Link>
                    </h3>
                </div>
                
                <div className='loading2' style={{display: loading}}></div>
            </div>
            <div className="secondContainerCadastro">
                <div className="containerLogoCadastro">
                    <img src={logo}/>
                </div>
                <div className="containerImageCadastro">
                    <img src={imagemCadastro}/>
                </div>
            </div>
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
        </div>
    )
}