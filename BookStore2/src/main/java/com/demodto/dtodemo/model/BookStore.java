package com.demodto.dtodemo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="BookStore")

public class BookStore {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "book_Id_generator")
    @SequenceGenerator(name = "book_Id_generator",sequenceName = "book_seq", initialValue = 2022101,allocationSize = 1)
    private Long bookId;
    @Column(unique = true)
    private String bookName;
    private String authorName;
    private String publisherName;
    private Long quantity;
    private BigDecimal price;

    @OneToMany(mappedBy = "bookStore")
    @JsonIgnore
    private Set<Sales> sales;

    @OneToMany(mappedBy = "bookStore")
    @JsonIgnore
    private Set<Purchase> purchase;
}
