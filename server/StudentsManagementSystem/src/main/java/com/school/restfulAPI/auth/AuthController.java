package com.school.restfulAPI.auth;

import javax.naming.AuthenticationException;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private MyAuthenticationProvider authenticationProvider;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) throws AuthenticationException {
        org.springframework.security.core.Authentication authentication = authenticationProvider.authenticate(
		        new UsernamePasswordAuthenticationToken(username, password)
		);

		// If you reach here, authentication was successful
		return ResponseEntity.ok().header("Authorization", "Bearer " + generateJwtToken(username)).body("Login successful");
    }

    private String generateJwtToken(String username) {
        // Implement your JWT token generation logic here
        // Use JwtUtils or any library to generate the token
        return "SMS";
    }
}
