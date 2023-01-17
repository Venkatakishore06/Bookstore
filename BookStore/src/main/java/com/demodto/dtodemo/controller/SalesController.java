package com.demodto.dtodemo.controller;

import com.demodto.dtodemo.dto.SalesDTO;
import com.demodto.dtodemo.model.Sales;
import com.demodto.dtodemo.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v3")
public class SalesController {

    @Autowired
    private SalesService salesService;
    //save the sales
    @PostMapping("/sales/{userId}/{bookId}")
    public ResponseEntity<?> saveSales(
            @PathVariable(name= "userId") Long userId,
            @PathVariable(name= "bookId") Long bookId,
            @RequestBody SalesDTO salesDTO)
    {
        return salesService.saveSales(userId,bookId, salesDTO);
    }

    @GetMapping("/sales/get")
    public ResponseEntity<List<Sales>> getSales(){
        return ResponseEntity.ok(salesService.getSales());
    }


}
