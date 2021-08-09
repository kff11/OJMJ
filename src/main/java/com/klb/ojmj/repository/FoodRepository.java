package com.klb.ojmj.repository;

import com.klb.ojmj.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, String> {

    @Modifying
    @Query("UPDATE Food SET food_select_count = food_select_count + 1 WHERE food_id = :id")
    int hitFood(String id);
}
