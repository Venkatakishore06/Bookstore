package com.demodto.dtodemo.ServiceImpl;

import com.demodto.dtodemo.dto.SalesDTO;
import com.demodto.dtodemo.exception.BookNotFound;
import com.demodto.dtodemo.exception.UserNotFound;
import com.demodto.dtodemo.model.BookStore;
import com.demodto.dtodemo.model.Users;
import com.demodto.dtodemo.model.Sales;
import com.demodto.dtodemo.repository.BookStoreRepository;
import com.demodto.dtodemo.repository.UserRepository;
import com.demodto.dtodemo.repository.SalesRepository;
import com.demodto.dtodemo.service.SalesService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BookStoreRepository bookStoreRepository;

    @Autowired
    private SalesRepository salesRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<?> saveSales(Long userId, Long bookId, SalesDTO salesDTO) {
        BookStore bookStore = bookStoreRepository.findById(
                bookId).orElseThrow(() -> new BookNotFound(String.format("Book Id %d not Found", bookId)));
        Users user = userRepository.findById(
                userId).orElseThrow(() -> new UserNotFound(String.format("User Id %d not Found", userId)));
        if(bookStore.getQuantity() >= salesDTO.getSalesQuantity()&&salesDTO.getSalesQuantity()>0) {
            bookStore.setQuantity(bookStore.getQuantity() - salesDTO.getSalesQuantity());

            Sales sales = modelMapper.map(salesDTO, Sales.class);
            sales.setBookStore(bookStore);
            sales.setUser(user);
            Sales savedSales = salesRepository.save(sales);
            modelMapper.map(savedSales, SalesDTO.class);
            return new ResponseEntity<>("Book Sold Successfully", HttpStatus.CREATED);
        }
        else
        {
            return new ResponseEntity<>("Available Quantity is Less, Sales Not Done", HttpStatus.CREATED);
        }
    }



    @Override
    public List<Sales> getSales() {
        return salesRepository.findAll() ;
    }
}
