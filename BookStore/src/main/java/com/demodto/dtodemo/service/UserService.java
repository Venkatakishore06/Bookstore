package com.demodto.dtodemo.service;

import com.demodto.dtodemo.dto.UserDTO;
import com.demodto.dtodemo.model.Users;
import org.springframework.http.ResponseEntity;
import java.util.List;

public interface UserService {
    public ResponseEntity<?> saveUser(UserDTO userDTO);

    List<Users> getUser();
}
