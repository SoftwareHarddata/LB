package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ExpertenDetailsDto {
    @NotBlank
    private String infotext;
    private String titel;
    private String firstname;
    private String lastname;
    private boolean has_adresse;
    private boolean has_tel;
    private boolean has_email;
    private boolean has_video;
    @Min(value = 01001, message = "too short: plz must be between 01001 and 99999")
    @Max(value = 99999, message = "too long: plz must be between 01001 and 99999")
    private int plz;
    //@NotBlank
    private String adresse;
    private String tel;
    private String email;
    private String video_contact;
    private String category;
    private String subcategory;
    private String preference;

    //private String idUserSingUp;


}