package com.demodto.dtodemo.ServiceImpl;

import com.demodto.dtodemo.dto.UserDTO;
import com.demodto.dtodemo.model.Users;
import com.demodto.dtodemo.repository.UserRepository;
import com.demodto.dtodemo.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<?> saveUser(UserDTO userDTO) {
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        Users user = modelMapper.map(userDTO, Users.class);
        Users savedUser = userRepository.save(user);
        modelMapper.map(savedUser, UserDTO.class);
        return new ResponseEntity<>("User Created Successfully", HttpStatus.CREATED);
    }

    @Override
    public List<Users> getUser() {
        return userRepository.findAll() ;
    }

}
