package com.school.restfulAPI.courses;

import java.util.List;
import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.students.Student;

public interface CourseService {
    List<Course> getAllCourses();
    List<Student> getStudentsEnrolledInCourse(Long courseId);
    Course getCourseById(Long id);
    void addCourse(Course course);
    void updateCourse(Long id, Course course);
    void deleteCourse(Long id);
}
