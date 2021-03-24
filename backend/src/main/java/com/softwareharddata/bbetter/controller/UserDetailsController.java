package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.model.UserDetails;
import com.softwareharddata.bbetter.model.UserDetailsDto;
import com.softwareharddata.bbetter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/userdetails")
public class UserDetailsController {
    private final UserService userService;

    @Autowired
    public UserDetailsController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDetails> saveUserDetails(@Valid @RequestBody UserDetailsDto userDetailsDto) {
        UserDetails createdUserDetails = this.userService.saveUserDetails(userDetailsDto);
        return new ResponseEntity<>(createdUserDetails, HttpStatus.CREATED);
 }


}
