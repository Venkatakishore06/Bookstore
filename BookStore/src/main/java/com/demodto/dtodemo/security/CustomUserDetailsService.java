package com.demodto.dtodemo.security;

import com.demodto.dtodemo.exception.UserNotFound;
import com.demodto.dtodemo.model.Users;
import com.demodto.dtodemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
        Users users = userRepository.findByEmailId(emailId).orElseThrow(
                ()-> new UserNotFound(String.format("User With emailId :%s is not found", emailId)));
        Set<String> userRoles = new HashSet<String>();
        userRoles.add("ROLE_ADMIN");
        return new User(users.getEmailId(), users.getPassword(), userAuthorities(userRoles));
    }

    private Collection<? extends GrantedAuthority> userAuthorities(Set<String> userRoles)
    {
       return  userRoles.stream().map(
                userRole -> new SimpleGrantedAuthority(userRole)
        ).collect(Collectors.toList());
    }

}
