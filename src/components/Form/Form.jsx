import React from 'react'
import { useState } from 'react';
import './form.scss'


const Form = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
  setFirstName(e.target.value);
  setSubmitted(false);
 }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false)
  }

  const handleEmail = (e) => {
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
      if (!isValidEmail(e.target.value)) {
        setError(true);
        return (<p>This is not a valid email</p>)
      } else {
        setError(false);
      }

    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setError(true);
    }
    else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {firstName} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = (input) => {
    return (
      <p
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
          This field cannot be empty
      </p>
    );
  };



    return(
        <div className='form'>
           <div className='input'>
           <input 
            onChange={handleName} 
            className="input"
            value={firstName} 
            type="text"
            placeholder='First Name' 
            />
            <div> {errorMessage()}</div>
             <input 
             onChange={handleLastName} 
             className="input"
             value={lastName} 
             type="text" 
             placeholder='Last Name'
             />
            <div> {errorMessage()}</div>
             <input 
             onChange={handleEmail} 
             className="input"
             value={email} 
             type="email" 
             placeholder='Email'
             />
            <div> {errorMessage()}{}</div>
             <input 
             onChange={handlePassword} 
             className="input"
             value={password} 
             type="password" 
             placeholder='Password'
             />
            <div> {errorMessage()}</div>
            <button onClick={handleSubmit} className="btn" type="submit">
                Claim your free trial
            </button>
            <p>By clicking the button, you are agreeing to our<span>Terms and Services</span></p>
        
            <div className="messages">{successMessage()}</div>
            </div> 
            

     
        </div>
    )
   
}


export default Form;