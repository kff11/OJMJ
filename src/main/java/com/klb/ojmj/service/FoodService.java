package com.klb.ojmj.service;

import com.klb.ojmj.model.Food;
import com.klb.ojmj.model.FoodCategory;
import com.klb.ojmj.model.FoodStatus;
import com.klb.ojmj.repository.FoodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FoodService {
    private final FoodRepository foodRepository;

    public Food getFood(String id) {
        Optional<Food> food = foodRepository.findById(id);

        return food.orElseThrow(() -> new EntityNotFoundException("ID에 맞는 음식을 찾을 수 없습니다."));
    }

    public List<Food> getAllFoods() {
        List<Food> foodList = foodRepository.findAll();
        if(foodList.isEmpty()) {
            throw new EntityNotFoundException("등록된 음식이 없습니다.");
        }
        return foodList;
    }

    public List<Food> getMainCategoryFoods(FoodCategory mainCategory) {
        List<Food> foodList = foodRepository.findByMainCategory(mainCategory);
        if(foodList.isEmpty()) {
            throw new EntityNotFoundException("해당 카테고리에 등록된 음식이 없습니다.");
        }
        return foodList;
    }

    public Food getMiddleCategoryFoods(String middleCategory) {
        return foodRepository.findByMiddleCategory(middleCategory);
    }

    public Food getSubCategoryFoods(String subCategory) {
        return foodRepository.findBySubCategory(subCategory);
    }

    @Transactional
    public int hitFood(String id) {
        int result = foodRepository.hitFood(id);
        if (result < 0) {
            throw new EntityNotFoundException("ID에 맞는 음식을 찾을 수 없습니다.");
        }
        return result;
    }

    public Food addFood(Food food) {
        System.out.println("########## addFood INPUT S ###########");
        System.out.println(food);
        System.out.println("########## addFood INPUT E ###########");
        if(food.getId().isEmpty() || food.getId() == null) {
            throw new EntityNotFoundException("해당 ID로 등록된 음식이 없습니다.");
        }
        // 초기값 세팅
        food.setStatus(FoodStatus.DISABLED);
        food.setSelectCount(new Long(0));
        return foodRepository.save(food);
    }

    public int deleteBook(String id) {
        if(id.isEmpty() || id == null) {
            throw new EntityNotFoundException("해당 ID로 등록된 음식이 없습니다.");
        }
        foodRepository.deleteById(id);
        return 1;
    }
}
