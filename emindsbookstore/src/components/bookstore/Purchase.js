import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Alert, Button } from 'react-bootstrap'
import { get } from '../service/BookStoreService'




const Purchase = () => {


    const [bookstore, setBookStore] = useState([])
    const [status, setStatus] = useState("")


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
                                   <a class="navbar-brand" href="#" style={{color: 'white'}}>Purchase</a>
                                   <div class="Button2">
                                       <a href="/home"><button type="submit" class="btn btn-primary">Go to home</button></a>
                                    </div>
                            </nav>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            {status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
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
                                            <th>Actions</th>
                                            
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
                                                        <td><a href='/purchase-Book'>
 <Button className='btn btn-danger' onClick={() => setData(book)}> Purchase Book</Button></a>
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

export default Purchase
