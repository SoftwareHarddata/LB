package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.UserMongoDb;
import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class UserService {
    //private final UserMongoDb userDb;
    private final UserMysqlDb userDb;

    private static final String ALREADY_EXISTS_MESSAGE = "Customer with email: %s is already existing";

    @Autowired
    public UserService(UserMysqlDb userDb) {
        this.userDb = userDb;
    }

    public UserSingUp saveUser(UserDto userDto) {

        CheckExistingUser(userDto);

        String id = UUID.randomUUID().toString();

        UserSingUp userSingUp = UserSingUp.builder()
                .email(userDto.getEmail())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .idUserSingUp(id)
                //.customize(userDto.getCustomize())
                //.isPremium(userDto.isPremium())
                //.favoriteList(userDto.getFavoriteList())
                .build();
        return userDb.save(userSingUp);
    }

    private void CheckExistingUser (UserDto userDto){
        userDb.findByEmail(userDto.getEmail()).ifPresent(
                userSingUp1 -> {
                    throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getEmail()));
                });

       /* if (userDb.existsById(userDto.getEmail())) {
            throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getEmail()));
            //throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email " + userDto.getIdUserEmail() + " is already in the database");
        }*/

    }



}
