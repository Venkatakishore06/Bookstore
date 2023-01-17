package com.demodto.dtodemo.service;

import com.demodto.dtodemo.dto.PurchaseDTO;
import com.demodto.dtodemo.model.Purchase;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface PurchaseService {
    public ResponseEntity<?> savePurchase(Long userId, Long bookId, PurchaseDTO purchaseDTO);

    List<Purchase> getPurchase();
}
