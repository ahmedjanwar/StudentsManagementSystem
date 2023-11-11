package com.school.restfulAPI.students;

import java.util.List;

public interface StudentService {
    List<Student> getAllStudents();
    Student getStudentById(Long id);
    void addStudent(Student student);
    void updateStudent(Long id, Student student);
    void deleteStudent(Long id);
}
