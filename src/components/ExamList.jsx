import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const ExamList = () => {
  const [exams, setExams] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllExams = async () => {
      try {
        const URL = "http://localhost:8080/exam";
        const respuesta = await axios.get(URL);
        setExams(respuesta.data);
      } catch (error) {
        console.log("Error getting exam", error);
        setError(error.response?.statusText);
      }
    };

    getAllExams();
  }, []);

  const deleteExam = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/exam/delete/${id}`);
      setSubjects(exams.filter(exam => exam._id !== id));
      navigate('/exam');
    } catch (error) {
      console.log("Error delete", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="principal-titulo">UniTask</h1>
      <Link to="/home"> Home </Link> | 
      <Link to="/project"> Project</Link> | 
      <Link to="/subject"> Subject</Link> | 
      <Link to="/exam"> Exam</Link> | 
      <Link to="/grade"> Grade</Link>
      <div>
      <button 
          onClick={() => navigate(`/exam/new`)} 
          className="btn-new">
          Add Exam
          </button>
      </div>
      <div className="list-subjects">
        <div className="subject-grid">
          {exams.map((exam) => (
            <div key={exam._id} className="subject-box">
              <h2 className="titulo">{exam.title}</h2>
              <p><strong>Subject:</strong> {exam.subject}</p>
              <p><strong>Description:</strong> {exam.description}</p>
              <p><strong>Date:</strong> {new Date(exam.date).toLocaleDateString()}</p>
              <button 
                  onClick={() => navigate(`/exam/${exam._id}/edit`)} 
                  className="btn-edit">
                  Edit
                </button>
                <button 
                  onClick={() => deleteExam(exam._id)}
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

export default ExamList;