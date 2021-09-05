package com.klb.ojmj.controller;

import com.klb.ojmj.model.Food;
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

    @PostMapping("")
    public ResponseEntity<Food> addFood(@RequestBody Food food) {
        return ResponseEntity.ok(foodService.addFood(food));
    }
}
