import './styles.css'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar'

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import { Class } from '../interfaces/classInterface';

//service 
import { getClasses } from '../Services/ClassService';

export default function MyCalendar(){

  const type = localStorage.getItem("type")
  if(type == "user"){
    window.location.href = "/"
  }
  const id: any = localStorage.getItem("id")
  let data: Class[] = []
  const getEventList = useCallback(async ()=>{
    await getClasses(id).then(async (res)=>{
      res.data.aulas.map((eachData: Class) => {
        data.push(eachData)
      })
    })
  }, [])

  useEffect(()=>{
    getEventList()
  })

  
  const localizer = momentLocalizer(moment)
  return(
    <Calendar
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    views={{"month": true, "agenda": true}}
    events={data}
    style={{ height: 600,
      width: 900,
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "20px"
    }}
  />
  )
}