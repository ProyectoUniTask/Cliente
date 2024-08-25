import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

const SubjectForm = () => {
  const [subject, setSubject] = useState({
    name: '',
    description: '',
    duration: '',
    instructor: '',
    date: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject({ ...subject, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "http://localhost:8080/subject/new", subject
      );
      console.log(response);
      setSubject({
        name: '',
        description: '',
        duration: '',
        instructor: '',
        date: '',
    });
      navigate("/subject/new"); 
    } catch (error) {
      console.log(error);
      alert('Error adding subject. Please try again.'); 
    }
  };

  const handleCancel = () => {
    navigate("/subject");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="titulo-principal">UniTask</h1>
      <h2 className="titulo-secundario">New Subject</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={subject.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={subject.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" name="duration" value={subject.duration} onChange={handleChange} required />
      </div>
      <div>
        <label>Instructor:</label>
        <input type="text" name="instructor" value={subject.instructor} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={subject.date} onChange={handleChange}/>
      </div>
      <button className="boton" type="submit">Add Subject</button>
      <button className="boton" type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default SubjectForm;