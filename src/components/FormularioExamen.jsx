import "./Styles.css";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

const FormularioExamen = () => {
    const[formData, setFormData] = useState ({
        tituloexamen: '',
        materia: '',
        descripcion: '',
        fecha: '',
    });

    const[error, setError] = useState(null);
    const navigate = useNavigate ();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData ({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault ();

        try {
            const response = await axios.post('http://localhost:8080/project/FormularioExamen', formData);
            console.log(response.data);

            navigate ("/");
        } catch (error) {
            console.error (error);
            setError ("Error al agregar un examen. Intentalo de nuevo.");
        }
    };

    const handleCancel= () => {
        navigate("/");
    };

    return (
        <div className="contenedor">
            <form onSubmit={handleSubmit}>
                <h1 className='titulo-principal'>UniTask</h1>
                <h2 className="titulo">Nuevo Examen</h2>
                <div>
                    <label htmlFor="tituloexamen">Titulo:</label>
                    <input 
                    type="text"
                    id="tituloexamen"
                    name="tituloexamen"
                    value={formData.tituloexamen}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="materia">Materia:</label>
                    <select name="materia"
                            id="materia"
                            value={formData.materia}
                            onChange={handleChange}>
                                <option>Álgebra</option>
                                <option>Matematicas</option>
                                <option>Literatura</option>
                                <option>Lógica</option>
                                <option>Quimica</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="descripcion">Descripcion (opcional)</label>
                    <input 
                    type="text"
                    id="descripcion"
                    name="descipcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input 
                    type="data"
                    id="fecha"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}/>
                </div>

                <button className="btn" type="submit">Crear Examen</button>
                <button className="btn" type="button" onClick={handleCancel}>Cancelar</button>

                <div className="error-mensaje">{error}</div>
            </form>
        </div>
    );
};

export default FormularioExamen;