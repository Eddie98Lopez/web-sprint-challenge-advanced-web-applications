import React, { useState, useEffect } from "react";
import axios from 'axios'


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  

  const initialCreds={
    username:'',
    password:''
  }

  const [ values, setValues ] = useState( initialCreds )
  const [ errors, setErrors ] = useState(false)

  const onChange= (e) => {
    const {name,value} = e.target
    setValues( { ...values, [name]: value } )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(values.username === 'Lambda School' && values.password === 'i<3Lambd4'){
      setErrors(false);

      axios.post('http://localhost:5000/api/login', values)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
          props.history.push('/bubble')
        
          
        })
        .catch(err => console.log(err))
    }
    else{
      setErrors(true)
      console.log(errors)
    }
    

    

    
  } 

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    
     
  },[]);
  
  //const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={onSubmit}>

          <input
            type='text'
            value={values.username}
            onChange={onChange}
            name='username'
            placeholder='Username'
          />

          <input
            type='text'
            value={values.password}
            onChange={onChange}
            name='password'
            placeholder='Password'
          />  

          <button> Login </button>

        </form>
      </div>

      <p data-testid="errorMessage" className="error">{errors === true ? 'Login or Password are incorrect.' : null}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.