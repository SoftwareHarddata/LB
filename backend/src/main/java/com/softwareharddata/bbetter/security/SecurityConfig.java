package com.softwareharddata.bbetter.security;


import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    // to add users and set user configs for logins
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // no more default user
        auth.inMemoryAuthentication()
                .withUser("admin")
                    .password("{noop}123")
                    .roles("ADMIN", "USER")
                .and()
                .withUser("user")
                .password("{noop}123")
                .roles( "USER")
        ;
    }

    // with param httpSecutity, to restraint the urls. Checks roles
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // no more default user
        //http.authorizeRequests()
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/").permitAll()
                .antMatchers("/api/**").authenticated()
                .and().formLogin()
                .and().httpBasic();
    }


}
