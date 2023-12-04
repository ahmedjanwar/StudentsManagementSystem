package com.school.restfulAPI.auth;

import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
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
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        try {
            org.springframework.security.core.Authentication authentication = authenticationProvider.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
            );

            // If you reach here, authentication was successful
            if (authentication instanceof UsernamePasswordAuthenticationToken) {
                String token = (String) authentication.getCredentials();
                return ResponseEntity.ok().header("Authorization", "Bearer " + token).body("Login successful: Token:" + token);
            } else {
                // Handle unexpected authentication result
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
            }
        } catch (AuthenticationException e) {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed: " + e.getMessage());
        }
    }
}
