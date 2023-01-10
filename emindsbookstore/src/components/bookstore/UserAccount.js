import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Alert } from 'react-bootstrap'
import { get } from '../service/SalesService'

const Sales = () => {
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
   
    const [sales, setSales] = useState([])
   
    const [displayDetails, setDisplayDetails] = useState([])    
    

    const getSales = () => {
        get("/sales/get")
            .then(res => {               
                setSales(res.data)
            })
            .catch(err => console.log(err))
        }

        const salesDetails = (e) =>
        {   
            let details = [];
            if(sales.length == 0 )
                getSales();     
                
            sales.map(s => 
            {          
                if((s.user.userId) == userId)
                {   
                    
                                details.push({
                                    salesId: s.salesId,
                                    bookId: s.bookStore.bookId,
                                    bookName: s.bookStore.bookName,
                                    authorName: s.bookStore.authorName,
                                    publisherName:s.bookStore.publisherName,
                                    price: s.bookStore.price,
                                    salesQuantity: s.salesQuantity,
                                    salesDate: s.salesDate,
                                    totalAmount: s.totalAmount
                                    });
                  
                }
            })
            setDisplayDetails(details)
        }

    useEffect(() => {
         // called the method each time when the page is loaded   
        salesDetails()   
        
    })


    return (
        
        <>
        
                            <nav class="navbar navbar-light bg-dark">
                                   <a class="navbar-brand" href="#" style={{color: 'white'}}>User Sales</a>
                                   <div class="Button2">
                                       <a href="/Sales"><button type="submit" class="btn btn-primary">Go Back</button></a>
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
                                            <th>Sales Id</th>
                                            <th>Book Id</th>
                                            <th>Book Name</th>
                                            <th>Author Name</th>
                                            <th>Publisher Name</th>
                                            <th>Price</th>
                                            <th>Sale Quantity</th>
                                            <th>Total Cost</th>
                                            <th>Sale Date</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        displayDetails.map(p => {
                                                return (
                                                    <tr key={p.salesId}>
                                                        <td>{p.salesId}</td>
                                                        <td>{p.bookId}</td>
                                                        <td>{p.bookName}</td>
                                                        <td>{p.authorName}</td>
                                                        <td>{p.publisherName}</td>
                                                        <td>{p.price}</td>
                                                        <td>{p.salesQuantity}</td>
                                                        <td><b>₹ </b>{p.totalAmount}</td>
                                                        <td>{p.salesDate}</td>                                                        
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
