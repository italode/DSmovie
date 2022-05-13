package com.devsuperior.movieds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieds.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie,Long> {

}
