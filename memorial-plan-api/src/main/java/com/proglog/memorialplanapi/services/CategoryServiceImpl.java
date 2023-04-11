package com.proglog.memorialplanapi.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.proglog.memorialplanapi.entity.CategoryEntity;
import com.proglog.memorialplanapi.model.Category;
import com.proglog.memorialplanapi.repository.CategoryRespository;

@Service
public class CategoryServiceImpl implements CategoryService {

    private CategoryRespository categoryRespository;

    public CategoryServiceImpl(CategoryRespository categoryRespository) {
        this.categoryRespository = categoryRespository;
    }

    @Override
    public Category createCategory(Category category) {
        CategoryEntity categoryEntity = new CategoryEntity();

        BeanUtils.copyProperties(category, categoryEntity);
        categoryRespository.save(categoryEntity);
        return category;
    }

    @Override
    public List<Category> getAllCategories() {
        List<CategoryEntity> categoryEntities = categoryRespository.findAll();

        List<Category> categories = categoryEntities
                .stream()
                .map(cat -> new Category(cat.getId(),
                        cat.getCategory(), cat.getLotPrice(), cat.getVatPercent(), cat.getVat(), cat.getVatLotPrice(),
                        cat.getPcf(), cat.getSellingPrice(), cat.getDownpaymentPercent(), cat.getDownpayment(),
                        cat.getBalancePrice(),
                        cat.getOneYrInterestPercent(), cat.getOneYrInterestRate(), cat.getOneYrContractPrice(),
                        cat.getOneYrPayment(),
                        cat.getTwoYrInterestPercent(), cat.getTwoYrInterestRate(), cat.getTwoYrContractPrice(),
                        cat.getTwoYrPayment(),
                        cat.getThreeYrInterestPercent(), cat.getThreeYrInterestRate(), cat.getThreeYrContractPrice(),
                        cat.getThreeYrPayment(),
                        cat.getSpotCashInterestPercent(), cat.getSpotCashPayment(),
                        cat.getThirtyDayInterestPercent(), cat.getThirtyDayPayment(),
                        cat.getSixtyDayInterestPercent(), cat.getSixtyDayPayment()))
                .collect(Collectors.toList());

        return categories;
    }

    @Override
    public boolean deleteCategory(Long id) {
        CategoryEntity category = categoryRespository.findById(id).get();
        categoryRespository.delete(category);
        return true;
    }

    @Override
    public Category getCategoryById(Long id) {
        CategoryEntity categoryeEntity = categoryRespository.findById(id).get();
        Category category = new Category();
        BeanUtils.copyProperties(categoryeEntity, category);
        return category;
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        CategoryEntity categoryEntity = categoryRespository.findById(id).get();
        categoryEntity.setCategory(category.getCategory());
        categoryEntity.setLotPrice(category.getLotPrice());
        categoryEntity.setVatPercent(category.getVatPercent());
        categoryEntity.setVat(category.getVat());
        categoryEntity.setVatLotPrice(category.getVatLotPrice());
        categoryEntity.setPcf(category.getPcf());
        categoryEntity.setSellingPrice(category.getSellingPrice());
        categoryEntity.setDownpaymentPercent(category.getDownpaymentPercent());
        categoryEntity.setDownpayment(category.getDownpayment());
        categoryEntity.setBalancePrice(category.getBalancePrice());
        categoryEntity.setOneYrInterestPercent(category.getOneYrInterestPercent());
        categoryEntity.setOneYrInterestRate(category.getOneYrInterestRate());
        categoryEntity.setOneYrContractPrice(category.getOneYrContractPrice());
        categoryEntity.setOneYrPayment(category.getOneYrPayment());
        categoryEntity.setTwoYrInterestPercent(category.getTwoYrInterestPercent());
        categoryEntity.setTwoYrInterestRate(category.getTwoYrInterestRate());
        categoryEntity.setTwoYrContractPrice(category.getTwoYrContractPrice());
        categoryEntity.setTwoYrPayment(category.getTwoYrPayment());
        categoryEntity.setThreeYrInterestPercent(category.getThreeYrInterestPercent());
        categoryEntity.setThreeYrInterestRate(category.getThreeYrInterestRate());
        categoryEntity.setThreeYrContractPrice(category.getThreeYrContractPrice());
        categoryEntity.setThreeYrPayment(category.getThreeYrPayment());
        categoryEntity.setSpotCashInterestPercent(category.getSpotCashInterestPercent());
        categoryEntity.setSpotCashPayment(category.getSpotCashPayment());
        categoryEntity.setThirtyDayInterestPercent(category.getThirtyDayInterestPercent());
        categoryEntity.setThirtyDayPayment(category.getThirtyDayPayment());
        categoryEntity.setSixtyDayInterestPercent(category.getSixtyDayInterestPercent());
        categoryEntity.setSixtyDayPayment(category.getSixtyDayPayment());

        categoryRespository.save(categoryEntity);
        return category;
    }

}
