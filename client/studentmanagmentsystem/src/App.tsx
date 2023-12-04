// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentsList from './Components/Students/StudentList';
import CoursesList from './Components/Courses/CoursesList';
import Header from './Components/Header';
import Login from './Components/Auth/Login';

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <Router>
      <div>
        <Header showLoginLink={!username} userData={username ? { username } : undefined} />
        <Routes>
          <Route path="/students" element={<StudentsList />} />
          <Route path="/courses" element={<CoursesList />} />
          <Route path="/login" element={<Login updateUsername={updateUsername} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
