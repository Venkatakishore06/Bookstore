package com.demodto.dtodemo.service;

import com.demodto.dtodemo.dto.SalesDTO;
import com.demodto.dtodemo.model.Sales;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface SalesService {
    public ResponseEntity<?> saveSales(Long userId, Long bookId, SalesDTO salesDTO);

    List<Sales> getSales();


}
