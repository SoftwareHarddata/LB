package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.ExpertenDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserAllInfosViewDb;
import com.softwareharddata.bbetter.db.UserDetailsMysqlDb;
import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.exception.EntityAlreadyExistsException;
import com.softwareharddata.bbetter.exception.EntityNotFoundException;
import com.softwareharddata.bbetter.model.*;
import com.softwareharddata.bbetter.utils.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
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

    // todo: tests
    public List<ExpertenDetails> getExpertenByCategory(String category) {
        String checkedCategory = convertCategory(category);
        return expertenDetailsMysqlDb.findByCategory(checkedCategory)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Experten not found by category: %s", category)));
        //.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "userSingUp not found"));
    }

    public static String convertCategory(String urlParam) {
        var category = "";
        if(urlParam.equals("gesundheit")){
            category = "Gesundheit";
        }
        else if(urlParam.equals("personlichkeit")){
            category = "Personlichkeit";
        }
        else if(urlParam.equals("berufundprivat")){
            category = "Berufs- und Privatleben";
        }
        else if(urlParam.equals("social")){
            category = "Social";
        }
        else if(urlParam.equals("sinn")){
            category = "Sinn";
        }
        return category;
    }

   /* // todo: tests
    public List<UserSingUp> getAllUsers() {
        return (List<UserSingUp>) userDb.findAll();
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
