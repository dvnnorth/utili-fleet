import React from 'react';
//import PropTypes from 'prop-types'

const SignUp = (props) => {
  return( 
    <div className='form-group'>
      <form onSubmit={props.clicked}>
      
        <label htmlFor='username'>UserName: </label>
        <input type='text' name='username' placeholder='username' onChange={props.handleInputChange}/>
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' placeholder='email'  onChange={props.handleInputChange}/>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' placeholder='password'  onChange={props.handleInputChange}/>
        {/*<label htmlFor='re-enter password'>Re-enter Password: </label> */}
        {/*<input type='password' name='re-password' placeholder='re-enter password' value={props.re-password} onChange={props.handleInputChange}/>*/}
        <button className="btn btn-default" id="register" /*{() => props.onSubmit(data)}*/>Submit</button>
      </form>
    </div>
  
  );};

export default SignUp;