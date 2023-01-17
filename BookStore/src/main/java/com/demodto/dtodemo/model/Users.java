package com.demodto.dtodemo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Users")
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
    @SequenceGenerator(name = "u_Id_gen",sequenceName = "u_seq", initialValue = 221001,allocationSize = 1)
    @Column(name = "userId")
    private Long userId;

    @Column(name = "userName")
    private String userName;

    @Column(name = "emailId", unique=true)
    private String emailId;

    @Column(name = "password")
    private String password;

    @Column(name = "mobile")
    private long mobile;

    @Column(name = "userType")
    private String userType;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Sales> sales;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private Set<Purchase> purchase;


}
