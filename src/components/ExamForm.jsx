import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const ExamForm = () => {
    const [exam, setExam] = useState({
        title: '',  
        subject: '',
        description: '',
        date: '',
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExam({ ...exam, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:8080/exam/new', exam);
            console.log(response);
            setExam({
                title: '',
                subject: '',
                description: '',
                date: '',
            });
            navigate("/exam");
        } catch (error) {
            console.error(error);
            setError("Error adding the exam. Please try again.");
        }
    };

    useEffect(() => {
        console.log(exam);
    }, [exam]);

    const handleCancel = () => {
        navigate("/exam");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1 className="titulo-principal">UniTask</h1>
                <h2 className="titulo-secundario">New Exam</h2>
                <div>
                    <label htmlFor="title">Title:</label> 
                    <input 
                        type="text"
                        id="title"  
                        name="title"  
                        value={exam.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input 
                        type="text"
                        id="subject"
                        name="subject"
                        value={exam.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description (optional):</label>
                    <input 
                        type="text"
                        id="description"
                        name="description"
                        value={exam.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="date">Date:</label>
                    <input 
                        type="date"
                        id="date"
                        name="date"
                        value={exam.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button className="boton" type="submit">Add Exam</button>
                <button className="boton" type="button" onClick={handleCancel}>Cancel</button>

                <div>{error}</div>
            </form>
        </div>
    );
};

export default ExamForm;