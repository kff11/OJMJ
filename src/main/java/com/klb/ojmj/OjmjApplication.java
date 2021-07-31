package com.klb.ojmj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class OjmjApplication {

    public static void main(String[] args) {
        SpringApplication.run(OjmjApplication.class, args);
    }

}
