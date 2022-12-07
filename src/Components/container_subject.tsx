import { useState, useCallback, useEffect } from 'react'
import './styles.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import classstory from '../assets/storyset/Classroom-pana 3.png'

//services
import { getProfessores } from '../Services/TeacherService'
import { createDisciplina } from '../Services/DisciplineService'


function Disciplina() {

    const [professores, setProfessores] = useState<[string]>()
    const [nomeDisciplina, setNomeDisciplina] = useState<string>()
    const [professorId, setProfessorId] = useState<string>()

    const Professores = useCallback(async ()=>{
        await getProfessores().then(async (res)=>{
            setProfessores(res.data)
        })
    }, [])

    const handleSubmit = async () =>{
        console.log(nomeDisciplina)
        console.log(professorId)
        
        if(nomeDisciplina == "" || professorId == ""){
            toast.error('Preencha todos os campos corretamente!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                return
        }

        const data = await createDisciplina({
            nome: nomeDisciplina,
            professor_id: parseInt(professorId)
        })

        console.log(data)

        if(data.data.status == true){
            toast.success(data.data.msg, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });

                return
        }
        
        document.getElementById('form').reset()
    }

    useEffect(()=>{
        Professores()
    }, [Professores])


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
                        <form id='form'>
                            <section className='form'>
                                <label>Nome da Disciplina:</label>
                                <input type='text' className='input_reg' placeholder='Framework' onChange={(e)=>{setNomeDisciplina(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Nome do Professor:</label> 
                                <select name='class' className='input_reg' placeholder='Sandra' onChange={(e)=>{setProfessorId(e.target.value)}}>
                                <option value="null" className='selectRegOption'>Selecione o professor</option>
                                    {
                                        professores?.map((eachProfessor: any)=>{
                                            return(
                                                <option className="selectRegOption" value={eachProfessor.id}>{eachProfessor.nome}</option>
                                            )
                                        })
                                    }
                                </select>
                            </section>
                            <section className='button'>
                                <button type='button' className='register_btn' onClick={handleSubmit}>Cadastrar</button>
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

export default Disciplina