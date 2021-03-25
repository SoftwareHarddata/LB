package com.softwareharddata.bbetter.db;

import com.softwareharddata.bbetter.model.UserAllInfos;
import com.softwareharddata.bbetter.model.UserDetails;
import com.softwareharddata.bbetter.model.UserSingUp;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import javax.persistence.Id;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserDetailsMysqlDb extends CrudRepository<UserDetails,String> {

    @Query(value="SELECT user.user_details.* " +
            "FROM user.user_details \n" +
            "LEFT JOIN user.user_singup \n" +
            "ON user.user_details.id_user_singup=user.user_singup.id_user_singup \n"
            +"WHERE user.user_details.id_user_singup = :id_user_singup"

            ,nativeQuery = true)
    List<UserAllInfos> getUserAllInfos (@Param("id_user_singup") String id_user_singup);

    /*
                "WHERE user.user_details.id_user_singup = :id_user_singup",

    * @Query(value = "SELECT * FROM Users u WHERE u.status = :status and u.name = :name",
  nativeQuery = true)
User findUserByStatusAndNameNamedParamsNative(
  @Param("status") Integer status, @Param("name") String name);
    * */
}