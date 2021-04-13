/*
package com.softwareharddata.bbetter.controller;

import static org.junit.jupiter.api.Assertions.*;

import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.model.LoginDto;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.model.UserSingUpDto;
import com.softwareharddata.bbetter.utils.EncryptPassword;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.TestPropertySource;

import java.util.UUID;

import static org.hamcrest.MatcherAssert.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = "security.jwt.secret=supertestsecret")
class LoginControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "/auth/login";
    }


    @Autowired
    private UserMysqlDb appUserDb;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void loginWithValidCredentialsShouldGenerateJwtToken() {
        //GIVEN
        String username = "admin";
        String password = "admin";
        String email = "admin@email.com";

        String encode = passwordEncoder.encode(password);

        //String id = UUID.randomUUID().toString();

        UserSingUp userSingUp = UserSingUp.builder()
                .email(email)
                .username(username)
                .password(encode)
                .idUserSingUp("2752dfae-93df-423c-8dd7-2abfcaa57f6c")
                .authority("USER")
                .build();
        appUserDb.save(userSingUp);

        //appUserDb.save(new UserSingUp(id, email, username, encode, authority));


        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new LoginDto(username, password), String.class);

        //THEN
        Claims claims = Jwts.parser().setSigningKey("supertestsecret").parseClaimsJws(response.getBody()).getBody();
        assertThat(claims.getSubject(), Matchers.is("admin"));
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.OK));

    }

    @Test
    public void loginWithInValidCredentialsShouldGenerateJwtToken() {
        //GIVEN
        //GIVEN
        String username = "admin2";
        String password = "admin2";
        String email = "admin2@email.com";

        String encode = passwordEncoder.encode(password);

        //String id = UUID.randomUUID().toString();

        UserSingUp userSingUp = UserSingUp.builder()
                .email(email)
                .username(username)
                .password(encode)
                .idUserSingUp("2752dfae-93df-423c-8dd7-2abfcaa57f6c2")
                .authority("ADMIN")
                .build();
        appUserDb.save(userSingUp);


        //WHEN
        ResponseEntity<String> response = restTemplate.postForEntity(getUrl(), new LoginDto(username, "wrong password"), String.class);

        //THEN
        assertThat(response.getStatusCode(), Matchers.is(HttpStatus.UNAUTHORIZED));

    }

}*/
