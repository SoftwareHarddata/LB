package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.validation.constraints.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDetailsDto {
    @NotBlank
    private String age;
    private String sector;
    private String department;
    @NotBlank
    private String occupation;
    private String company_size;
    //@Size(min = 4, max = 5, message = "plz must be 5 characters long")
    @Min(value = 01001, message = "too short: plz must be between 01001 and 99999")
    @Max(value = 99999, message = "too long: plz must be between 01001 and 99999")
    private int plz;

}