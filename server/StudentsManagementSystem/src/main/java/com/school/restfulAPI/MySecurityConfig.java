package com.school.restfulAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

//MySecurityConfig.java

@Configuration
public class MySecurityConfig {

 @Autowired
 public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
     // Configure your authentication provider here
 }
}
