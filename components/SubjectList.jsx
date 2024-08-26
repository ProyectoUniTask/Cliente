import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allSubjects = async () => {
      try {
        const response = await Axios.get('http://localhost:8080/subject');
        console.log(response.data);
        setSubjects(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allSubjects();
  }, []);

  const deleteSubject = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/subject/delete/${id}`);
      setSubjects(subjects.filter(subject => subject._id !== id));
      navigate('/subject');
    } catch (error) {
      console.log("Error delete subjects", error);
      setError(error.response?.data?.message);
    }
  };

  const filteredSubjects = subjects.filter(subject => subject.day);

  const groupedSubjects = filteredSubjects.reduce((acc, subject) => {
    if (!acc[subject.day]) {
      acc[subject.day] = [];
    }
    acc[subject.day].push(subject);
    return acc;
  }, {});

  return (
    <div className="subject-list-container">
      <h1 className="titulo-principal">UniTask</h1>
      <nav className="nav-links">
        <Link to="/home"> Home </Link> | 
        <Link to="/project"> Project </Link> | 
        <Link to="/course"> Course </Link> | 
        <Link to="/exam"> Exam </Link> | 
        <Link to="/grade"> Grade </Link> 
      </nav>
      <div>
        <button 
          onClick={() => navigate(`/subject/new`)} 
          className="btn-new">
          Add Subject
        </button>
      </div>
      <div className="subject-list">
        {['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'].map(day => (
          <div key={day} className="day-column">
            <h2>{day}</h2>
            {groupedSubjects[day] && groupedSubjects[day].length > 0 ? (
              groupedSubjects[day].map(subject => (
                <div key={subject._id} className="subject-item">
                  <h3>{subject.name}</h3>
                  <p><strong>Name:</strong> {subject.name}</p>
                  <p><strong>Professor:</strong> {subject.professor}</p>
                  <p><strong>Semester:</strong> {subject.semester}</p>
                  <p><strong>Start Time:</strong> {subject.startTime}</p>
                  <p><strong>End Time:</strong> {subject.endTime}</p>
                  <button 
                  onClick={() => navigate(`/subject/${subject._id}/edit`)} 
                  className="btn-edit">
                  Edit
                </button>
                <button 
                  onClick={() => deleteSubject(subject._id)}
                  className="btn-delete">
                  Delete
              </button>
                </div>
              ))
            ) : (
              <p>No subjects</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;