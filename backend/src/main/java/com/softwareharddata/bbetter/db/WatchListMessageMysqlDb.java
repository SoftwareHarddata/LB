package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.Actions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WatchListMessageMysqlDb extends CrudRepository<Actions,String> {

    String action = "watchlist";

    Optional<List<Actions>> findAllByAction (String action);

    Optional<List<Actions>> findAllByIdUserSingupAndAction (String idUserSingup, String action);

    Optional<Void> deleteByIdAction (int idAction);

}
