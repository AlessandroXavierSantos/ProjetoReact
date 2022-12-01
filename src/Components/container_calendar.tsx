import './styles.css'
import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import { Calendar, Event, momentLocalizer } from 'react-big-calendar'

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'

import { getClasses } from '../Services/ClassService';
import { Class } from '../interfaces/classInterface';

export default function MyCalendar(){

  const localizer = momentLocalizer(moment)
  const [myEventsList, setMyEventsList] = useState<Class[]>()
  
  const getEventList = useCallback(async ()=>{
    await getClasses(1).then(async (res)=>{
      // setMyEventsList(res.data)
      console.log(res)
    })
  }, [])

  useEffect(()=>{
    getEventList()
  })

  return(
    <Calendar
    localizer={localizer}
    defaultDate={new Date()}
    defaultView="month"
    views={{"month": true, "agenda": true}}
    events={myEventsList}
    style={{ height: 600,
      width: 900,
      backgroundColor: "white",
      borderRadius: "20px",
      padding: "20px"
    }}
  />
  )
}