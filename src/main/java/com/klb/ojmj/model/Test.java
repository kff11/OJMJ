package com.klb.ojmj.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "test")
public class Test implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql의 AI(AUTO INCREMENT)
    private int test_id;

    @Column(name = "test_name", nullable = false)
    private String test_name;
}
