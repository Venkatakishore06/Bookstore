import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/common/Home';
import AddNewBook from './components/bookstore/AddNewBook';
import BookStore from './components/bookstore/ViewBookStore';
import UpdateBook from './components/bookstore/UpdateBook1';
import UserAccount from './components/bookstore/UserAccount';
import Purchase from './components/bookstore/Purchase';
import PurchaseBook from './components/bookstore/PurchaseBook1';
import  ViewPurchaseDetails from './components/bookstore/ViewPurchaseDetails';
import Sales from './components/bookstore/Sales';
import SaleBook from './components/bookstore/SaleBook1';
import ViewSalesDetails from './components/bookstore/ViewSalesDetails';
import ViewUsers from './components/bookstore/Users';
import Registration from './components/common/Registration';
import Login from './components/common/Login';



function App() {
  return (
    <>
    
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/add-NewBook" element={<AddNewBook />} />
      <Route path="/bookStore" element={<BookStore />} />
      <Route path="/update-book" element={<UpdateBook />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/purchase-Book" element={<PurchaseBook />} />
      <Route path="/View-purchase" element={<ViewPurchaseDetails />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sale-Book" element={<SaleBook />} />
      <Route path="/View-sales" element={<ViewSalesDetails />} />
      <Route path="/View-Roles" element={<ViewUsers />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/" element={<Login />} />
      <Route path="/User" element={<UserAccount />} />
    </Routes>
  </>
  );
}

export default App;
