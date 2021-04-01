package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserMysqlDb extends JpaRepository<UserSingUp,String> {
    Optional<UserSingUp> findByEmail (String email);
    Optional<UserSingUp> findByUsername (String username);
    Optional<UserSingUp> findFirstByUsername (String username);
    Optional<UserSingUp> findByUsernameAndPassword (String username, String password);
}
