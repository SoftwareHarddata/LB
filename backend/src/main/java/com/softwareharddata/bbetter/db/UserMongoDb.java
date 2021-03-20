package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMongoDb extends PagingAndSortingRepository<UserSingUp,String> {

    List<UserSingUp> findAll();
}

