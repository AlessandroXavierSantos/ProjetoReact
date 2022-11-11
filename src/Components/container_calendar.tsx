import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'

// Assets
import calendar from '../assets/storyset/Calendar-pana 1.png'

export default function Calendario() {
    const [monthSelected, setMonthSelected] = useState(0);
    const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('br', { month: 'long' }))
    console.log(months)

    return (
        <div>
            <div className='calendar'>
                <div className='content'>

                    <section className="calendario">
                        <div className="title">
                            <img src={calendar} />
                            <div className="title_text">
                                Calendário <br />
                                <span> de Disciplinas</span>
                            </div>
                        </div>
                        <div className='datetime'>
                            <table cellSpacing="0">
                                <tr>
                                    <th>DOM</th>
                                    <th>SEG</th>
                                    <th>TER</th>
                                    <th>QUA</th>
                                    <th>QUI</th>
                                    <th>SEX</th>
                                    <th>SAB</th>
                                </tr>
                                <tr>
                                    <td>
                                        {/* <div className="subject_cont">a</div>
                                        <div className="subject_cont">a</div>
                                        <div className="subject_cont">a</div>
                                        <div className="subject_cont">a</div> */}
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                    </section>

                    <section className="meses">
                        <h4> Meses </h4>
                        <div className='buttons'>
                            {
                                months.map((month, index) => (
                                    <button key={index} onClick={() => setMonthSelected(index)}  className={`month_btn ${index == monthSelected ? "active" : ""}`} >{month}</button>
                                )
                                )
                            }
                        </div>
                    </section>

                </div>
            </div>
        </div>
    )
}