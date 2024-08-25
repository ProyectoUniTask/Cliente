import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allSubjects = async () => {
      try {
        const URL = "http://localhost:8080/subject";
        const respuesta = await axios.get(URL);
        setSubjects(respuesta.data);
      } catch (error) {
        console.log("Error getting subject", error);
        setError(error.response?.statusText);
      }
    };

    allSubjects();
  }, []);

  const deleteSubject = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/subject/delete/${id}`);
      setSubjects(subjects.filter(subject => subject._id !== id));
      navigate('/subject');
    } catch (error) {
      console.log("Error delete", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="titulo-principal">UniTask</h1>
      <Link to="/home"> Home </Link> | 
      <Link to="/project"> Project </Link> | 
      <Link to="/subject"> Subject </Link> | 
      <Link to="/exam"> Exam </Link> | 
      <Link to="/grade"> Grade </Link>
      <div>
      <button 
          onClick={() => navigate(`/subject/new`)} 
          className="btn-new">
          Add Subject
          </button>
      </div>
      <div className="list">
        <div className="grid">
          {subjects.map((subject) => (
            <div key={subject._id} className="box">
              <h2 className="titulo">{subject.name}</h2>
              <p><strong>Description:</strong> {subject.description}</p>
              <p><strong>Duration:</strong> {subject.duration}</p>
              <p><strong>Instructor:</strong> {subject.instructor}</p>
              <p><strong>Date:</strong> {new Date(subject.date).toLocaleDateString()}</p>
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
          ))}
        </div>
      </div>
      <div> {error}</div>
    </div>
  );
};

export default SubjectList;