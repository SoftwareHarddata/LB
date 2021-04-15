package com.softwareharddata.bbetter.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
//@Document(collection = "user")
@Entity
@Table(name="experten")
public class ExpertenDetails implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_experten_details")
    private String idExpertenDetails;
    //@Column(name="id_user_singup")
    //private String idUserSingUp;

    private String infotext;
    private String titel;
    private String firstname;
    private String lastname;

    @Column(name="has_adresse")
    private boolean hasAdresse;
    @Column(name="has_tel")
    private boolean hasTel;
    @Column(name="has_email")
    private boolean hasEmail;
    @Column(name="has_video")
    private boolean hasVideo;

    private int plz;
    private String adresse;
    private String tel;
    private String email;
    @Column(name="video_contact")
    private String videoContact;
    private String category;
    private String subcategory;

    @Column(name="is_premium")
    private boolean isPremium;
    @Column(name="is_verified")
    private boolean isVerified;
    private String preference;


}
