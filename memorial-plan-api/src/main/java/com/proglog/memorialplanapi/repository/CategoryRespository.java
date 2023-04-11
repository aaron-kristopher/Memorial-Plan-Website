package com.proglog.memorialplanapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.proglog.memorialplanapi.entity.CategoryEntity;

@Repository
public interface CategoryRespository extends JpaRepository<CategoryEntity, Long> {

}
