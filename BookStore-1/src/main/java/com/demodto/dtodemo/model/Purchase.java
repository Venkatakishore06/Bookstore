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
@Table(name="purchase")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "p_Id_gen")
    @SequenceGenerator(name = "p_Id_gen",sequenceName = "p_seq", initialValue = 20221001,allocationSize = 1)
    private Long purchaseId;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="book_id", nullable = false)
    private BookStore bookStore;

    private Date purchaseDate;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name="user_id", nullable = false)
    private Users user;

    private Long purchaseQuantity;

    private BigDecimal totalAmount;

}
