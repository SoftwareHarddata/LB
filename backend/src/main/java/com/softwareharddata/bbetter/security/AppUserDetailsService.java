package com.softwareharddata.bbetter.security;

import com.softwareharddata.bbetter.db.UserLoginDao;
import com.softwareharddata.bbetter.db.UserSingUpMysqlDb;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.security.domain.Role;
import com.softwareharddata.bbetter.security.domain.Userlogin;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Optional;

@Service("UserDetailsService")
@Slf4j
public class AppUserDetailsService implements UserDetailsService {

    //private final UserSingUpMysqlDb userDb;
    @Autowired
    private final UserLoginDao userDb;

    public AppUserDetailsService(UserLoginDao userDb) {
        this.userDb = userDb;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Userlogin appUser = this.userDb.findByUsername(username);

        if (appUser== null){
            throw new UsernameNotFoundException("User does not exist: "+username);
        }

        var roles = new ArrayList<GrantedAuthority>();

        for (Role role: appUser.getRoles()){
            roles.add(new SimpleGrantedAuthority(role.getRolname()));
        }

        return User.builder()
                .username(appUser.getUsername())
                .password(appUser.getPassword())
                .authorities(roles)
                .build();
    }
}
