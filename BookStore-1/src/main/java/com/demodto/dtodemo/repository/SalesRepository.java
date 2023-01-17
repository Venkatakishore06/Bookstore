package com.demodto.dtodemo.repository;

import com.demodto.dtodemo.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface SalesRepository extends JpaRepository<Sales, Long> {


}
