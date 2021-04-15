package com.softwareharddata.bbetter.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="actions")
public class Actions implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_action")
    private int idAction;

    @Column(name="id_user_singup")
    private String idUserSingup;

    @Column(name="id_message")
    private String idMessage;
    private String action;

}
