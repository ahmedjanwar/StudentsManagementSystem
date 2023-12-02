package com.school.restfulAPI.users;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password_hash;
    
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Return the list of authorities/roles for the user
        // You might need to adjust this based on your user model
        return null;
    }
    
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password_hash;
	}
	public void setPassword(String password) {
		this.password_hash = password;
	}


}
