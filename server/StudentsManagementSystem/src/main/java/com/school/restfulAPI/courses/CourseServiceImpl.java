package com.school.restfulAPI.courses;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.school.restfulAPI.courses.Course;
import com.school.restfulAPI.courses.CourseRepository;
import com.school.restfulAPI.enrollment.Enrollment;
import com.school.restfulAPI.enrollment.EnrollmentRepository;
import com.school.restfulAPI.students.Student;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(Long id) {
        return courseRepository.findById(id).orElse(null);
    }

    @Override
    public void addCourse(Course course) {
        courseRepository.save(course);
    }

    @Override
    public void updateCourse(Long id, Course course) {
        if (courseRepository.existsById(id)) {
            course.setId(id);
            courseRepository.save(course);
        }
    }
    

    @Override
    public void deleteCourse(Long id) {
        courseRepository.deleteById(id);
    }

	@Override
	public List<Student> getStudentsEnrolledInCourse(Long courseId) {
		// TODO Auto-generated method stub
		return null;
	}
}
