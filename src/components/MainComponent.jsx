import React, { useState } from 'react';
import SubjectForm from '../components/SubjectForm';
import ExamForm from '../components/ExamForm';
import CreateEventWithNoOverlap from '../components/CreateEventWithNoOverlap'; 

const MainComponent = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <SubjectForm addEvent={addEvent} />
      <ExamForm addEvent={addEvent} />
      <CreateEventWithNoOverlap
        localizer={localizer} 
        events={events}
        addEvent={addEvent}
      />
    </div>
  );
};

export default MainComponent;