package com.demodto.dtodemo.dto;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
    private Long userId;
    private String userName;
    private String emailId;
    private String password;
    private long mobile;
    private String userType;
}
