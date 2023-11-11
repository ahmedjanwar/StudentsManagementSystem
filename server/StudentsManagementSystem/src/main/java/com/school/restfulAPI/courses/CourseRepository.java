package com.school.restfulAPI.courses;

import org.springframework.data.jpa.repository.JpaRepository;
import com.school.restfulAPI.courses.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
