import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../../api/api';
import './StudentsList.css';

const StudentsList: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    // Fetch all students when the component mounts
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const data = await fetchStudents();
      //console.log('Fetched Students:', data); // Log the fetched data
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDeleteStudent = async (id: number) => {
    try {
      await deleteStudent(id);
      // After successful deletion, fetch the updated list of students
      fetchAllStudents();
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.id.toString().includes(searchTerm)
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Students List</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Search by ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontSize: '1rem', padding: '10px', width: '900px'}}
        />
      </div>
      <div className="students-container">
        {filteredStudents.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-image-container">
              <img
                src={student.imageUrl || 'https://via.placeholder.com/150'}
                alt={`${student.firstName} ${student.lastName}`}
                className="student-image"
              />
            </div>
            <p>
              <strong>Id:</strong> {student.id}
            </p>
            <p>
              <strong>Name:</strong> {student.firstname} {student.lastname}
            </p>
            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsList;
