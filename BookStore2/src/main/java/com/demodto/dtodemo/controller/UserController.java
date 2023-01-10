package com.demodto.dtodemo.controller;

import com.demodto.dtodemo.dto.LoginDTO;
import com.demodto.dtodemo.dto.UserDTO;
import com.demodto.dtodemo.model.Users;
import com.demodto.dtodemo.repository.UserRepository;
import com.demodto.dtodemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v4")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/user/save")
    public ResponseEntity<?> createUser(@RequestBody UserDTO userDTO)
    {
        try
        {
            userService.saveUser(userDTO);
            return new ResponseEntity<>("User Details Stored Successfully", HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>("User Details with same EMail Already Exists", HttpStatus.CREATED);
        }
    }

    @GetMapping("/user/get")
    public ResponseEntity<List<Users>> getAllUser(){
        return ResponseEntity.ok(userService.getUser());
    }
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody LoginDTO loginDTO)
    {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getEmailId(), loginDTO.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return new ResponseEntity<>("LoginSuccess",  HttpStatus.OK);
    }

}
