	package com.school.restfulAPI;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

import com.school.restfulAPI.auth.CorsConfig;

@SpringBootApplication
@Import(CorsConfig.class)
@ComponentScan(basePackages = "com.school.restfulAPI")
public class StudentsManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentsManagementSystemApplication.class, args);
	}

}
