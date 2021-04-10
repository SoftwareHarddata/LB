package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.ExpertenDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserAllInfosViewDb;
import com.softwareharddata.bbetter.db.UserDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.model.*;
import com.softwareharddata.bbetter.utils.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;


@Service
public class ExpertenService {
    private final UserMysqlDb userDb;
    //private final UserDetailsMysqlDb userDetailsMysqlDb;
    //private final UserAllInfosViewDb allInfosDb;
    private final ExpertenDetailsMysqlDb expertenDetailsMysqlDb;


    private static final String ALREADY_EXISTS_MESSAGE = "Customer with email: %s is already existing";
    private static final String ALREADY_EXISTS_MESSAGE_USERNAME = "Customer with username: %s is already existing";


    @Autowired
    public ExpertenService(UserMysqlDb userDb, UserDetailsMysqlDb userDetailsMysqlDb, UserAllInfosViewDb allInfosDb, ExpertenDetailsMysqlDb expertenDetailsMysqlDb) {
        this.userDb = userDb;
        //this.userDetailsMysqlDb = userDetailsMysqlDb;
        //this.allInfosDb = allInfosDb;

        this.expertenDetailsMysqlDb = expertenDetailsMysqlDb;
    }

    // todo: tests
    public ExpertenDetails saveExpertenDetails(ExpertenDetailsDto expertenDetailsDto) {
        String id = UUID.randomUUID().toString();

        ExpertenDetails expertenDetails = ExpertenDetails.builder()
                .idExpertenDetails(id)
                .infotext(expertenDetailsDto.getInfotext())
                .titel(expertenDetailsDto.getTitel())
                .firstname(expertenDetailsDto.getFirstname())
                .lastname(expertenDetailsDto.getLastname())
                .hasAdresse(expertenDetailsDto.isHas_adresse())
                .hasTel(expertenDetailsDto.isHas_tel())
                .hasEmail(expertenDetailsDto.isHas_email())
                .hasVideo(expertenDetailsDto.isHas_video())
                .plz(expertenDetailsDto.getPlz())
                .adresse(expertenDetailsDto.getAdresse())
                .tel(expertenDetailsDto.getTel())
                .email(expertenDetailsDto.getEmail())
                .videoContact(expertenDetailsDto.getVideo_contact())
                .category(expertenDetailsDto.getCategory())
                .subcategory(expertenDetailsDto.getSubcategory())
                .isPremium(false)
                .isVerified(false)
                .preference(expertenDetailsDto.getPreference())
                .build();
        return expertenDetailsMysqlDb.save(expertenDetails);
    }

    /*public UserSingUp saveUser(UserSingUpDto userSingUpDto) {

        CheckExistingUser(userSingUpDto);

        // todo: auslagern
        String id = UUID.randomUUID().toString();
        String password = EncryptPassword.encryptPassword(userSingUpDto.getPassword());

        UserSingUp userSingUp = UserSingUp.builder()
                .email(userSingUpDto.getEmail())
                .username(userSingUpDto.getUsername())
                .password(password)
                .idUserSingUp(id)
                .authority("USER")
                .build();
        return userDb.save(userSingUp);
    }*/

    //2
/*
    private void CheckExistingUser (UserSingUpDto userSingUpDto){
        userDb.findByEmail(userSingUpDto.getEmail()).ifPresent(
                userSingUp1 -> {
                    throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userSingUpDto.getEmail()));
                });
        userDb.findByUsername(userSingUpDto.getUsername()).ifPresent(
                userSingUp1 -> {
                    throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE_USERNAME, userSingUpDto.getUsername()));
                });

       */
/* if (userDb.existsById(userDto.getEmail())) {
            throw new EntityAlreadyExistsException(String.format(ALREADY_EXISTS_MESSAGE, userDto.getEmail()));
            //throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email " + userDto.getIdUserEmail() + " is already in the database");
        }*//*


    }
*/

   /* // todo: tests
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
    public UserSingUp getUserByUsername(String username) {
        return userDb.findFirstByUsername(username) // todo: findByUsername
                //.orElseThrow(() -> new EntityNotFoundException(String.format("User not found with id: %s", username)));
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "nicht autorisiert, bitte registrieren Sie sich"));
    }

    // todo: tests
    public List<UserAllInfos> getUserAllInfosById(String id) {
        return allInfosDb.findByIdUserSingUp(id);
                //.orElseThrow(() -> new EntityNotFoundException(String.format("User not found with id: %s", id)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }*/
}
