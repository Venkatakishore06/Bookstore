package com.demodto.dtodemo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Date;

@Setter
@Getter
@Data
public class PurchaseDTO {
    private Long purchaseId;
    private Date purchaseDate;
    private Long purchaseQuantity;
    private BigDecimal totalAmount;
}
