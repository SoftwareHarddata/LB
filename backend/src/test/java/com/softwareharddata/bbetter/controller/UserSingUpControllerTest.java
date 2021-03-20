package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.db.UserMongoDb;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.model.UserDto;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import java.util.UUID;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserSingUpControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl(){
        return "http://localhost:"+port+"/api/customer";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserMongoDb userMongoDb;

    @BeforeEach
    public void setup() {
        userMongoDb.deleteAll();
    }

    @Test
    @DisplayName("Post to /api/customer adds a new user to the database")
    public void saveTodo(){
        // GIVEN
        String email = UUID.randomUUID().toString();
        UserDto userToPost = UserDto.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();

        // WHEN
        ResponseEntity<UserSingUp> response = testRestTemplate.postForEntity(getUrl(), userToPost, UserSingUp.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.CREATED));
        UserSingUp expectedUserSingUp = UserSingUp.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();
        assertThat(response.getBody(), is(expectedUserSingUp));
        //assertThat(userMongoDb.findById(expectedUserSingUp.getIdUserEmail()).get(), is(expectedUserSingUp));
        //assertTrue(userMongoDb.existsById(userToPost.getIdUserEmail()));
    }

    @Test
    @DisplayName("Adding a user twice results in 400 (Bad Request)") // 409 (Conflict)
    public void addExistingUser(){
        //GIVEN
        String email = UUID.randomUUID().toString();
        UserSingUp createdUserSingUp = UserSingUp.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();
        userMongoDb.save(createdUserSingUp);

        UserDto sameUserID = UserDto.builder().email(email).build();

        //WHEN
        ResponseEntity<UserSingUp> response = testRestTemplate.postForEntity(getUrl(), sameUserID, UserSingUp.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.BAD_REQUEST));
    }






}