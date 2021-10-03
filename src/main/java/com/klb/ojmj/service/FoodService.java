package com.klb.ojmj.service;

import com.klb.ojmj.model.Food;
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
        return foodRepository.findAll();
    }

    @Transactional
    public int hitFood(String id) {
        int result = foodRepository.hitFood(id);
        if(result < 0) {
            throw new EntityNotFoundException("ID에 맞는 음식을 찾을 수 없습니다.");
        }
        return result;
    }

    public Food addFood(Food food) {
        return foodRepository.save(food);
    }

    public void deleteBook(String id) {
        foodRepository.deleteById(id);
    }
}
