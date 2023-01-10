import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Alert } from 'react-bootstrap'
import { get } from '../service/SalesService'




const ViewSales = () => {


    const [sales, setSales] = useState([])
    const [status] = useState("")


    const getSales = () => {
        get("/sales/get")
            .then(res => {
                console.log(res.data)
                setSales(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getSales() // called the method each time when the page is loaded

    }, [])



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
                                   <h3 class="navbar-brand"  style={{color: 'white'}}>Sales Records</h3>
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
                                            <th>Sale Id</th>
                                            <th>Book Id</th>
                                            <th>Book Name</th>
                                            <th>Price</th>
                                            <th>Sale Quantity</th>
                                            <th>User Id</th>
                                            <th>User Name</th>
                                            <th>Mobile Number</th>
                                            <th>Sale Amount</th>
                                            <th>Sale Date</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sales?.map(s => {
                                                return (
                                                    <tr key={s.salesId}>
                                                        <td>{s.salesId}</td>
                                                        <td>{s.bookStore.bookId}</td>
                                                        <td>{s.bookStore.bookName}</td>
                                                        <td><b>₹ </b>{s.bookStore.price}</td>
                                                        <td>{s.salesQuantity}</td>
                                                        <td>{s.user.userId}</td>
                                                        <td>{s.user.userName}</td>
                                                        <td>{s.user.mobile}</td>
                                                        <td><b>₹ </b>{s.totalAmount}</td>
                                                        <td>{s.salesDate}</td>
                                                        
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

export default ViewSales
