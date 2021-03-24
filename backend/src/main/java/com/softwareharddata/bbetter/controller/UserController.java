package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.model.UserSingUpDto;
import com.softwareharddata.bbetter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/customer")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserSingUp> saveUser(@Valid @RequestBody UserSingUpDto userSingUpDto) {
         UserSingUp createdUserSingUp = this.userService.saveUser(userSingUpDto);
        return new ResponseEntity<>(createdUserSingUp, HttpStatus.CREATED);
    }


}
