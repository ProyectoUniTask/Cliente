import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventsCalendar.css";
import {Link } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const EventsCalendar = ({ events }) => {
  return (
    <div className="bigCalendar-container">
      <h1 className="principal-titulo">UniTask</h1>
      <h2 className="calendar-title">Activities Calendar</h2>
      <Link to="/project">Project</Link> | 
      <Link to="/subject"> Subject</Link> | 
      <Link to="/exam"> Exam</Link> | 
      <Link to="/grade"> Grade</Link>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
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
  );
};

export default EventsCalendar;