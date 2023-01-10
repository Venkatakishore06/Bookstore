import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {get, save} from '../service/RoleService';
import axios from 'axios'

const Roles = () => {

     const [users, setUsers] = useState([])
     const [emailId, setEmailId] = useState("")
     const [password, setPassword] = useState("")
  //   const [status, setStatus] = useState("")

     const navigate = useNavigate();


    const getUsers = () => 
    {   
        get("/roles/get")
            .then(res => {
               // console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        getUsers() // called the method each time when the page is loaded

    }, [])

    const handleSubmit= (e) =>
    { 
            save("/login",
            {
                emailId:emailId,
                password:password
            })
            .then(res => {
                validateSuccess(res.data);
                  })   
                  e.preventDefault()
    }

    function validateSuccess(status)
    {
            alert(status )
            if( status === "LoginSuccess")
            {
                
                users?.map(p => {
                if((p.emailId) === emailId)
                {
                    let userid = p.userId
                    let usertype = p.userType
                    //     alert(userid + "\t" +p.userName + "\t" + p.password + "\t" + p.emailId +"\t" + p.mobile +"\t" + usertype);
                    localStorage.setItem("userId",userid);
                    if(usertype === "Admin")
                    {
                        navigate('/home');
                    }
                    else if(usertype === "User")
                    {
                        navigate('/sales');
                    }
                    else
                    {    
                        navigate('/') ;
                    }
                }
            })
            
        }
    
    }

    return (
    <>
    <div class="body1">
        <div class='home'  style = {{color: 'white'}}>
            <h1>EMinds Product Store</h1>
            <p>The Best Product Store</p>
        </div>
        </div>
        <nav class="navbar navbar-light bg-dark">
       <a class="navbar-brand" href="#" style={{color: 'white'}}>Login Page</a>
</nav>
   <div class="Login-Page">
       <h1 id="head">Login Page</h1>


       
       <form onSubmit={handleSubmit}>
            <input id="log" placeholder = "Email Id" value={emailId}  onChange={(e)=>setEmailId(e.target.value)} /><br/>
           <br />
            <input id="log" type="password" placeholder = "Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
         <center>   <button type= "submit" class="btn btn-primary">Login</button>
         <br/>   <br/> <a href="/Registration"><p>Register</p></a></center>
        </form>

        </div>
    </>
  );
}
          
export default Roles