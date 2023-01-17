package com.demodto.dtodemo.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Setter
@Getter
public class BookStoreDTO {
    private Long bookId;
    private String bookName;
    private String authorName;
    private String publisherName;
    private Long quantity;
    private BigDecimal price;
}
