import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; 
import "./EventsCalendar.css"; 

const localizer = momentLocalizer(moment);

const myEventsList= [{
  title: "today",
  start: new Date('2019-05-05 10:22:00'),
  end: new Date('2019-05-05 10:42:00')
},
{
  title: "string",
   start: new Date('2019-05-05 12:22:00'),
  end: new Date('2019-05-05 13:42:00')
}]

class EventsCalendar extends Component {
  render() {
    return (
      <div className="bigCalendar-container">
        <h1 className="principal-titulo"> UniTask</h1>
        <h2 className="calendar-title">Calendario de Actividades</h2>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          messages={{
            next: "Next",
            previous: "Previous",
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day"
          }}
        />
      </div>
    );
  }
}

export default EventsCalendar;