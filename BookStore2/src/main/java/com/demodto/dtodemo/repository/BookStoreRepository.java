package com.demodto.dtodemo.repository;

import com.demodto.dtodemo.model.BookStore;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookStoreRepository extends JpaRepository<BookStore, Long> {

}
