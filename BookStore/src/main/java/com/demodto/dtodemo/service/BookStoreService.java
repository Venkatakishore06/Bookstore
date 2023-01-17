package com.demodto.dtodemo.service;

import com.demodto.dtodemo.dto.BookStoreDTO;
import com.demodto.dtodemo.model.BookStore;

import java.util.List;

public interface BookStoreService
{
    public BookStoreDTO createBook(BookStoreDTO bookStoreDTO);

    List<BookStore> getBookStore();
    void deleteBookById(long bookId);
    public BookStore getBookByID(Long id);


}
