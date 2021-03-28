package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.Message;
import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserSingUpMysqlDb extends CrudRepository<UserSingUp,String> {
    Optional<UserSingUp> findByUsername (String username);
    Optional<UserSingUp> findByUsernameAndPassword (String username, String password);



}
