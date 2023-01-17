import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap'


const AddNewBook = ()=>
{
    const [formValue, setFormValue] =useState(
        {
            bookName:'',
            authorName:'',
            publisherName:'',
            price:''
        }
    );
    const [formError, setFormError] =useState({});
    const [isSubmit, setSubmit] = useState(false);
    
    const [status, setStatus] = useState("")
    
    const handleValidation =(e) =>
    {
        setFormValue({...formValue, [e.target.name]:e.target.value})   
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setFormError(validateForm(formValue));
        setSubmit(true);
    }

    const validateForm = (value) =>
    {   const errors = {};
        if(!value.bookName)
        {   errors.bookName = "Please Enter Valid Book Name";
        }
        else if(!(value.bookName.match( /^[a-zA-Z\s]+[a-zA-Z\s]*$/)))
        {   errors.bookName = "Please Enter Alphabet Characters and then numbers if any for Book Name";
        }

        if(!value.authorName)
        {   errors.authorName = "Please Enter Valid Author Name";            
        }
        else if(!(value.authorName.match(/^[a-zA-Z ]*$/)))
        {   errors.authorName = "Please Enter Alphabet Characters for Author Name";
        }

        if(!value.publisherName)
        {   errors.publisherName = "Please Enter Valid Publisher Name";            
        }
        else if(!(value.publisherName.match(/^[a-zA-Z ]*$/)))
        {   errors.publisherName = "Please Enter Alphabet Characters for Publisher Name";
        }

        if(!value.price)
        {   errors.price = "Please Enter Valid Price Value";            
        }
        else if(!(value.price.match(/^[0-9]*$/)))
        {   errors.price = "Please Enter Positive Digits Only for Price Value";  
        }
        return errors;
    }
   

    useEffect (()=> 
    {    
      if (Object.keys(formError).length === 0 && isSubmit)
      {
            axios.post("http://localhost:8080/api/v1/save",
            {
                bookName:formValue.bookName,
                authorName: formValue.authorName,
                publisherName: formValue.publisherName,
                quantity: "0",
                price: formValue.price
            }).then(res =>{
                setStatus(res.data)
               } )
          }
     },[formError])
     

  
    return (   
      
      <>
                           
                            <div class="container">
                                    
                                        <div class="image">
                                               <img src={"logo.png"} class="img-circle" alt="Cinque Terre" />
                                        </div>
                                        <div class="home">
                                            <h1>Eminds - BookStore</h1>
                                            <p>Shop our bookstore and be inspired to read</p>
                                        </div>
                                    
                            </div>
                            <nav class="navbar navbar-light bg-dark">
                                   <h3 class="navbar-brand"  style={{color: 'white'}}>BookStore</h3>
                                   
                                   <div class="back">
                                       <a href="/home"><button type="submit" class="btn btn-primary">Go Back</button></a>
                                    </div>
                            
                            </nav>

            
                    <div class="background">
              
                       <div class="card1">
                                <nav class="navbar navbar-light bg-dark">
                                      <h3 style={{color: 'white'}}>Add New Book</h3>
                                </nav>
                             {status.length > 0 && (<Alert variant='success'>{status}</Alert>)}
                            <br/>                      
                            <div class="row">
                            <form onSubmit={handleSubmit}> 
                                    <div >
                                        <input type="text" class="form-control" placeholder="Book Name" name='bookName'  value={formValue.bookName} onChange={handleValidation} />
                                     </div>
                               
                                <span id="error-up">{formError.bookName}</span>
                                <br/>

                                <div >
                                     <input type="text" class="form-control" placeholder="Author Name" name='authorName'  value={formValue.authorName} onChange={handleValidation}/>
                                </div>
                                
                                <span id="error-up">{formError.authorName}</span>
                                <br/>

                                <div >
                                     <input type="text" class="form-control" placeholder="Publisher Name" name='publisherName' value={formValue.publisherName} onChange={handleValidation} />     
                                </div>
                                
                                <span id="error-up">{formError.publisherName}</span>
                                <br/>

                                <div > 
                                     <input type="text" class="form-control" placeholder="Price" name='price'  value={formValue.price} onChange={handleValidation} />
                                </div>
                               
                                <span id="error-up">{formError.price}</span>
                                <br/>

                                <center>
                                    <div class="Button1">
                                       <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>                           
                                </center>
                                </form>
                            </div>
                            
                        </div>
                    </div>
            
            </>
        
            );
        
      
    }   
      export default AddNewBook;