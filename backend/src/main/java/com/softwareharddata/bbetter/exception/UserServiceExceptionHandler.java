package com.softwareharddata.bbetter.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

@ControllerAdvice
public class UserServiceExceptionHandler {

    private final static Logger LOGGER= LoggerFactory.getLogger(UserServiceExceptionHandler.class);

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(EntityNotFoundException ex){
            LOGGER.error(ex.getMessage());

            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(EntityAlreadyExistsException.class)
    public ResponseEntity<ErrorDto> handleEntityAlreadyExistsException(EntityAlreadyExistsException ex){
        LOGGER.error(ex.getMessage());

        return new ResponseEntity<>(new ErrorDto(ex.getMessage()), HttpStatus.CONFLICT);
    }



}
