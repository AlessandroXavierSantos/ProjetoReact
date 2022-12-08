import './styles.css'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assets
import hourglass from '../assets/storyset/Classroom-pana 4.png'

//services
import { getProfessores } from '../Services/TeacherService'
import { getDisciplines } from '../Services/DisciplineService'
import { createClass } from '../Services/ClassService';

function Horario() {

    const type = localStorage.getItem("type")
    if(type == "user"){
      window.location.href = "/"
    }

    //valores a serem salvos
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nomeAula, setNomeAula] = useState("")
    const [disciplinaId, setDiscplinaId] = useState(-1) 

    // data from services
    const [disciplinas, setDisciplinas]: any = useState()

    const Disciplines = useCallback(async ()=>{
        await getDisciplines().then(async (res)=>{
            setDisciplinas(res.data)
        })
    }, [])

    const handleSubmit = async () =>{

        if(nomeAula == "" || disciplinaId == -1){
            toast.error("Preencha todos os campos corretamente!", {
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

        if(startDate > endDate){
            toast.error("Selecione as datas corretamente!", {
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
        setStartDate(startDate.setDate(startDate.getDate() + 1))
        setEndDate(endDate.setDate(endDate.getDate() + 1))
        if(localStorage.getItem("id") !== null){
            const id: number = parseInt(localStorage.getItem("id"))
            const data = await createClass({
                title: nomeAula,
                start: startDate,
                end: endDate,
                id_professor: id
            })
            console.log(id)

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
                })
            }
        }
        else{
            window.location.href = "/"
        }

        document.getElementById('form').reset()
    }

    useEffect(()=>{
        Disciplines()
    }, [Disciplines])

    return (
        <div>
            <section className="professor">
                <div className='white_containerv2'>
                <div className='input_section'>
                        <h2 className='titulo_reg'>Cadastro de <span className='texto_roxo'>Horários</span></h2>
                        <br />
                        <form id='form'>
                            <section className='form'>
                                <label>Nome da aula:</label> 
                                <input name='professor' className='input_reg' placeholder='Sandra' onChange={(e)=>{setNomeAula(e.target.value)}}/>
                            </section>
                            <section className='form'>
                                <label>Selecione a Disciplina:</label> 
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
                            <section className='form'>
                                <label>Inicio das aulas:</label> 
                                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}  className="input_reg margin" />
                            </section>
                            <section className='form'>
                                <label>Fim das aulas:</label> 
                                <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)}  className="input_reg margin2" />
                            </section>
                            <section className='button' style={{marginTop: "-3px"}}>
                                <button type='button' className='register_btn' onClick={handleSubmit}>Cadastrar</button>
                            </section>
                        </form>
                    </div>
                    <div className='vl'></div>
                    <div className='img_section'>
                        <img className='storyset' src={hourglass} />
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
            </section>
        </div>
    )
}

export default Horario