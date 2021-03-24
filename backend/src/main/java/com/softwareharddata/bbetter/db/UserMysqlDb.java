package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserMysqlDb extends CrudRepository<UserSingUp,String> {
    Optional<UserSingUp> findByEmail (String email);

    //@Query("select * from user where email=?1" )
    //Optional<UserSingUp> doSomething (String email);

}
