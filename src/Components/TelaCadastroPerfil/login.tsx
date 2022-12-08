import { useState } from 'react'
import React from 'react'
import './style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//services
import { loginProfessor } from '../../Services/TeacherService';
import { userLogin } from '../../Services/UserService';

export default function login(){

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [escolha, setEscolha] = useState<string>("")

    const [loading, setLoading] = useState("none")

    const handleRadio = (type: string) =>{
        type == "user" ? setEscolha("user") : setEscolha("professor")
    }

    const handleSubmit = async () =>{
        
        if(email === "" || senha === "" ){
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

        setLoading("flex")
        var data
        setTimeout(()=>{
            if(data == null){
                toast.error("Erro no sistema, tente novamente mais tarde!", {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })  
                setLoading("none")
            }
        }, 5000)

        if(escolha == "user"){
            data = await userLogin({
                email: email,
                senha: senha
            })
        }
        else{
            data = await loginProfessor({
                email: email,
                senha: senha
            }) 
        }
        console.log(data == null)


        console.log(data.data)
        if(data.data.status == false){
            toast.error(data.data.msg, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        }
        else{
            localStorage.clear()
            localStorage.setItem("id", data.data.id)
            localStorage.setItem("type", data.data.type)
            console.log(localStorage.getItem("id"))
            toast.success(data.data.msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            
            if(localStorage.getItem("type") == "user"){
                window.location.href = "/register"
            }

            if(localStorage.getItem("type") == "professor"){
                window.location.href = "/calendar"
            }

        }
        setLoading("none")
        
    }

    return(
        <div className="login">
            <div className="firstContainer">
                <div className="containerTitule">
                    <h1 className="textTitule">Já tem uma Conta? Comece a ensinar de um jeito mais rápido e mais <span className="textColor">evoluído</span></h1>
                </div>
            </div>
            <div className="containerForms">
                <form>
                    <div>
                        <label className="labelInput">Email: </label>
                        <input type="text" className="inputs" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="labelInput">Senha: </label>
                        <input type="password" className="inputs"  onChange={(e)=>{setSenha(e.target.value)}}/>
                    </div>                    
                    <div className='radioInputs'>                        
                        <input type="radio" value="user" name='escolha' onClick={()=>{handleRadio("user")}}/> Administrador
                        <input type="radio" value="professor" name='escolha' onClick={()=>{handleRadio("professor")}}/> Professor
                    </div>
                </form>
            </div>
            <div className="divOutros">
                <button className="btnCriarCadastro" type='button' onClick={handleSubmit}>Entrar</button>
            </div>
            <div className='loading' style={{display: loading}}></div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
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