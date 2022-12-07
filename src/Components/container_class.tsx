import { useCallback, useEffect, useState } from 'react'
import './styles.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import classstory from '../assets/storyset/Classroom-pana 2.png'

// services
import { CreateClass } from '../Services/ClassroomService';
import { getProfessores } from '../Services/TeacherService';
import { getDisciplines } from '../Services/DisciplineService';


function Turma() {

    const [professores, setProfessores]: any = useState()
    const [disciplinas, setDisciplinas]: any = useState()
    const [disciplinaNome, setDisciplinaNome]: any = useState() 
    const [limiteAlunos, setLimiteAlunos]: any = useState() 
    const [disciplinaId, setDiscplinaId]: any = useState() 
    const [professorDisciplina, setProfessorDisciplina]: any = useState() 

    const Professores = useCallback(async ()=>{
        await getProfessores().then(async (res)=>{
            setProfessores(res.data)
        })
    }, [])

    const Disciplines = useCallback(async ()=>{
        await getDisciplines().then(async (res)=>{
            setDisciplinas(res.data)
        })
    }, [])

    const handleSubmit = async () =>{

        if(disciplinaNome == undefined || limiteAlunos == undefined || professorDisciplina == undefined || isNaN(parseInt(limiteAlunos))){
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

        const data = await CreateClass({
           nome: disciplinaNome,
           limite_alunos: limiteAlunos,
           professor_id: parseInt(professorDisciplina),
           disciplina_id: parseInt(disciplinaId)
        })

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
                }); 
        }
        
        document.getElementById('form').reset()
    }

    useEffect(()=>{
        Professores()
        Disciplines()
    }, [Professores, Disciplines])
    

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
                        <form id='form'>
                            <section className='form'>
                                <label>Nome da Turma:</label>
                                <input type='text' className='input_reg' placeholder='3B1' onChange={(e)=>{setDisciplinaNome(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Limite de alunos da Turma:</label>
                                <input type='number' className='input_reg' placeholder='51' onChange={(e)=>{setLimiteAlunos(e.target.value)}}></input>
                            </section>
                            <section className='form'>
                                <label>Professor da turma:</label>
                                <select name='class' className='input_reg' placeholder='Sandra' onChange={(e)=>{setProfessorDisciplina(e.target.value)}}>
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
                            <section className='form'>
                                <label>Disciplina da turma:</label>
                                <select name='class' className='input_reg' placeholder='Sandra' onChange={(e)=>{setDiscplinaId(e.target.value)}}>
                                    <option value="null" className='selectRegOption'>Selecione a disciplina</option>
                                    {
                                        disciplinas?.map((eachDisciplina: any)=>{
                                            return(
                                                <option className="selectRegOption" value={eachDisciplina.id}>{eachDisciplina.nome}</option>
                                            )
                                        })
                                    }
                                </select>
                            </section>
                            <section className='button'>
                                <button type='button' className='register_btn' onClick={()=>{handleSubmit()}}>Cadastrar</button>
                            </section>
                        </form>
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
                </div>
            </section>
        </div>
    )
}

export default Turma