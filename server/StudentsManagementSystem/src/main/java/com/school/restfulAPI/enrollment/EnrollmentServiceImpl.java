package com.school.restfulAPI.enrollment;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.enrollment.Enrollment;
import com.school.restfulAPI.enrollment.EnrollmentId;
import com.school.restfulAPI.enrollment.EnrollmentRepository;
import com.school.restfulAPI.students.Student;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Override
    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    @Override
    public Enrollment getEnrollmentByStudentAndCourse(Student student, Course course) {
        EnrollmentId enrollmentId = new EnrollmentId(student, course);
        return enrollmentRepository.findById(enrollmentId).orElse(null);
    }

    @Override
    public void enrollStudentInCourse(Student student, Course course) {
        Enrollment enrollment = new Enrollment(student, course);
        enrollmentRepository.save(enrollment);
    }

    @Override
    public void withdrawStudentFromCourse(Student student, Course course) {
        EnrollmentId enrollmentId = new EnrollmentId(student, course);
        enrollmentRepository.deleteById(enrollmentId);
    }
}
