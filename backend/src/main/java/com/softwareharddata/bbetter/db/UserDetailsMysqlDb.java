package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserDetails;
import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailsMysqlDb extends CrudRepository<UserDetails,String> {
}
