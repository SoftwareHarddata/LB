package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Customize {
    private int age;
    private String sector;
    private String department;
    private String occupation;
    private String companySize;
    private int plz;
    // private ArrayList<String> interests;
    // private ArrayList<String> extraInfos;
}
