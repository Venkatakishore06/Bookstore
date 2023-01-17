import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap'




const RegisterForm =()=> {
   const[formValue, setFormValue] =useState({
      userName:'',
      emailId:'',
      mobileNo:'',
      password:'',
      confirmPassword:'',
      userType:''       
     });

     const [formError, setFormError] = useState({});
     const [status, setStatus] = useState('');
     const [isSubmit, setSubmit] = useState(false);

     const handleValidation = (e) =>
{
   setFormValue({...formValue, [e.target.name]: e.target.value});   
}

const handleSubmit = (e) =>
{  e.preventDefault();
   setFormError(validateForm(formValue));
   setSubmit(true);   
}

const validateForm = (value) =>
{
   const errors= {};

   if(!value.userName) 
   {
      errors.userName = "Please Enter Valid Name";
   }
   else if( !(value.userName.match(/^[a-zA-Z ]*$/)) )
   {
      errors.userName = "User Name must containt alphabet characters only";
   }

   if(!value.mobileNo) 
   {
      errors.mobileNo = "Please Enter Valid Mobile Number";
   }
   else if( !(value.mobileNo.match(/^[0-9]{10}$/)) )
   {
      errors.mobileNo = "Mobile Number must contain 10 digits";
   }

   if(!value.password) 
   {
      errors.password = "Please Enter Valid Password";
   }
   else if(!value.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/))
   {
      errors.password = "Password must contain 8 characters length with capital letter and special symbol";
   }

   if(!value.confirmPassword) 
   {
      errors.confirmPassword = "Please Enter Confirm Password";
   }
   else if( (value.confirmPassword !== value.password) )
   {
      errors.confirmPassword = "Password and Confirm Password must be same";
   }
   if(!value.emailId) 
   {
      errors.emailId = "Please Enter Valid Emailid";
   }
   else if(!(value.emailId.match(/^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/)))
   {
      errors.emailId = "Email Id must contain @ and . special characters";
   }
   if(!value.userType) 
   {
      errors.userType = "Please Select User Type";
   }
   

   return errors;
}

  

   useEffect (() => { 
     { 
          if( Object.keys(formError).length === 0 && isSubmit ){         
                axios.post("http://localhost:8080/api/v4/user/save",
            {
                userName:formValue.userName,
                emailId:formValue.emailId,
                mobile:formValue.mobileNo,
                password:formValue.password,
			       userType:formValue.userType
            }).then(res =>{
              setStatus(res.data)
             } );
            //window.location.href = 'http://localhost:3000/';
          }
    }
},[formError])

  

    return (
      <>
      <div class="reg-background">
    <div class="reg-form-layout">
      <img src='reg-left1.jpg' id="reg-logo" />
      
     <div id="register">
     {status.length > 0 && (<Alert variant='success' id="alert">{status}</Alert>)}<br/>
     <form onSubmit={handleSubmit}>
        
        <div class="reg-in">
         <div>
        <input type="text" id="log" name="userName" placeholder='Enter Your Name' value={formValue.userName} onChange={handleValidation} />
        </div>
        <span id="error-up">{formError.userName}</span><br />
       
       <div>
        <input type="text" id="log" name="emailId" placeholder='Enter Email ID ' value={formValue.emailId} onChange={handleValidation}  />
        </div>
        <span id="error-up">{formError.emailId}</span><br />
       
       <div>
        <input type="text" id="log" name="mobileNo" placeholder='Enter Mobile Number' value={formValue.mobileNo} onChange={handleValidation}   />
        </div>
        <span id="error-up">{formError.mobileNo}</span><br />
       
       <div>
        <input type="password" id="log" name="password" placeholder='Create Password ' value={formValue.password} onChange={handleValidation} />
        </div>
        <span id="error-up">{formError.password}</span><br />
         
         <div> 
        <input type="password" id="log" name="confirmPassword" placeholder='Confirm Password' value={formValue.confirmPassword} onChange={handleValidation} />
        </div>
        <span id="error-up">{formError.confirmPassword}</span><br />

        <div >
        <select name="userType" id="log" value={formValue.userType} onChange={handleValidation}>
            <option value="" > Select User Type</option>
            <option value="User">User</option>
            <option value="Admin">Admin</option>          
          </select>
          </div>		
          <span id="error-up">{formError.userType}</span><br />
          
          <button type="submit" id='reg-btn' class="btn btn-primary">Create Account</button>
          </div>
          </form>
          <a href='/'><button type="submit" id='reg-back' class="btn btn-primary">Go Back</button></a>
      </div>  
      </div>
</div>

</>
      );
 


}


export default RegisterForm;
