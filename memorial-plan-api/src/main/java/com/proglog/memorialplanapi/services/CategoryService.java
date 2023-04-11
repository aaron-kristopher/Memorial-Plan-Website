package com.proglog.memorialplanapi.services;

import java.util.List;

import com.proglog.memorialplanapi.model.Category;

public interface CategoryService {

    Category createCategory(Category category);

    List<Category> getAllCategories();

    boolean deleteCategory(Long id);

    Category getCategoryById(Long id);

    Category updateCategory(Long id, Category category);

}
