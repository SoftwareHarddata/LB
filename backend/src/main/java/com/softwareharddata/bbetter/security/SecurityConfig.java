package com.softwareharddata.bbetter.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserDetailsService appUserDetailsService;
    private final JwtAuthFilter filter;


    @Autowired
    public SecurityConfig(AppUserDetailsService appUserDetailsService, JwtAuthFilter filter) {
        this.appUserDetailsService = appUserDetailsService;
        this.filter = filter;
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
    //todo: protect routes
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // no more default user
        http.csrf().disable()
        .authorizeRequests()
                //.antMatchers(HttpMethod.POST,"/").permitAll()
                //.antMatchers(HttpMethod.GET,"/").permitAll()
                .antMatchers(HttpMethod.DELETE,"/").permitAll()
                .antMatchers(HttpMethod.POST,"/auth/login").permitAll()
                .antMatchers(HttpMethod.POST,"/api/customer").permitAll()
                .antMatchers("/api/customer/me").permitAll() // todo: weg
                .antMatchers("/admin/**")
                    .authenticated()
                    /*.hasRole("ADMIN")
                .antMatchers("/")
                    .hasAnyRole("ADMIN", "USER")*/
                //.antMatchers("/api/**").authenticated() //optional
                //.and().sessionManagement().disable()
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class)

                /*.and().formLogin()
                .and().httpBasic()*/
                ;

    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
