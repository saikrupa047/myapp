import './Login.css';
import React, {useState} from 'react';

function Login(props)
{
  const [newValue,setValue] = useState('');
  const clickHandler = (event) => {
    props.onSignOut(newValue);
    setValue("true");
    //console.log(newValue);
  } ;
  return(
    <div className="dropdown">
  <button className="dropbtn">{props.users[0].email}</button>
  <div className="dropdown-content">
    <button onClick={clickHandler} value="" className='dropdown-content'>Sign Out</button>
  </div>
</div>
  );
}

export default Login;