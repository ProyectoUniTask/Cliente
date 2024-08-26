import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseForm = () => {
  const [course, setCourse] = useState({
    name: '',
    description: '',
    duration: '',
    instructor: '',
    date: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:8080/course/new", course
      );
      console.log(response);
      setCourse({
        name: '',
        description: '',
        duration: '',
        instructor: '',
        date: ''
      });
      navigate("/course"); 
    } catch (error) {
      console.log(error);
      alert('Error adding course. Please try again.'); 
    }
  };

  const handleCancel = () => {
    navigate("/course");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="titulo-principal">UniTask</h1>
      <h2 className="titulo-secundario">New Course</h2>
      <div>
        <label>Name:</label>
        <input 
        type="text" 
        name="name" 
        value={course.name} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Description:</label>
        <input 
        type="text" 
        name="description" 
        value={course.description} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Duration:</label>
        <input 
        type="text" 
        name="duration" 
        value={course.duration} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Instructor:</label>
        <input 
        type="text" 
        name="instructor" 
        value={course.instructor} 
        onChange={handleChange} 
        required 
        />
      </div>
      <div>
        <label>Date:</label>
        <input 
        type="date" 
        name="date" 
        value={course.date} 
        onChange={handleChange}
        />
      </div>
      <button className="boton" type="submit">Add Course</button>
      <button className="boton" type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default CourseForm;