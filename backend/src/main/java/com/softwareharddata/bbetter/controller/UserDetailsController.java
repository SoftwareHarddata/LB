package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.model.UserAllInfos;
import com.softwareharddata.bbetter.model.UserDetails;
import com.softwareharddata.bbetter.model.UserDetailsDto;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/userdetails")
public class UserDetailsController {
    private final UserService userService;

    @Autowired
    public UserDetailsController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDetails> saveUserDetails(@RequestBody @Valid UserDetailsDto userDetailsDto) {

        UserDetails createdUserDetails = this.userService.saveUserDetails(userDetailsDto);
        return new ResponseEntity<>(createdUserDetails, HttpStatus.CREATED);
 }

   /* @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<String> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex){
        return ex.getBindingResult().getAllErrors()
                .stream()
                .map(objectError -> (FieldError) objectError)
                .map(fieldError -> fieldError.getField() + " - " + fieldError.getDefaultMessage())
                .collect(Collectors.toList());
    }*/

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

    /*// todo: tests
    @GetMapping("/userinfos/{id}")
    public ResponseEntity<UserAllInfos> getUserAllInfosById(@PathVariable String id){
        UserAllInfos userAllInfos = userService.getUserAllInfosById(id);
        return new ResponseEntity<>(userAllInfos, HttpStatus.OK);
    }*/

    // todo: tests; sollte keine List zurück geben, sondern nur ein user
    @GetMapping("/userinfos/{id}")
    public ResponseEntity <List<UserAllInfos>> getUserAllInfosById(@PathVariable String id){
        List<UserAllInfos> userAllInfos = userService.getUserAllInfosById(id);
        return new ResponseEntity<>(userAllInfos, HttpStatus.OK);
    }

}
