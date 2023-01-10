import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Alert } from 'react-bootstrap'
import { get } from '../service/PurchaseService'




const Purchase = () => {


    const [purchase, setPurchase] = useState([])
    const [status] = useState("")


    const getPurchase = () => {
        get("/purchase/get")
            .then(res => {
                console.log(res.data)
                setPurchase(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getPurchase() // called the method each time when the page is loaded

    }, [])



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
                            <nav class="navbar navbar-light bg-dark">
                                   <h3 class="navbar-brand"  style={{color: 'white'}}>Purchase Records</h3>
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
                                            <th>Purchase Id</th>
                                            <th>Book Id</th>
                                            <th>Book Name</th>
                                            <th>Price</th>
                                            <th>Purchase Quantity</th>
                                            <th>User Id</th>
                                            <th>User Name</th>
                                            <th>Mobile Number</th>
                                            <th>Purchase Cost</th>
                                            <th>Purchase Date</th>

                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            purchase?.map(p => {
                                                return (
                                                    <tr key={p.purchaseId}>
                                                        <td>{p.purchaseId}</td>
                                                        <td>{p.bookStore.bookId}</td>
                                                        <td>{p.bookStore.bookName}</td>
                                                        <td><b>₹ </b>{p.bookStore.price}</td>
                                                        <td>{p.purchaseQuantity}</td>
                                                        <td>{p.user.userId}</td>
                                                        <td>{p.user.userName}</td>
                                                        <td>{p.user.mobile}</td>
                                                        <td><b>₹ </b>{p.totalAmount}</td>
                                                        <td>{p.purchaseDate}</td>
                                                        
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
