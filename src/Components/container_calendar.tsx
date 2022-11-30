import './styles.css'
import React from 'react'

import { Calendar, Event, momentLocalizer } from 'react-big-calendar'

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'

const data = new Date()
data.setDate(data.getDate() - 1)
const outraData = new Date()
outraData.setDate(outraData.getDate() + 3)

const myEventsList: Array<Event> = [{
    title: "teste",
    start: data,
    end: outraData
},
{
  title: "teste1",
  start: data,
  end: outraData
},
{
  title: "test2e",
  start: data,
  end: outraData
}]

const localizer = momentLocalizer(moment)
const MyCalendar = () => (
    
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

export default MyCalendar