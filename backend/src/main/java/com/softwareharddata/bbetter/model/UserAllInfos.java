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
@Entity
@Table(name="user_allinfos")
public class UserAllInfos{
    @Id
    @Column(name="id_user_singup")
    private String idUserSingUp;

    private String email;
    private String username;
    private String authority;

    @Column(name="id_user")
    private String idUser;
    private String age;
    @Column(name="company_size")
    private String companySize;
    private String department;
    @Column(name="is_premium")
    private boolean isPremium;
    private String occupation;
    private int plz;
    private String sector;








    // private ArrayList<String> interests;
    // private ArrayList<String> extraInfos;

    //private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
