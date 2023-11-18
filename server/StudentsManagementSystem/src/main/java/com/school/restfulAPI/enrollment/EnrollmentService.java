package com.school.restfulAPI.enrollment;


import java.util.List;
import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.enrollment.Enrollment;
import com.school.restfulAPI.students.Student;

public interface EnrollmentService {
    List<Enrollment> getAllEnrollments();
    Enrollment getEnrollmentByStudentAndCourse(Student student, Course course);
    void enrollStudentInCourse(Student student, Course course);
    void withdrawStudentFromCourse(Student student, Course course);
}

