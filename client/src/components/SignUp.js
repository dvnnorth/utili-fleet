import React from 'react';

const SignUp = (props) => {
    return( 
  <div className='form-group'>
  <form method='POST' action='/'>
    <label htmlFor='username'>UserName: </label>
    <input type='text' name='username' placeholder='username'/>
    <label htmlFor='email'>Email: </label>
    <input type='email' name='email' placeholder='email'/>
    <label htmlFor='password'>Password: </label>
    <input type='password' name='password' placeholder='password'/>
    <label htmlFor='re-enter password'>Re-enter Password: </label>
    <input type='password' name='re-password' placeholder='re-enter password'/>
    <button type="submit" className="btn btn-default" id="register" onClick = {props.click}>Submit</button>
  </form>
  </div>
  
    )};

export default SignUp;