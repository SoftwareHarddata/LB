package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto_copy {
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
