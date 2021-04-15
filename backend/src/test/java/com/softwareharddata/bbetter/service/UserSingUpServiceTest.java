/*
package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.UserDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.model.UserSingUpDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.UUID;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class UserSingUpServiceTest {

    //private final UserMongoDb userDb = mock(UserMongoDb.class);
    //private final UserService userService = new UserService(userDb);

    private final UserMysqlDb userDb = mock(UserMysqlDb.class);
    private final UserDetailsMysqlDb userDetailsMysqlDb = mock(UserDetailsMysqlDb.class);
    private final UserService userService = new UserService(userDb, userDetailsMysqlDb, null);

    @Test
    @DisplayName("a new user should be added")
    public void testSaveANewUser(){
        //GIVEN
        String email = UUID.randomUUID().toString();
        String id = UUID.randomUUID().toString();


        //when(userDb.existsById(email)).thenReturn(false);
        when(userDb.existsById(email)).thenReturn(false);

        UserSingUpDto userSingUpDto = UserSingUpDto.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();

        UserSingUp mockUserSingUp = UserSingUp.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .idUserSingUp(id)
                .authority("USER")
                .build();

        when(userDb.save(mockUserSingUp)).thenReturn(mockUserSingUp);

        //WHEN
        UserSingUp actual = userService.saveUser(userSingUpDto);

        //THEN
        UserSingUp expectedUserSingUp = UserSingUp.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();
        assertThat(actual, is(expectedUserSingUp));
        verify(userDb).save(expectedUserSingUp);
    }

    @Test
    @DisplayName("An already added user is not added again")
    public void testAddExistingUser(){
        //GIVEN
        String email = UUID.randomUUID().toString();
        when(userDb.existsById(email)).thenReturn(true);
        UserSingUpDto userSingUpDto = UserSingUpDto.builder()
                .email(email)
                .username("superUser")
                .password("superUser-password")
                .build();

        //WHEN
        assertThrows(EntityAlreadyExistsException.class, () -> userService.saveUser(userSingUpDto));

        //THEN
        verify(userDb, never()).save(any());
    }

}*/
