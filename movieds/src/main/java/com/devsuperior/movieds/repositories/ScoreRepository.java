package com.devsuperior.movieds.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.movieds.entities.Score;
import com.devsuperior.movieds.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
