package com.softwareharddata.bbetter.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="action_messages")
public class Actions_Message{
    @Id
    @Column(name="id_message")
    private String idMessage;
    private String category;
    private String subcategory;
    private String titel;
    private String content;
    private String more_infos;

    @Column(name="id_action")
    private int idAction;
    @Column(name="id_user_singup")
    private String idUserSingup;
    private String action;
}
