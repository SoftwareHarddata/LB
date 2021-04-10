package com.softwareharddata.bbetter.controller;


import com.softwareharddata.bbetter.model.*;
import com.softwareharddata.bbetter.service.WatchlistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/actions")
public class WatchlistController {

    private final WatchlistService actionsService;

    @Autowired
    public WatchlistController(WatchlistService actionsService) {
        this.actionsService = actionsService;
    }

    // todo: tests and validations
   @PostMapping
    public ResponseEntity<Actions> addToActions(@Valid @RequestBody ActionsDto actionsDto){
        Actions createdAction = this.actionsService.addToActions(actionsDto);
       return new ResponseEntity<>(createdAction, HttpStatus.CREATED);
    }

    @GetMapping("/{action}")
    public ResponseEntity<List<Actions>> getActions(@PathVariable String action){
        List<Actions> actionsList = actionsService.getActions(action);
        return new ResponseEntity<>(actionsList, HttpStatus.OK);
    }

    /*@GetMapping("/{idUserSingup}/{action}")
    @ResponseBody
    public ResponseEntity<List<Actions>> getActionsFromUser(@PathVariable String idUserSingup,
                                                            @PathVariable String action){
        List<Actions> actionsList = actionsService.getActionsFromUser(idUserSingup, action);
        return new ResponseEntity<>(actionsList, HttpStatus.OK);
    }*/

    @GetMapping("/{idUserSingup}/{action}")
    @ResponseBody
    public ResponseEntity<List<Actions_Message>> getActionsFromUser(@PathVariable String idUserSingup,
                                                            @PathVariable String action){
        List<Actions_Message> actionsList = actionsService.getActionsFromUser(idUserSingup, action);
        return new ResponseEntity<>(actionsList, HttpStatus.OK);
    }

    /*
    @DeleteMapping("{id}")
    public void deleteRepository(@PathVariable String id){
        watchListService.deleteFromWatchlist(id);
    }*/
}