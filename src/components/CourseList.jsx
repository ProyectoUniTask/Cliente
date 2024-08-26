import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allCourses = async () => {
      try {
        const URL = "http://localhost:8080/course";
        const respuesta = await axios.get(URL);
        setCourses(respuesta.data);
      } catch (error) {
        console.log("Error getting course", error);
        setError(error.response?.statusText);
      }
    };

    allCourses();
  }, []);

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/course/delete/${id}`);
      setCourses(courses.filter(course => course._id !== id));
      navigate('/course');
    } catch (error) {
      console.log("Error delete course", error);
      setError(error.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="titulo-principal">UniTask</h1>
      <nav className="nav-links">
        <Link to="/home"> Home </Link> | 
        <Link to="/project"> Project </Link> | 
        <Link to="/course"> Course </Link> | 
        <Link to="/exam"> Exam </Link> | 
        <Link to="/grade"> Grade </Link> | 
        <Link to="/subject"> Subject </Link>
      </nav>
      <div>
      <button 
          onClick={() => navigate(`/course/new`)} 
          className="btn-new">
          Add Course
          </button>
      </div>
      <div className="list">
        <div className="grid">
          {courses.map((course) => (
            <div key={course._id} className="box">
              <h2 className="titulo">{course.name}</h2>
              <p><strong>Description:</strong> {course.description}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Date:</strong> {new Date(course.date).toLocaleDateString()}</p>
              <button 
                  onClick={() => navigate(`/course/${course._id}/edit`)} 
                  className="btn-edit">
                  Edit
                </button>
                <button 
                  onClick={() => deleteCourse(course._id)}
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

export default CourseList;