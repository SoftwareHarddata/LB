package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "users")
public class User {
    @Id
    private String idUserEmail;
    private String firstname;
    private String lastname;
    private String username;
    private String password;
    private Customize customize;
    private boolean isPremium;
    private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
