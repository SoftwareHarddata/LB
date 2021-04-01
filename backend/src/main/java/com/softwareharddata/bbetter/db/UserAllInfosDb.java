package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserAllInfos;
import com.softwareharddata.bbetter.model.UserDetails;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserAllInfosDb extends CrudRepository<UserAllInfos,String> {

    List <UserAllInfos> findByIdUserSingUp (String id_user_singup);
    //List<UserAllInfos> getUserAllInfos (@Param("id_user_singup") String id_user_singup);

    /*
                "WHERE user.user_details.id_user_singup = :id_user_singup",

    * @Query(value = "SELECT * FROM Users u WHERE u.status = :status and u.name = :name",
  nativeQuery = true)
User findUserByStatusAndNameNamedParamsNative(
  @Param("status") Integer status, @Param("name") String name);
    * */
}