package com.demodto.dtodemo.repository;

import com.demodto.dtodemo.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  PurchaseRepository extends JpaRepository<Purchase, Long> {
}
