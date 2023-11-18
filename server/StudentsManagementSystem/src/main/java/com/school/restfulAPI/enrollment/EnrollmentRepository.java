package com.school.restfulAPI.enrollment;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.school.restfulAPI.enrollment.Enrollment;
import com.school.restfulAPI.enrollment.EnrollmentId;
import com.school.restfulAPI.courses.Course;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Object> {
	
}
