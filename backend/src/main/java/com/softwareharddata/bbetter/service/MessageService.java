package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.MessageMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.exception.EntityNotFoundException;
import com.softwareharddata.bbetter.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;


@Service
public class MessageService {
    private final MessageMysqlDb messageDb;

    @Autowired
    public MessageService(MessageMysqlDb messageDb) {
        this.messageDb = messageDb;
    }


    public Message saveMessage(MessageDto messageDto) {

        // todo: auslagern
        String id = UUID.randomUUID().toString();

        Message message = Message.builder()
                .id_message(id)
                .category(messageDto.getCategory())
                .subcategory(messageDto.getSubcategory())
                .titel(messageDto.getTitel())
                .content(messageDto.getContent())
                .more_infos(messageDto.getMore_infos())
                .build();
        return messageDb.save(message);
    }

    // CheckExistingUser(messageDto);
    // private static final String ALREADY_EXISTS_MESSAGE = "Message with id/ Titel: %s is already existing";


   /* private void CheckExistingUser (MessageDto messageDto){
        messageDb.findById(messageDto.getId_message()).ifPresent(
                message1 -> {
                    throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, messageDto.getId_message()));
                });

        if (userDb.existsById(userDto.getEmail())) {
            throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getEmail()));
            //throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email " + userDto.getIdUserEmail() + " is already in the database");
        }*/


    // todo: tests
    public List<Message> getMessages() {
        return (List<Message>) messageDb.findAll();
    }

    // todo: tests
    public Message getMessageById(String id) {
        return messageDb.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Message not found with id: %s", id)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }

    // todo: tests
    public List<Message> getMessagesByCategory(String category) {
        return messageDb.findByCategory(category)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Message not found with category: %s", category)));
    }

    // todo: find by titel (List), find by subcategory (List), find by word in ...

    /*
    * // todo: tests
    public List<Message> getUserAllInfosById(String id) {
        return userDetailsMysqlDb.getUserAllInfos(id);
        //.orElseThrow(() -> new EntityNotFoundException(String.format("User not found with id: %s", id)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }
    * */




}
