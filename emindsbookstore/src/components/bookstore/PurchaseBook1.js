import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Alert } from 'react-bootstrap'

export default function PurchaseForm()
{   const [bookId, setBookId] = useState("")
    const [userId, setUserId] = useState("")
    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [publisherName, setPublisherName] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState("")

    const [purchaseQuantity, setPurchaseQuantity] = useState('')
    const [totalAmount, setTotalAmount] = useState('')
    
    const [quantityErr, setQuantityError] = useState(true)
    const [bValue, setBValue] = useState(true)
   
    
      
    function calculateTotal (e)
    {   let qty = e.target.value;
        
        setPurchaseQuantity( qty);
        let amt = Number(qty) * Number(price);
        
        setTotalAmount( amt )

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
    
    const handlePurchase=(e)=>
    {   
          
          axios.post('http://localhost:8080/api/v2/purchase/' + userId + '/' + bookId,
          {
             
              purchaseDate: new Date(),
              purchaseQuantity: purchaseQuantity,
              totalAmount : totalAmount   
              
          }    ).then(res =>{
            setStatus(res.data)
           } );e.preventDefault();
         
      }
                  
 
    useEffect(() => {
        setBookId(localStorage.getItem("bookId"))
        setBookName(localStorage.getItem("bookName"))
        setAuthorName(localStorage.getItem("authorName"))
        setPublisherName(localStorage.getItem("publisherName"))
        setPrice(localStorage.getItem("price"))
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
       <a class="navbar-brand" href="#" style={{color: 'white'}}>Purchase Form</a>
       <div class="Button2">
           <a href="/purchase"><button type="submit" class="btn btn-primary">Go Back</button></a>
        </div>
</nav>

        <div class="background">
        {status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
        <div class="card1">
            <form>
        <nav class="navbar navbar-light bg-dark">
                                <h3 style={{color: 'white'}}>Purchase Book</h3>
                                </nav><br/>
            <label class="form-title"><b>Book Name: </b></label>
            <input class="form-control" placeholder = "Book Name" value={bookName} onChange={(e)=>setBookName(e.target.value)} disabled />
            <label><b>Author Name: </b></label>
            <input class="form-control" placeholder = "Author Name" value={authorName} onChange={(e)=>setAuthorName(e.target.value)} disabled />
            <label><b>Publisher Name: </b></label>
            <input class="form-control" placeholder = "Publisher Name" value={publisherName} onChange={(e)=>setPublisherName(e.target.value)} disabled />
            <label><b>Price: </b></label>
            <input class="form-control" placeholder = "Price" value={price} onChange={(e)=>setPrice(e.target.value)} disabled />
            <label><b>Purchase Quantity: </b></label>
            <input class="form-control" placeholder = "Purchase Quantity" value={purchaseQuantity} onChange={calculateTotal} />
            {quantityErr?<span id="error-up">Please enter a valid positive value for Quantity</span>:""}
            <br />
            <label><b>Total Cost: </b></label>
            <input class="form-control" placeholder = "Total Amount" value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value)} disabled/><br/>

            <center>
            <button onClick={handlePurchase} class="btn btn-primary" disabled={bValue}>Place Your Order</button>
            </center>
            </form>
           </div>
           
           </div>
           
           </>
           )  
}