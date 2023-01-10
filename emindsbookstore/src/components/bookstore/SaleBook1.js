import React,{useState, useEffect} from 'react';
import { Alert } from 'react-bootstrap'
import axios from 'axios'

export default function SalesForm()
{   const [bookId, setBookId] = useState("")
    const [userId, setUserId] = useState("")
    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [publisherName, setPublisherName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    const [saleQty, setSaleQty] = useState("")
    const [totalCost, setTotalCost] = useState("")

    const [quantityErr, setQuantityError] = useState(true)
    const [bValue, setBValue] = useState(true)
    const [status,setStatus] = useState("")
   

    function calculateTotal (e)
    {   let qty = e.target.value;
        setSaleQty( qty);
        let amt = Number(qty) * Number(price);
        setTotalCost( amt )
        
        if( !(qty)  || !(qty.match(/^[0-9]*$/))  )
        {
               setQuantityError(true);
               setBValue(true);
        }
        else
        {
               setQuantityError(false);
               setBValue(false);
                //setTotalCost(e.target.value)
        }
    }
            
    

    
    const handleSale=(e)=>
    {
          axios.post('http://localhost:8080/api/v3/sales/' + userId + '/' + bookId,
          {
              salesQuantity: saleQty,
              salesDate: new Date(),
              totalAmount : totalCost,             
          }    
          ).then(res =>{
            setStatus(res.data)
           } );e.preventDefault();
         
         
        
    }             
    

    useEffect(() => {
        setBookId(localStorage.getItem("bookId"))
        setBookName(localStorage.getItem("bookName"))
        setAuthorName(localStorage.getItem("authorName"))
        setPublisherName(localStorage.getItem("publisherName"))
        setPrice(localStorage.getItem("price"))
        setQuantity(localStorage.getItem("quantity"))
        setUserId(localStorage.getItem("userId"))
    }, [])


    return(
                          
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
                                   <h3 class="navbar-brand" style={{color: 'white'}}>Sale Book</h3>
                                   <div class="Button2">
                                       <a href="/sales"><button type="submit" class="btn btn-primary">Go Back</button></a>
                                    </div>
                            </nav>

                            
        <div class="background">
        {status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
        <div class="card1">
        <nav class="navbar navbar-light bg-dark">
                                <h3 style={{color: 'white'}}>Sales Form</h3>
                                </nav><br/>
            <label class="form-title"><b>Book Name: </b></label>
            <input class="form-control" placeholder = "Book Name" value={bookName} onChange={(e)=>setBookName(e.target.value)} disabled />
            <label><b>Author Name: </b></label>
            <input class="form-control" placeholder = "Author Name" value={authorName} onChange={(e)=>setAuthorName(e.target.value)} disabled />
            <label><b>Publisher Name: </b></label>
            <input class="form-control" placeholder = "Publisher Name" value={publisherName} onChange={(e)=>setPublisherName(e.target.value)} disabled />
            <label><b>Price: </b></label>
            <input class="form-control" placeholder = "Price" value={price} onChange={(e)=>setPrice(e.target.value)} disabled />
            <label><b>Sale Quantity: </b></label>
            <input class="form-control" placeholder = "Sale Quantity" value={saleQty} onChange={calculateTotal} />
            {quantityErr?<span id="error-up">Please enter a valid positive value for Quantity</span>:""}
            <br />
            <label><b>Total Cost: </b></label>
            <input class="form-control" placeholder = "Total Amount" value={totalCost} onChange={(e)=>setTotalCost(e.target.value)} disabled /><br/>

            <center>
            <button onClick={handleSale} class="btn btn-primary" disabled={bValue}>Place Your Order</button>
            </center>
           </div>
           </div>
           
           </>
           )
    
}