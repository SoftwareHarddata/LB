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
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Document(collection = "user")
@Entity
@Table(name="user")
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id_user;
    private String id_user_signup;

    @Column(name="is_premium")
    private boolean isPremium;
    private int age;
    private String sector;
    private String department;
    private String occupation;
    private String companySize;
    private int plz;
    // private ArrayList<String> interests;
    // private ArrayList<String> extraInfos;

    //private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
