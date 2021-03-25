package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.UserDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.web.server.ResponseStatusException;
import com.softwareharddata.bbetter.exception.EntityNotFoundException;
import org.springframework.http.HttpStatus;


@Service
public class UserService {
    private final UserMysqlDb userDb;
    private final UserDetailsMysqlDb userDetailsMysqlDb;


    private static final String ALREADY_EXISTS_MESSAGE = "Customer with email: %s is already existing";

    @Autowired
    public UserService(UserMysqlDb userDb, UserDetailsMysqlDb userDetailsMysqlDb) {
        this.userDb = userDb;
        this.userDetailsMysqlDb = userDetailsMysqlDb;
    }

    public UserSingUp saveUser(UserSingUpDto userSingUpDto) {

        CheckExistingUser(userSingUpDto);

        // todo: auslagern
        String id = UUID.randomUUID().toString();

        UserSingUp userSingUp = UserSingUp.builder()
                .email(userSingUpDto.getEmail())
                .username(userSingUpDto.getUsername())
                .password(userSingUpDto.getPassword())
                .idUserSingUp(id)
                .authority("USER")
                .build();
        return userDb.save(userSingUp);
    }

    //2
    private void CheckExistingUser (UserSingUpDto userSingUpDto){
        userDb.findByEmail(userSingUpDto.getEmail()).ifPresent(
                userSingUp1 -> {
                    throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userSingUpDto.getEmail()));
                });

       /* if (userDb.existsById(userDto.getEmail())) {
            throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getEmail()));
            //throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email " + userDto.getIdUserEmail() + " is already in the database");
        }*/

    }

    // todo: tests
    public List<UserSingUp> getAllUsers() {
        return (List<UserSingUp>) userDb.findAll();
    }

    // todo: tests
    public UserSingUp getUserById(String id) {
        return userDb.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("User not found with id: %s", id)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }

    // todo: tests
    public UserDetails saveUserDetails(UserDetailsDto userDetailsDto) {
        String id = UUID.randomUUID().toString();

        UserDetails userDetails = UserDetails.builder()
                .isPremium(false)
                .idUser(id)
                .idUserSingUp("edd97343-3ecc-4431-b91c-ff22b7d05bbd")
                .age(userDetailsDto.getAge())
                .sector(userDetailsDto.getSector())
                .department(userDetailsDto.getDepartment())
                .occupation(userDetailsDto.getOccupation())
                .company_size(userDetailsDto.getCompany_size())
                .plz(userDetailsDto.getPlz())
                //.customize(userDto.getCustomize())
                //.favoriteList(userDto.getFavoriteList())
                .build();
        return userDetailsMysqlDb.save(userDetails);
    }

    // todo: tests
    public List<UserAllInfos> getUserAllInfosById(String id) {
        return userDetailsMysqlDb.getUserAllInfos(id);
                //.orElseThrow(() -> new EntityNotFoundException(String.format("User not found with id: %s", id)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }
}
