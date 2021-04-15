package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.ExpertenDetails;
import com.softwareharddata.bbetter.model.UserAllInfos;
import com.softwareharddata.bbetter.model.UserDetails;
import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ExpertenDetailsMysqlDb extends CrudRepository<ExpertenDetails,String> {

    Optional<List<ExpertenDetails>> findByCategory (String category);
    //List <ExpertenDetails> findByIdUserSingUp (String id_user_singup);

}