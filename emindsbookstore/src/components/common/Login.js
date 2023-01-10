import React, {useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {get, save} from '../service/RoleService';

const User = () => {

     const [users, setUsers] = useState([])
     const [emailId, setEmailId] = useState("")
     const [password, setPassword] = useState("")
     const navigate = useNavigate();
     

    
    const getUsers = () => 
    {
        get("/user/get")
            .then(res => {
                console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getUsers() // called the method each time when the page is loaded

    }, [])
    const handleSubmit = (e)=> {
        save("/login",
        {
            emailId:emailId,
            password:password
        }).then(res =>{
            handleUpdate(res.data);
        })
        e.preventDefault()
    }

    const handleUpdate=(status)=>
    {  // alert(status)
        if(status === "LoginSuccess")
       users?.map(p => {
        if((p.emailId) === emailId)
        {
            let userid = p.userId
            let usertype = p.userType
    
            localStorage.setItem("userId",userid);
            console.log(userid);
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

    return (
    <>
    <div class="container-fluid h-custom" id="login-background">

        
    
   <div class="Login-box">
       <div class="login-head">
        {/* This is Login page*/}
            <h5 id="h2">Welcome to</h5><h3 id="h4">EMinds - BookStore</h3>
       </div>
       <form onSubmit={handleSubmit}>
            <input  placeholder = "Email ID" id="log-1" value={emailId}  onChange={(e)=>setEmailId(e.target.value)} /><br/>
            <input  type="password" id="log-1" name='password' placeholder = "Password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/><br/>
            
            <button type= "submit" id="log-btn" class="btn btn-primary">Login</button>
            
            <br/><br/>
        </form>
        <a href="/Registration"><input type="submit" value="Register" class="register-btn"/></a>
        </div>
        </div>
    </>
  );
}
          

export default User