package com.softwareharddata.bbetter.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserDetailsService appUserDetailsService;

    @Autowired
    public SecurityConfig(AppUserDetailsService appUserDetailsService) {
        this.appUserDetailsService = appUserDetailsService;
    }

    // to add users and set user configs for logins
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());

    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    // with param httpSecutity, to restraint the urls. Checks roles
    // https nutzt das http protocoll, aber mit Verschlusselung
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // no more default user
        http.csrf().disable()
        .authorizeRequests()
                .antMatchers("/admin/**")
                    //.authenticated()
                    .hasRole("ADMIN")
                .antMatchers("/")
                    .hasAnyRole("ADMIN", "USER")
                .and().formLogin()
                .and().httpBasic()
                ;

    }


}
