package com.school.restfulAPI.enrollment;

import java.util.List;

public class EnrollmentDTO {

    private Long courseId;
    private List<Long> studentIds;
	public Long getCourseId() {
		return courseId;
	}
	public void setCourseId(Long courseId) {
		this.courseId = courseId;
	}
	public List<Long> getStudentIds() {
		return studentIds;
	}
	public void setStudentIds(List<Long> studentIds) {
		this.studentIds = studentIds;
	}

    // Constructors, getters, and setters

    // Implement constructors, getters, and setters as needed
}