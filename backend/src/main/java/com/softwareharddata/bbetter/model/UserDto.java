package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {
    @NotBlank //@NotEmpty
    private String idUserEmail;
    private String firstname;
    private String lastname;
    @NotBlank
    private String username;
    @NotBlank
    private String password;
    private Customize customize;
    private boolean isPremium;
    private ArrayList<String> favoriteList;
}
