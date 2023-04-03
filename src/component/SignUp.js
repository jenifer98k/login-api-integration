import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';
import Login from './Login';
function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [token, setToken] = useState('');
  const [errorToken, seterrorToken] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
const [userType, setUserType] = useState('')
const [errorUserType, setErrorUserType] = useState('')
  const handleSignUp = (event) => {
    event.preventDefault();
    const data = {
    
            firstName: firstName,
            lastName:lastName,
            email: email,
            token:token,
            userType:userType
      
    };
    if (!firstName || !lastName) {
      console.log("One or more input fields are empty. API call will not be made.");
      return;
    }
  axios.post('http://15.206.234.228/user/v1/super-admin/user', data)
  .then(response => {
    console.log(response.data);
    setSuccess('User created successfully');
  })
  .catch(error => {
    console.log(error);
    setError('Error creating user');
  });
 
   
    // if(firstName !== '')  {
    //  setErrorFirstName("enter 1st name")
    //   // alert("enter first name")
    // } else{
    //   // alert ('entered 1st name')
    //   setErrorFirstName("done")
    // }
    // if(lastName !== '')  {
    //   setErrorLastName("enter lastname")
    //    // alert("enter first name")
    //  } else{
    //    // alert ('entered 1st name')
    //    setErrorLastName("done")
    //  }
    //  if(token !== '')  {
    //   seterrorToken("enter lastname")
    //    // alert("enter first name")
    //  } else{
    //    // alert ('entered 1st name')
    //    seterrorToken("done")
    //  }
    //  if(email!== '')  {
    //   setErrorEmail("enter mail")
    //    // alert("enter first name")
    //  } else{
    //    // alert ('entered 1st name')
    //   setErrorEmail("done")
    //  }
    //  if(userType!== '')  {
    //   setErrorUserType('enter user type')
    //    // alert("enter first name")
    //  } else{
    //    // alert ('entered 1st name')
    // setErrorUserType("done")
    //  }
    
  }
  

// const areAllFieldsFilled = (firstName !== "") && (lastName !== "") && (token !== "") 
// &&(email !=='') && (userType !=='')

  return (<div className='signinform-container'>
<div>
<img src="/img/signup.jpeg" 
alt=""/>
</div>
<form onSubmit={handleSignUp} >
<div className='signup'>

      <h2>Sign up</h2>
      <input type="text" placeholder="firstName" value={firstName}onChange={e => setFirstName(e.target.value)}
      required/>
      {errorFirstName ? <p >enter 1st name</p> : <p></p>}
      <br></br>
      <input type="text" placeholder="lastName" value={lastName} onChange={e => setLastName(e.target.value)} 
        required/>
      {errorLastName ? <p >enter Last name</p> : <p></p>}
      <br></br>
      <input type="password" placeholder="Password" onChange={e => setToken(e.target.value)}
        required  minLength="8" maxLength="8"/>
      {errorToken ? <p >enter Token</p> : <p></p>}
      <br></br>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} 
        required/>
      {errorEmail? <p >enter email</p> : <p></p>}
      <br></br>
      <input type="text" placeholder="usertype" onChange={e => setUserType(e.target.value)} 
        required/>
      {errorUserType? <p >enter user type</p> : <p></p>}
      <br></br>
      <button 
      className='button-submit'
      type='submit'
      // onClick={handleSignUp}  
      //  disabled={!areAllFieldsFilled}
       >Sign up</button>
      {success && <p className=' success'>{success}
      <p>
      <Link to="/login">Go to login page</Link>  </p></p>}
      {error && <p>{error}</p>}
    </div>
    </form>
  </div>
    
  );
}

export default SignUp;

