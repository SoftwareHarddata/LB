package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "designs")
public class Design {
    @Id
    private String idDesignTheme;
    private String baseBackground; // foto
    private String backgroundColor;
    private String colorFontBody;
    private String colorFontTitel;
    private String fontTypeBody;
    private String fontTypeTitel;
}
