package com.klb.ojmj.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // mysql의 AI(AUTO INCREMENT)
    private Long user_id;
    private String user_password;
    private String user_name;

    @Enumerated(EnumType.STRING)
    private UserStatus user_status;
}
