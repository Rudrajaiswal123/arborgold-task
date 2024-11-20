import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Assessments1 from './pages/Assessments1';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from './components/Header';
import Assessments2 from './pages/Assessments2';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Assessments1/>} />
        <Route path="/assessments2" element={<Assessments2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
