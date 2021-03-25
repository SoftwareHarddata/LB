package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Document(collection = "user")
public class UserAllInfos implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_user")
    private String idUser;
    @Column(name="id_user_singup")
    private String idUserSingUp;

    @Column(name="is_premium")
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
