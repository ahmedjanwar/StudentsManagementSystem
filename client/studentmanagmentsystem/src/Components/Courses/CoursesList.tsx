import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { fetchCourses, fetchEnrollments } from '../../api/api';
import './CourseList.css'; // Import a CSS file for styling (create this file later)

Modal.setAppElement('#root'); // Set the root element for accessibility

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolledStudents, setEnrolledStudents] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Fetch all courses when the component mounts
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const data = await fetchCourses();
      console.log('Fetched Courses:', data);
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleShowEnrolledStudents = async (id: number) => {
    try {
      const studentsData = await fetchEnrollments(id);
      console.log(`Enrolled Students in Course ${id}:`, studentsData);

      // Extract student data from the API response
      const enrolledStudents = studentsData.map((enrollment: any) => enrollment.student);

      setEnrolledStudents(enrolledStudents);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching enrolled students:', error);
    }
  };

  return (
    <div>
      <h2>Courses List</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <p>
              <strong>Id:</strong> {course.id}
            </p>
            <p>
              <strong>Name:</strong> {course.name}
            </p>
            <p>
              <strong>Teacher:</strong> {course.teacherName}
            </p>
            <button onClick={() => handleShowEnrolledStudents(course.id)}>Show Enrolled Students</button>
          </div>
        ))}
      </div>

      {/* Modal to display enrolled students */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Enrolled Students</h2>
        <div className="enrolled-students-container">
          {enrolledStudents.map((student) => (
            <div key={student.id} className="enrolled-student-card">
              <p>
                <strong>Id:</strong> {student.id}
              </p>
              <p>
                <strong>Name:</strong> {student.firstname} {student.lastname}
              </p>
              <p>
                <strong>Email:</strong> {student.email}
              </p>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default CourseList;
