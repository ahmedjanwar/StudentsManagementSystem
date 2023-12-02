package com.school.restfulAPI.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtUtils {

    private static final String SECRET_KEY = "SMS"; // Replace with a secure secret key
    private static final long EXPIRATION_TIME_MS = 3600000; // 1 hour

    @SuppressWarnings("deprecation")
	public static String generateJwtToken(String username) {
        Date expirationDate = new Date(System.currentTimeMillis() + EXPIRATION_TIME_MS);

        return Jwts.builder()
                .setSubject(username)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

}
