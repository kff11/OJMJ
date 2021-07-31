package com.klb.ojmj.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "food")
public class Food implements Serializable {
    @Id
    private String food_id;
    private String food_name;
    private FoodCategory food_main_category;
    private FoodCategory food_middle_category;
    private FoodCategory food_sub_category;
    private Long food_select_count;
}
