package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;
import javax.persistence.*;

//import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Document(collection = "users")
@Table(name="user_singup")
public class UserSingUp implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_user_singup")
    private String idUserSingUp;
    private String email;
    private String username;
    private String password;

    //private Customize customize;
    //private boolean isPremium;
    //private ArrayList<String> favoriteList;
    //private ArrayList<String> clickedLike;
    //private ArrayList<String> clickedMoreInfos;
    //private ArrayList<String> clickedContact;
    //private ArrayList<String> clicked; // tel, e-mail, video, office
    //private boolean hasStress;

}
