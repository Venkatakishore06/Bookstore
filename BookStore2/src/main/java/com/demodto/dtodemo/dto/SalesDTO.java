package com.demodto.dtodemo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.sql.Date;

@Setter
@Getter
@Data
public class SalesDTO {
    private Long salesId;
    private Date salesDate;
    private Long salesQuantity;
    private BigDecimal totalAmount;
}
