package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.security.domain.Userlogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserLoginDao extends JpaRepository<Userlogin,Long> {
    Userlogin findByUsername (String username);
    Optional<Userlogin> findByUsernameAndPassword (String username, String password);

}
