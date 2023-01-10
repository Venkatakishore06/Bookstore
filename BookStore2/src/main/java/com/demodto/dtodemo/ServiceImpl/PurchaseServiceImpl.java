package com.demodto.dtodemo.ServiceImpl;

import com.demodto.dtodemo.dto.PurchaseDTO;
import com.demodto.dtodemo.exception.BookNotFound;
import com.demodto.dtodemo.exception.UserNotFound;
import com.demodto.dtodemo.model.BookStore;
import com.demodto.dtodemo.model.Purchase;
import com.demodto.dtodemo.model.Users;
import com.demodto.dtodemo.repository.BookStoreRepository;
import com.demodto.dtodemo.repository.PurchaseRepository;
import com.demodto.dtodemo.repository.UserRepository;
import com.demodto.dtodemo.service.PurchaseService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PurchaseServiceImpl implements PurchaseService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private BookStoreRepository bookStoreRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseEntity<?> savePurchase(Long userId, Long bookId, PurchaseDTO purchaseDTO) {
        BookStore bookStore = bookStoreRepository.findById(
                bookId).orElseThrow(() -> new BookNotFound(String.format("Book Id %d not Found", bookId)));
        Users user = userRepository.findById(
                userId).orElseThrow(() -> new UserNotFound(String.format("User Id %d not Found", userId)));
        bookStore.setQuantity(bookStore.getQuantity() + purchaseDTO.getPurchaseQuantity());

        Purchase purchase = modelMapper.map(purchaseDTO, Purchase.class);
        purchase.setBookStore(bookStore);
        purchase.setUser(user);
        Purchase savedPurchase = purchaseRepository.save(purchase);
        modelMapper.map(savedPurchase, PurchaseDTO.class);
        return new ResponseEntity<>("Book Purchased Successfully", HttpStatus.CREATED);
    }

    @Override
    public List<Purchase> getPurchase() {
        return purchaseRepository.findAll() ;
    }
}
