package com.softwareharddata.bbetter.model;

import com.softwareharddata.bbetter.security.domain.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="user_singup")
public class UserSingUp implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id_user_singup")
    private String idUserSingUp;
    @NotEmpty
    private String email;
    @NotEmpty
    private String username;
    @NotEmpty
    private String password;
    private String authority;

    @OneToMany
    @JoinColumn(name = "id_user_singup") //in table: foreign key
    private List<Role> roles;


}
