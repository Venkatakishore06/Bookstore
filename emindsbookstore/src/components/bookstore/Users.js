import React, {useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import { get } from '../service/RoleService'



const Users = () => {

     const [user, setUser] = useState([])
    

    
    const getUser = () => 
    {
        get("/user/get")
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getUser() // called the method each time when the page is loaded

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
                                   <h3 class="navbar-brand"  style={{color: 'white'}}>Details of User Type</h3>
                                   <div class="Button2">
                                       <a href="/home"><button type="submit" class="btn btn-primary">Go to home</button></a>
                                    </div>
                            </nav>

            
              

            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header></Card.Header>
                           
                            <Card.Body>
                                <h1>User Details</h1>
                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr> 
                                                      
                                            <th>User Id</th>
                                            <th>User Name</th>
                                            <th>Email Id</th>
                                            
                                            <th>Mobile</th>
					                        <th>User Type</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.map(r => {
                                                return (
                                                    <tr key={r.userId}>
                                                        <td>{r.userId}</td>
                                                        <td>{r.userName}</td>
                                                        <td>{r.emailId}</td>                                                
                                                        <td>{r.mobile}</td>
                                                        <td>{r.userType}</td>
                                                                                                             
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

export default Users