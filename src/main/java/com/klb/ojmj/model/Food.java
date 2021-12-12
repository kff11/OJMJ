package com.klb.ojmj.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "food")
public class Food implements Serializable {
    @Id
    @Column(name = "food_id")
    private String id;
    @Column(name = "food_name")
    private String name;
    @Column(name = "food_main_category")
    private FoodCategory mainCategory;
    @Column(name = "food_middle_category")
    private FoodCategory middleCategory;
    @Column(name = "food_sub_category")
    private FoodCategory subCategory;
    @Enumerated(EnumType.STRING)
    @Column(name = "food_status")
    private FoodStatus status;
    @Column(name = "food_select_count")
    private Long selectCount;
}
