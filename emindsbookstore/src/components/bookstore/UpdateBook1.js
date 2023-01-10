import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Alert } from 'react-bootstrap'

export default function Update()
{   const [bookId, setBookId] = useState("")
    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [publisherName, setPublisherName] = useState("")
    const [quantity, setQuantity]= useState("")
    const [price, setPrice] = useState("")
    const [status,setStatus] = useState("")

    const [bookNameErr, setBookNameError] = useState(false)
    const [authorNameErr, setAuthorNameError] = useState(false)
    const [publisherNameErr, setPublisherNameError] = useState(false)
    const [priceErr, setPriceError] = useState(false)
    const [bValue, setBValue] = useState(false)


    const handleUpdate=(e)=>
    {
        try{
          axios.put('http://localhost:8080/api/v1/book/update/' + bookId,
          {
              bookName: bookName,
              authorName: authorName,
              publisherName: publisherName,
              quantity: quantity,
              price: price
          }).then(res =>{
            setStatus(res.data)
           } );e.preventDefault();
          
      }
      catch(err)
      {
          alert("Book Details Failed to save");
      }  
       
    }

    useEffect(() => {
        setBookId(localStorage.getItem("bookId"))
        setBookName(localStorage.getItem("bookName"))
        setAuthorName(localStorage.getItem("authorName"))
        setPublisherName(localStorage.getItem("publisherName"))
        setPrice(localStorage.getItem("price"))
        setQuantity(localStorage.getItem("quantity"))
    }, [])

    function handleBookName(e)
    {   
       let bname = e.target.value;            
       setBookName(bname);
       if( !(bname) || !(bname.match(/^[a-zA-Z ]*$/)) )
       {    setBookNameError(true); 
            setBValue(true);
       }
       else
       {    setBookNameError(false); 
            setBValue(false);
       }         
    }

    function handleAuthorName(e)
    {   
       let authorname = e.target.value;            
       setAuthorName(authorname);
       if( !(authorname) || !(authorname.match(/^[a-zA-Z ]*$/)) )
       {    setAuthorNameError(true); 
            setBValue(true);
       }
       else
       {    setAuthorNameError(false); 
            setBValue(false);
       }         
    }

    function handlePublisherName(e)
    {   
       let publishername = e.target.value;            
       setPublisherName(publishername);
       if( !(publishername) || !(publishername.match(/^[a-zA-Z ]*$/)) )
       {    setPublisherNameError(true); 
            setBValue(true);
       }
       else
       {    setPublisherNameError(false); 
            setBValue(false);
       }         
    }
  
    function handlePrice(e)
    {   
       let price = e.target.value;            
       setPrice(price);
       if( !(price) || !(price.match(/^[0-9]*$/)) )
       {    setPriceError(true); 
            setBValue(true);
       }
       else
       {    setPriceError(false); 
            setBValue(false);
       }         
    }

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
       <a class="navbar-brand" href="#" style={{color: 'white'}}>Update Form</a>
       <div class="Button2">
           <a href="/bookStore"><button type="submit" class="btn btn-primary">Go Back</button></a>
        </div>
</nav>
<div class="background">
{status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
<div class="card1">
<nav class="navbar navbar-light bg-dark">
    <h3 style={{color: 'white'}}>Update Product Details</h3>
    </nav><br/>
    
    <form onSubmit={handleUpdate}>
            <label class="form-title"><b>Book Name: </b></label>
            <input class="form-control" placeholder = "Book Name" value={bookName}  onChange={handleBookName}  />
            {bookNameErr?<span id="error-up">*Book Name Must contain alphabet characters only</span>:""}
            <br />
            <label class="form-title"><b>Author Name: </b></label>
            <input class="form-control" placeholder = "Author Name" value={authorName} onChange={handleAuthorName} />
            {authorNameErr?<span id="error-up">*Author Name must contain alphabet characters only</span>:""}
            <br />
            <label class="form-title"><b>Publisher Name: </b></label>
            <input class="form-control" placeholder = "Publisher Name" value={publisherName} onChange={handlePublisherName} />
            {publisherNameErr?<span id="error-up">*Publisher Name must contain alphabet characters only</span>:""}
            <br />
            <label class="form-title"><b>Price: </b></label>
            <input class="form-control" placeholder = "Price" value={price} onChange={handlePrice} /><br/>
            {priceErr?<span id="error-up">*Book Price must contain Positive Numbers only</span>:""}
            <br />
            <center>
            <button  class="btn btn-primary" disabled={bValue}>Update</button>
            </center>
            </form>
            
           </div>
           
           </div>
           </>
           )
}