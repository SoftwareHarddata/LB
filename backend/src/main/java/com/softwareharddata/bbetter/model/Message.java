package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
//@Document(collection = "messages")
@Entity
@Table(name="message")
public class Message implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_message_category")
    private String idMessage;
    private String subcategory;
    private String titel;
    private String content;
    @Column(name="more_infos")
    private String moreInfos;
    
}
