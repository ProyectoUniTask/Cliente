import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register'; 
import CourseList from './components/CourseList';
import CourseForm from './components/CourseForm';
import CourseEdit from './components/CourseEdit';
import ExamList from './components/ExamList';
import ExamForm from './components/ExamForm';
import ExamEdit from './components/ExamEdit';
import SubjectList from './components/SubjectList';
import SubjectForm from './components/SubjectForm';
import SubjectEdit from './components/SubjectEdit';
import CalendarPage from './components/CalendarPage';

import './App.css';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/home" element={<CalendarPage />} />
        <Route path="/course" element = {<CourseList/>}/>
        <Route path="/course/new" element = {<CourseForm/>}/>
        <Route path="/course/:id/edit" element = {<CourseEdit/>}/>
        <Route path="/exam" element = {<ExamList/>}/>
        <Route path="/exam/new" element = {<ExamForm/>}/>
        <Route path="/exam/:id/edit" element = {<ExamEdit/>}/>
        <Route path="/subject" element = {<SubjectList/>}/>
        <Route path="/subject/new" element = {<SubjectForm/>}/>
        <Route path="/subject/:id/edit" element = {<SubjectEdit/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
