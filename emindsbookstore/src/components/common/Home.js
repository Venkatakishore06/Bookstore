import React from 'react'
import {  Dropdown } from 'react-bootstrap'





const Home = () => {
    return (
        <>
                            <div class="container">
                                    
                                        <div class="image">
                                               <img src={"logo.png"} class="img-circle" alt="Cinque Terre" />
                                        </div>
                                        <div class="home">
                                            <h1>EMinds - BookStore</h1>
                                            <p>Shop our bookstore and be inspired to read</p>
                                        
                                    </div>
                            
                                    </div>
   <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#" style={{color: 'white'}}>EMinds - BookStore</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      
      <div style={{ display: 'block', 
                  width: 195, 
                  padding: 2 }}>
      <Dropdown >
        <Dropdown.Toggle variant="success">
          BookStore Activities
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/add-NewBook">
            Add New Book
          </Dropdown.Item>
          <Dropdown.Item href="/bookStore">
          BookStore Details
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

    <div style={{ display: 'block', 
                  width: 182, 
                  padding: 2 }}>
      <Dropdown>
        <Dropdown.Toggle variant="success">
        Purchase Activities
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/purchase">
          Purchase
          </Dropdown.Item>
          <Dropdown.Item href="/View-purchase">
          Purchase Records
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
     <li class="nav-item active">
        <button class="btn3 btn-primary"> <a class="nav-link active" href="/View-sales" style={{color: 'white'}} id="user">Sales Records</a></button>
    </li>
    <li class="nav-item active">
        <button class="btn1 btn-primary"> <a class="nav-link active" href="/View-Roles" style={{color: 'white'}} id="user">Users</a></button>
    </li>
    <div class="logout">
    <li class="nav-item">
    <button class="btn2 btn-primary"><a class="nav-link active" href="/" style={{color: 'white'}} id="log-out">Logout</a></button>
    </li>
    </div>
    </ul>
  </div>
</nav>
        <img src={'books-feature-1.jpg'} class="homepage" />
       
        </>
    )
}

export default Home