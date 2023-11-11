package com.school.restfulAPI.courses;

import java.util.List;
import com.school.restfulAPI.courses.Course;

public interface CourseService {
    List<Course> getAllCourses();
    Course getCourseById(Long id);
    void addCourse(Course course);
    void updateCourse(Long id, Course course);
    void deleteCourse(Long id);
}
