package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.Message;
import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageMysqlDb extends CrudRepository<Message,String> {

    Optional<List<Message>> findByCategory (String category);

}
