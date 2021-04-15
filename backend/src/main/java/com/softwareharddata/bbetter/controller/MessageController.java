package com.softwareharddata.bbetter.controller;

import com.softwareharddata.bbetter.model.Message;
import com.softwareharddata.bbetter.model.MessageDto;
import com.softwareharddata.bbetter.model.UserAllInfos;
import com.softwareharddata.bbetter.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final MessageService messageService;

    @Autowired
    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    // todo: tests
    @PostMapping
    public ResponseEntity<Message> saveMessage(@Valid @RequestBody MessageDto messageDto) {
        Message CreatedMessage = this.messageService.saveMessage(messageDto);
        return new ResponseEntity<>(CreatedMessage, HttpStatus.CREATED);
    }

    // todo: tests
    @GetMapping
    public ResponseEntity<List<Message>> getMessages(){
        List<Message> messages = messageService.getMessages();
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }


    // todo: tests
    @GetMapping("/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable String id){
        Message message = messageService.getMessageById(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    // todo: tests
    @GetMapping("/category/{category}")
    public ResponseEntity <List<Message>> getMessagesByCategory(@PathVariable String category){
        List<Message> messagesByCategory = messageService.getMessagesByCategory(category);
        return new ResponseEntity<>(messagesByCategory, HttpStatus.OK);
    }

    /*
    * // todo: tests
    @GetMapping("/titel/{titel}")
    public ResponseEntity <List<Message>> getMessageByTitel(@PathVariable String titel){
        List<Message> messagesByTitel = messageService.getMessageByTitel(titel);
        return new ResponseEntity<>(messagesByTitel, HttpStatus.OK);
    }
    * */

}
