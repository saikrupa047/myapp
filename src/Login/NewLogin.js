import React, { useState } from 'react';
import './NewLogin.css';

function NewLogin(props)
{
    const [enteredEmail,setNewLoginEmail] = useState('');
    const [enteredPwd,setNewLoginPwd] = useState('');
    /*const [newLoginData,setNewLoginData]=useState({
        email:'',
        password:''
    });*/
    const emailUpdateHandler=(event)=>
    {
         //this way not correct when using prevstate for next state
       /*setNewLoginData(
           {
               ...newLoginData,
               email:event.target.value,
               password:event.target.value
           }
       )*/
       //the correct way is:
        /*setNewLoginLogin((prevState)=>{
            return {...prevState, 
             email:event.target.value
        }});*/
        setNewLoginEmail(event.target.value);
    }
    const pwdUpdateHandler=(event)=>
    {
        setNewLoginPwd(event.target.value);
    }
    const submitHandler=(event)=>{
       event.preventDefault();
       //binding data collected from form to an object
       const newUser={
           email: enteredEmail,
           password: enteredPwd,
           uid:Math.random()
       }
       if( newUser.email === "" )
       {
            alert("*Email is Required*");
       }
       if( newUser.password === "" )
       {
            alert("Please, Enter your Password!!");
       }
        //console.log(newUser);
        if (newUser.email !== "" & newUser.password !== "")
        {
        props.onNewLogin(newUser);
        }
        setNewLoginEmail('');
        setNewLoginPwd('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='login__controls'>
            <div className='login__control'>
                <label>Email:</label>
                <input type='email' value={enteredEmail} name="mail" onChange={emailUpdateHandler} placeholder='Email' title='email'/>
            </div>
            <div className='login__control'>
                <label>Password:</label>
                <input type='password' value={enteredPwd} name='pwd' onChange={pwdUpdateHandler} placeholder='Enter Your Password' title='pwd'/>
            </div>
            </div>
            <div className='login__actions'>
                <button type='submit' name='submit'> Login </button> 
            </div>
        </form>
    );
}

export default NewLogin;