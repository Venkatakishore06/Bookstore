package com.demodto.dtodemo.repository;

import com.demodto.dtodemo.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface  UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmailId(String emailId);

}
