import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const SubjectEdit = () => {
  const [subject, setSubject] = useState({
    name: '',
    description: '',
    duration: '',
    instructor: '',
    date: ''
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const allSubject = async () => {
      try {
        const response = await Axios.get(`http://localhost:8080/subject/${id}`);
        const subjectData = response.data;
        setSubject({
          ...subjectData,
          date: formatDate(subjectData.date) 
        });
      } catch (error) {
        console.error('Error fetching subject', error);
        setError('Error fetching subject details.');
      }
    };

    allSubject();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject({ ...subject, [name]: value });
  };

  const updateSubject = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(`http://localhost:8080/subject/${id}/edit`, subject);
      navigate('/subject'); 
    } catch (error) {
      console.error('Error updating subject', error);
      setError('Error updating subject. Please try again.');
    }
  };

  const handleCancel = () => {
    navigate('/subject'); 
  };

  return (
    <div>
      <form onSubmit={updateSubject}>
      <h1 className="titulo-principal">UniTask</h1>
      <h2 className="titulo-secundario">Edit Subject</h2>
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
          <input type="date" name="date" value={subject.date} onChange={handleChange} />
        </div>
        <button className="boton" type="submit">Update Subject</button>
        <button className="boton" type="button" onClick={handleCancel}>Cancel</button>
        <div>{error}</div>
      </form>
    </div>
  );
};

export default SubjectEdit;