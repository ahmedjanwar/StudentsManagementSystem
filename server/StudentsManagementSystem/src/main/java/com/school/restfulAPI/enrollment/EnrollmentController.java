package com.school.restfulAPI.enrollment;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.enrollment.Enrollment;
import com.school.restfulAPI.enrollment.EnrollmentService;
import com.school.restfulAPI.students.Student;

@RestController
@RequestMapping("/api/enrollments")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @GetMapping
    public List<Enrollment> getAllEnrollments() {
        return enrollmentService.getAllEnrollments();
    }

    @GetMapping("/student/{studentId}/course/{courseId}")
    public Enrollment getEnrollmentByStudentAndCourse(
            @PathVariable Long studentId,
            @PathVariable Long courseId) {
        // Assuming you have methods to retrieve Student and Course by their IDs
        Student student = getStudentById(studentId);
        Course course = getCourseById(courseId);
        return enrollmentService.getEnrollmentByStudentAndCourse(student, course);
    }

    @PostMapping("/enroll")
    public void enrollStudentInCourse(
            @RequestParam Long studentId,
            @RequestParam Long courseId) {
        // Assuming you have methods to retrieve Student and Course by their IDs
        Student student = getStudentById(studentId);
        Course course = getCourseById(courseId);
        enrollmentService.enrollStudentInCourse(student, course);
    }

    @PostMapping("/withdraw")
    public void withdrawStudentFromCourse(
            @RequestParam Long studentId,
            @RequestParam Long courseId) {
        // Assuming you have methods to retrieve Student and Course by their IDs
        Student student = getStudentById(studentId);
        Course course = getCourseById(courseId);
        enrollmentService.withdrawStudentFromCourse(student, course);
    }

    // You should have methods to retrieve Student and Course by their IDs
    private Student getStudentById(Long studentId) {
        // Implement the logic to retrieve a Student by ID
        return null;
    }

    private Course getCourseById(Long courseId) {
        // Implement the logic to retrieve a Course by ID
        return null;
    }
}
