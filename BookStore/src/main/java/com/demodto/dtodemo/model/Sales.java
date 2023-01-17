package com.demodto.dtodemo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="sales")

public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "s_Id_gen")
    @SequenceGenerator(name = "s_Id_gen",sequenceName = "s_seq", initialValue = 202210001,allocationSize = 1)
    private Long salesId;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="book_id", nullable = false)
    private BookStore bookStore;

    private Date salesDate;

    private Long salesQuantity;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="user_id", nullable = false)
    private Users user;

    private BigDecimal totalAmount;
}
