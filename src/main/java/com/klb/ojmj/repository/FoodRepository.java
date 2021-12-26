package com.klb.ojmj.repository;

import com.klb.ojmj.model.Food;
import com.klb.ojmj.model.FoodCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, String> {

    @Modifying
    @Query("UPDATE Food SET selectCount = selectCount + 1 WHERE id = :id")
    int hitFood(String id);

    List<Food> findByMainCategory(FoodCategory mainCategory);
    Food findByMiddleCategory(String middleCategory);
    Food findBySubCategory(String subCategory);
}
