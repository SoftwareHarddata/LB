package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.model.*;
import com.softwareharddata.bbetter.service.ExpertenService;
import com.softwareharddata.bbetter.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/expertendetails")
public class ExpertenDetailsController {
    private final ExpertenService expertenService;

    @Autowired
    public ExpertenDetailsController(ExpertenService expertenService) {
        this.expertenService = expertenService;
    }

    @PostMapping
    public ResponseEntity<ExpertenDetails> saveExpertenDetails(@RequestBody @Valid ExpertenDetailsDto expertenDetailsDto) {

        ExpertenDetails createdExpertenDetailsDto = this.expertenService.saveExpertenDetails(expertenDetailsDto);
        return new ResponseEntity<>(createdExpertenDetailsDto, HttpStatus.CREATED);
 }

    // todo: tests; frage: wie auswählen in abhängigkeit von category +subcategory +plz, ...
    @GetMapping("/experten/{category}")
    public ResponseEntity <List<ExpertenDetails>> getExpertenByCategory(@PathVariable String category){
        List<ExpertenDetails> expertenByCategory = expertenService.getExpertenByCategory(category);
        return new ResponseEntity<>(expertenByCategory, HttpStatus.OK);
    }

   /* @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<String> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex){
        return ex.getBindingResult().getAllErrors()
                .stream()
                .map(objectError -> (FieldError) objectError)
                .map(fieldError -> fieldError.getField() + " - " + fieldError.getDefaultMessage())
                .collect(Collectors.toList());
    }*/

  /*  @ResponseStatus(HttpStatus.BAD_REQUEST)
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
    }*/

    /*// todo: tests
    @GetMapping("/userinfos/{id}")
    public ResponseEntity<UserAllInfos> getUserAllInfosById(@PathVariable String id){
        UserAllInfos userAllInfos = userService.getUserAllInfosById(id);
        return new ResponseEntity<>(userAllInfos, HttpStatus.OK);
    }*/



}
