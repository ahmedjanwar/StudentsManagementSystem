// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'; // Import a CSS file for styling (create this file later)
import StudentsList from './Components/Students/StudentList';
import CoursesList from './Components/Courses/CoursesList';
import Header from './Components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/students" Component={StudentsList} />
          <Route path="/courses" Component={CoursesList} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
