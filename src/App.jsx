import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/EventsCalendar'; 
import SubjectList from './components/SubjectList';
import SubjectForm from './components/SubjectForm';
import SubjectEdit from './components/SubjectEdit';
import ExamList from './components/ExamList';
import ExamForm from './components/ExamForm';
import ExamEdit from './components/ExamEdit';

import './App.css';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/home" element={<MainComponent />} />
        <Route path="/subject" element = {<SubjectList/>}/>
        <Route path="/subject/new" element = {<SubjectForm/>}/>
        <Route path="/subject/:id/edit" element = {<SubjectEdit/>}/>
        <Route path="/exam" element = {<ExamList/>}/>
        <Route path="/exam/new" element = {<ExamForm/>}/>
        <Route path="/exam/:id/edit" element = {<ExamEdit/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
