package com.school.restfulAPI.enrollment;

import java.io.Serializable;
import java.util.Objects;

import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.students.Student;

public class EnrollmentId implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long student;
    private Long course;

    // Constructors

    public EnrollmentId() {
    }

    public EnrollmentId(Student student, Course course) {
        this.student = student.getId();
        this.course = course.getId();
    }

    // Equals and hashCode

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        EnrollmentId that = (EnrollmentId) obj;
        return Objects.equals(student, that.student) &&
                Objects.equals(course, that.course);
    }

    @Override
    public int hashCode() {
        return Objects.hash(student, course);
    }
}

