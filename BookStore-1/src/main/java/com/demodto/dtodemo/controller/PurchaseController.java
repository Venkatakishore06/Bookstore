package com.demodto.dtodemo.controller;

import com.demodto.dtodemo.dto.PurchaseDTO;
import com.demodto.dtodemo.model.Purchase;
import com.demodto.dtodemo.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v2")
public class PurchaseController {
    @Autowired
    private PurchaseService purchaseService;
    //save the sales
    @PostMapping("/purchase/{userId}/{bookId}")
    public ResponseEntity<?> savePurchase(
            @PathVariable(name= "userId") Long userId,
            @PathVariable(name= "bookId") Long bookId,
            @RequestBody PurchaseDTO purchaseDTO)
    {
        return purchaseService.savePurchase(userId, bookId, purchaseDTO);
    }

    @GetMapping("/purchase/get")
    public ResponseEntity<List<Purchase>> getPurchase(){
        return ResponseEntity.ok(purchaseService.getPurchase());
    }

}
