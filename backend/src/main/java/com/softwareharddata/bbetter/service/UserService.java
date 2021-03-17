package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.UserMongoDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.model.User;
import com.softwareharddata.bbetter.model.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    private final UserMongoDb userDb;

    private static final String ALREADY_EXISTS_MESSAGE = "Customer with email: %s is already existing";

    @Autowired
    public UserService(UserMongoDb userDb) {
        this.userDb = userDb;
    }

    public User saveUser(UserDto userDto) {
        if (userDb.existsById(userDto.getIdUserEmail())) {
            throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getIdUserEmail()));
            //throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email " + userDto.getIdUserEmail() + " is already in the database");
        }
        User user = User.builder()
                .idUserEmail(userDto.getIdUserEmail())
                .firstname(userDto.getFirstname())
                .lastname(userDto.getLastname())
                .username(userDto.getUsername())
                .password(userDto.getPassword())
                .customize(userDto.getCustomize())
                .isPremium(userDto.isPremium())
                .favoriteList(userDto.getFavoriteList())
                .build();
        return userDb.save(user);
    }

}
