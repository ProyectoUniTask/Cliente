import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventsCalendar.css";
import { Link } from 'react-router-dom';
import FrasesAleatoria from '../components/FraseAleatoria'; 

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ events }) => {

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: event.color, 
        borderRadius: '5px',
        color: 'black',
        fontSize: '15px',
        fontWeight: 'bold',
        border: '0px',
        display: 'flex',              
        alignItems: 'center',         
        justifyContent: 'center',    
        textAlign: 'center'  
      }
    };
  };

  return (
    <div className="bigCalendar-container">
      <h1 className="principal-titulo">UniTask</h1>
      <h2 className="calendar-title">Activities Calendar</h2>
      <FrasesAleatoria></FrasesAleatoria>
      <Link to="/project">Project</Link> | 
      <Link to="/subject"> Subject</Link> | 
      <Link to="/exam"> Exam</Link> | 
      <Link to="/grade"> Grade</Link>
      <div className="contenido">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 850, width: 1100, margin: "20px"}}
        eventPropGetter={eventPropGetter} 
        messages={{
          next: "Next",
          previous: "Previous",
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
      />
      </div>
    </div>
  );
};

export default EventsCalendar;