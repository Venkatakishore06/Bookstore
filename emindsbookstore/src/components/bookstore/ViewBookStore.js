import React, { useEffect, useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { get, remove } from '../service/BookStoreService'




const ViewBookStore = () => {


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



    const removeHandler = (bookId) => {
        remove("/book/" + bookId)
            .then(res => {
                setStatus(res.data)
                getBookStore()
            })
            .catch(err => console.log(err))
    }
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
                                   <a class="navbar-brand" href="#" style={{color: 'white'}}>Books Details</a>
                                   <div class="Button2">
                                       <a href="/home"><button type="submit" class="btn btn-primary">Go to home</button></a>
                                    </div>
                            </nav>
                             {status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
                            <table class="table table-hover">
                                    <thead>
                                                    <tr>
                                                        <th scope="col">Book Id</th>
                                                        <th scope="col">Book Name</th>
                                                        <th scope="col">Author Name</th>
                                                        <th scope="col">Publisher Name</th>
                                                        <th scope="col">Quantity</th>
                                                        <th scope="col">Price( Per Item )</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookstore?.map(bs => {
                                                return (
                                                        <tr key={bs.bookId}>
                                                          <td>{bs.bookId}</td>
                                                          <td>{bs.bookName}</td>
                                                          <td>{bs.authorName}</td>
                                                          <td>{bs.publisherName}</td>
                                                          <td>{bs.quantity}</td>
                                                          <td><b>₹ </b>{bs.price}</td>
                                                          <td><a href='/update-book'><Button onClick={() => setData(bs)}> Update</Button></a></td>
                                                          <td><Button className='btn btn-danger' onClick={() => removeHandler(bs.bookId)}> Delete</Button></td>
                                                        </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                            </table>       
 </>
    )
}

export default ViewBookStore
