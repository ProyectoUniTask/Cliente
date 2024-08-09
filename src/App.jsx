import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/EventsCalendar'; 
import './App.css';
function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
