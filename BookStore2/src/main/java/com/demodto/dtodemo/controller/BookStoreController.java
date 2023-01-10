package com.demodto.dtodemo.controller;

import com.demodto.dtodemo.dto.BookStoreDTO;
import com.demodto.dtodemo.model.BookStore;
import com.demodto.dtodemo.repository.BookStoreRepository;
import com.demodto.dtodemo.service.BookStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1")
@RestController

public class BookStoreController
{
   @Autowired
   BookStoreService bookStoreService;

   @Autowired
   BookStoreRepository bookStoreRepository;

    @PostMapping("/save")
    public ResponseEntity<?> createBook(@RequestBody BookStoreDTO bookStoreDTO)
    {
        try
        {
            bookStoreService.createBook(bookStoreDTO);
            return new ResponseEntity<>("Book Details Stored Successfully", HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>("Book Details Already Exists", HttpStatus.CREATED);
        }
    }

    @GetMapping("/book/get")
    public ResponseEntity<List<BookStore>> getBookStore() {
        return ResponseEntity.ok(bookStoreService.getBookStore());
    }

    @GetMapping("/book/get/{bookId}")
    public BookStore getBookByID(@PathVariable("bookId") long bookId)
    {
        return bookStoreService.getBookByID(bookId);
    }

    @DeleteMapping("/book/{bookId}")
    public ResponseEntity<?> deleteBookById(@PathVariable("bookId") long bookId){
        try {
            bookStoreService.deleteBookById(bookId);
            return new ResponseEntity<>("Book Details Deleted Successfully", HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>("Book Details cannot be delete it is in USE...", HttpStatus.OK);
        }

    }

    @PutMapping("/book/update/{bookId}")
    public ResponseEntity<?> update(@RequestBody BookStore updateBook, @PathVariable Long bookId){
        bookStoreRepository.findById(bookId).map(BookStore  -> {
            BookStore.setBookName(updateBook.getBookName());
            BookStore.setAuthorName(updateBook.getAuthorName());
            BookStore.setPublisherName(updateBook.getPublisherName());
            BookStore.setQuantity(updateBook.getQuantity());
            BookStore.setPrice(updateBook.getPrice());
            return bookStoreRepository.save(BookStore);
        });
        return new ResponseEntity<>("Book Details Updated Successfully",HttpStatus.OK);
    }

}
