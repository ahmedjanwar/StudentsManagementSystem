package com.school.restfulAPI.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.school.restfulAPI.jwt.TokenService;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class MySecurityConfig {

    @Autowired
    private MyAuthenticationProvider authenticationProvider;
    @Autowired
    private TokenService tokenService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .cors() // Enable CORS
                .and()
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/users/register").permitAll()
                                .requestMatchers("/api/students").permitAll()
                                .requestMatchers("/api/courses").permitAll()
                                .requestMatchers(HttpMethod.PUT, "/api/students").permitAll()
                                .anyRequest().authenticated()
                )
                .formLogin(withDefaults())
                .formLogin()
                .successHandler(new CustomAuthenticationSuccessHandler(tokenService));


        http.authenticationProvider(authenticationProvider);

        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        configuration.addAllowedOrigin("http://localhost:3000"); 
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
