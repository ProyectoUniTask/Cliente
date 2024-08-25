import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EventsCalendar from './EventsCalendar';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      // Obtener los sujetos
      const subjectsResponse = await Axios.get('http://localhost:8080/subject');
      const subjects = subjectsResponse.data.map(subject => ({
        title: subject.name,
        start: new Date(subject.date),
        end: new Date(subject.date),
        allDay: true
      }));

      // Obtener los exámenes 
      const examsResponse = await Axios.get('http://localhost:8080/exam');
      const exams = examsResponse.data.map(exam => ({
        title: exam.title,
        start: new Date(exam.date),
        end: new Date(exam.date),
        allDay: true
      }));

      setEvents([...subjects, ...exams]);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <EventsCalendar events={events} />
    </div>
  );
};

export default CalendarPage;