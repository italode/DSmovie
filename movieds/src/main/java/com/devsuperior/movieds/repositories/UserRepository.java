package com.devsuperior.movieds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieds.entities.User;

public interface UserRepository extends JpaRepository<User,Long> {

	User findByEmail(String email);
}
