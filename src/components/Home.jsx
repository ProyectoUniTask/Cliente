import React from "react";
import EventsCalendar from "../components/EventsCalendar"; 
import {Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-contenedor">
        <nav>
        <Link to="/">Calendario</Link> |
        <Link to="/proyectos">Proyectos</Link> |
        <Link to="/examenes">Examenes</Link> |
        <Link to="/cursos">Cursos</Link> |
        <Link to="/notas">Notas</Link>
      </nav>
      <EventsCalendar />
    </div>
  );
};

export default Home;