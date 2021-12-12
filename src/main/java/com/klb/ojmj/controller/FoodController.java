package com.klb.ojmj.controller;

import com.klb.ojmj.model.Food;
import com.klb.ojmj.model.FoodCategory;
import com.klb.ojmj.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/food")
@RequiredArgsConstructor
public class FoodController {
    private final FoodService foodService;

    @GetMapping("/{id}")
    public ResponseEntity<Integer> hitFood(@PathVariable String id) {
        return ResponseEntity.ok(foodService.hitFood(id));
    }

    @GetMapping("")
    public ResponseEntity getFoods(@RequestParam(required = false) String id, @RequestParam(required = false) FoodCategory mainCategory) {
        if (id != null) {
            return ResponseEntity.ok(foodService.getFood(id));
        } else if (mainCategory != null) {
            return ResponseEntity.ok(foodService.getMainCategoryFoods(mainCategory));
        }
        return ResponseEntity.ok(foodService.getAllFoods());
    }

    @PostMapping("")
    public ResponseEntity<Food> addFood(@RequestBody Food food) throws Exception {
        return ResponseEntity.ok(foodService.addFood(food));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable String id) {
        foodService.deleteBook(id);
        return ResponseEntity.ok().build();
    }
}
