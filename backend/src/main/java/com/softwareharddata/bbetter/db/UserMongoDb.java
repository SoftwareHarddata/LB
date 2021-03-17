package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMongoDb extends PagingAndSortingRepository<User,String> {

    List<User> findAll();
}

