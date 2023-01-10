import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap'
import { get } from '../service/BookStoreService'




const Sales = () => {


    const [bookstore, setBookStore] = useState([])
    


    const getBookStore = () => {
        get("/book/get")
            .then(res => {
                console.log(res.data)
                setBookStore(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getBookStore() // called the method each time when the page is loaded

    }, [])
    

    const setData = ({bookId, bookName, authorName, publisherName, quantity, price}) =>
    {
        localStorage.setItem('bookId',bookId)
        localStorage.setItem('bookName',bookName)
        localStorage.setItem('authorName',authorName)
        localStorage.setItem('publisherName',publisherName)
        localStorage.setItem('quantity',quantity)
        localStorage.setItem('price',price)

    }



    return (
        <>
                            <div class="container">
                                    <div class="jumbotron">
                                        <div class="image">
                                               <img src={"logo.png"} class="img-circle" alt="Cinque Terre" />
                                        </div>
                                        <div class="home">
                                            <h1>EMinds - BookStore</h1>
                                            <p>Shop our bookstore and be inspired to read</p>
                                        </div>
                                    </div>
                            </div>
                            <nav class="navbar navbar-light bg-dark">
                                <h3>{}</h3>
                                   <h3 class="navbar-brand" style={{color: 'white'}}>User Account</h3>
                                  
                                    <div class="Sale-Detail">
                                    <a href='/User'><Button class="btn btn-primary">Sales Details</Button></a>
                                    </div>
                                    <div class="Button2">
                                       <a href="/"><button type="submit" class="btn btn-primary">Logout</button></a>
                                    </div>
                            </nav>
            <Container>
                <Row>
                    <Col>
                        <Card>
                           
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th>Book Id</th>
                                            <th>Book Name</th>
                                            <th>Author Name</th>
                                            <th>Publisher Name</th>
                                            <th>Quantity</th>
                                            <th>Price(Per Item)</th>
                                            <th>Action</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookstore?.map(book => {
                                                return (
                                                    <tr key={book.bookId}>
                                                        <td>{book.bookId}</td>
                                                        <td>{book.bookName}</td>
                                                        <td>{book.authorName}</td>
                                                        <td>{book.publisherName}</td>
                                                        <td>{book.quantity}</td>
                                                        <td><b>₹ </b>{book.price}</td>
                                                        <td><a href='/sale-Book'>
 <Button className='btn btn-danger' onClick={() => setData(book)}>Buy Now</Button></a>
                                                        </td> 
                                                        
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default Sales
