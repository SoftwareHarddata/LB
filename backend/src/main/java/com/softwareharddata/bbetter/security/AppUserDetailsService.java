package com.softwareharddata.bbetter.security;

import com.softwareharddata.bbetter.db.UserMysqlDb;
import com.softwareharddata.bbetter.model.UserSingUp;
import com.softwareharddata.bbetter.security.domain.Role;
import lombok.extern.slf4j.Slf4j;
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

@Service("userDetailsService")
@Slf4j
public class AppUserDetailsService implements UserDetailsService {

    private final UserMysqlDb userDb;
    //@Autowired
    //private final UserLoginDao userDb;

    public AppUserDetailsService(UserMysqlDb userDb) {
        this.userDb = userDb;
    }

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<UserSingUp> appUser = this.userDb.findFirstByUsername(username);

        if (appUser.isEmpty()){
            throw new UsernameNotFoundException("User does not exist: "+username);
        }

        var roles = new ArrayList<GrantedAuthority>();

        for (Role role: appUser.get().getRoles()){
            roles.add(new SimpleGrantedAuthority(role.getRolname()));
        }

        return User.builder()
                .username(appUser.get().getUsername())
                .password(appUser.get().getPassword())
                .authorities(roles)
                .build();
    }
}
