// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Import a CSS file for styling (create this file later)
import StudentsList from './Components/Students/StudentList';
import CoursesList from './Components/Courses/CoursesList';
import Header from './Components/Header';
import Login from './Components/Auth/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
            <Route path="/students" element={<StudentsList />} />
            <Route path="/courses" element={<CoursesList />} />
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
