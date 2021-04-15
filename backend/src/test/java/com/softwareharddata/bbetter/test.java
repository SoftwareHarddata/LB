package com.softwareharddata.bbetter;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

public class test {

    public static void main(String[] args) {
        var urlParam = "berufundprivate";
        String checkedCategory = convertCategory(urlParam);
        System.out.println(checkedCategory);

    }

    public static String convertCategory(String urlParam) {
        var category = "";
        if(urlParam.equals("gesundheit")){
            category = "Gesundheit";
        }
        else if(urlParam.equals("personlichkeit")){
            category = "Personlichkeit";
        }
        else if(urlParam.equals("berufundprivate")){
            category = "Berufs- und Privatleben";
        }
        else if(urlParam.equals("social")){
            category = "Social";
        }
        else if(urlParam.equals("sinn")){
            category = "Sinn";
        }
        return category;
    }
}


/*const checkCategory = (urlParam) => {
        if(urlParam==='gesundheit'){
        return "Gesundheit"
        }
        else if(urlParam==='personlichkeit'){
        return "Personlichkeit"
        }
        else if(urlParam==='berufundprivate'){
        return "Berufs- und Privatleben"
        }
        else if(urlParam==='social'){
        return "Social"
        }
        else if(urlParam==='sinn'){
        return "Sinn"
        }
        }*/
