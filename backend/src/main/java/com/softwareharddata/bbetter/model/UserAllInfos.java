package com.softwareharddata.bbetter.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAllInfos{

    private String idUser;
    private String idUserSingUp;
    private boolean isPremium;
    private String age;
    private String sector;
    private String department;
    private String occupation;
    private String company_size;
    private int plz;
    private String email;
    private String username;







    // private ArrayList<String> interests;
    // private ArrayList<String> extraInfos;

    //private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
