import React, { useState } from 'react';
import axios from 'axios';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';

const Login= () => {
  const [formData, setFormData] = useState({
    grant_type: 'password',
    username: '',
    password: '',
    // client_id: 'your_client_id',
    // client_secret: 'your_client_secret',
  });

const [navigate, setNavigate] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://15.206.234.228/user/oauth/token',
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: "Basic YXBpOkRKQ29ubmVjdGFwaSEh",
          }
        }
      );
      if(response.status === 200){
        alert("sucess") 
        setNavigate(true)
       }
      
      // console.log(response.data);
       } catch (error) {
      console.error(error);
      alert("error")
    }

    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  };

 
  return (
    <div className='signinform-container'>
    <div className='im-l'>
<img src="/img/login.webp"
alt="" className='img-l'/>
    </div>
    
   
    <form onSubmit={handleSubmit} className='form login-form'>
    <div className='signup'>
    <h2 className='login-h2'>Login</h2>
        <input type="email" name="username" value={formData.username} onChange={handleChange}
        className='username' required  placeholder='username'/>
     
      <br />
     
        <input type="password" name="password" value={formData.password} onChange={handleChange} 
        required  placeholder='password'/>
    
      <br />
      <button type="submit"
 
className='btn-l'
  > 
    {(navigate) ? 
  
      <p className='btn'><Link to="/" className='btn'> login</Link></p>
   : <p className='btn'>login</p>} 
    
  {/* <Link to="/">Go to login page</Link>*/}
   </button>
   </div>
    </form></div>
  );
};

export default Login;



