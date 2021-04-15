package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.Actions;
import com.softwareharddata.bbetter.model.Actions_Message;
import com.softwareharddata.bbetter.model.UserAllInfos;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ActionsMessageViewDb extends CrudRepository<Actions_Message,String> {

    List <Actions_Message> findByIdUserSingup (String id_user_singup);
    List <Actions_Message> findByIdMessage (String id_message);
    Optional<List<Actions_Message>> findAllByAction (String action);
    Optional<List<Actions_Message>> findAllByIdUserSingupAndAction (String idUserSingup, String action);

}