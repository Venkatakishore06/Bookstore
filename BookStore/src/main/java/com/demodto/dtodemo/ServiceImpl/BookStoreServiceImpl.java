package com.demodto.dtodemo.ServiceImpl;

import com.demodto.dtodemo.dto.BookStoreDTO;
import com.demodto.dtodemo.model.BookStore;
import com.demodto.dtodemo.repository.BookStoreRepository;
import com.demodto.dtodemo.service.BookStoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class
BookStoreServiceImpl implements BookStoreService {
    @Autowired
   private BookStoreRepository bookStoreRepository;

    @Override
    public BookStoreDTO createBook(BookStoreDTO bookStoreDTO)
    {
        BookStore bookStore = bookStoreDTOTOEntity(bookStoreDTO);
        BookStore savedBook = bookStoreRepository.save(bookStore);
        return entityToBookStoreDto(savedBook);
    }
    private BookStore bookStoreDTOTOEntity(BookStoreDTO bookStoreDTO)
    {
        BookStore bookStore = new BookStore();
        bookStore.setBookName(bookStoreDTO.getBookName());
        bookStore.setQuantity(bookStoreDTO.getQuantity());
        bookStore.setAuthorName(bookStoreDTO.getAuthorName());
        bookStore.setPublisherName(bookStoreDTO.getPublisherName());
        bookStore.setPrice(bookStoreDTO.getPrice());
        return bookStore;
    }

    private BookStoreDTO entityToBookStoreDto(BookStore savedBook)
    {
        BookStoreDTO bookStoreDTO = new BookStoreDTO();
        bookStoreDTO.setBookId(savedBook.getBookId());
        bookStoreDTO.setBookName(savedBook.getBookName());
        bookStoreDTO.setAuthorName(savedBook.getAuthorName());
        bookStoreDTO.setQuantity(savedBook.getQuantity());
        bookStoreDTO.setPublisherName(savedBook.getPublisherName());
        bookStoreDTO.setPrice(savedBook.getPrice());
        return bookStoreDTO;
    }

    @Override
    public List<BookStore> getBookStore() {
        return bookStoreRepository.findAll();
    }

    @Override
    public void deleteBookById(long bookId) {
        bookStoreRepository.deleteById(bookId);
    }

    @Override
    public BookStore getBookByID(Long id) {
        Optional<BookStore> bs = bookStoreRepository.findById(id);
        return bs.get();
    }
}
