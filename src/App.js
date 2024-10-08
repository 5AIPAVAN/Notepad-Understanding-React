import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState';

import Login from './components/Login';
import Signup from './components/Signup';
import AllNotes from './components/AllNotes';
function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="allnotes" element={<AllNotes/>}/> 
      </Routes>
      </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
