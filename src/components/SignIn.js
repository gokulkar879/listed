import React from 'react';
import './SignIn.css';

function SignIn() {
  return (
    <div className='signin'>
        <p className='signin-header'>Sign In</p>
        <p className='signin-instruction'>Sign in to your account</p>
        <div className='signin-external'></div>
        <form className='signin-form'>
            <label>
                <p>Email address</p> 
                <input />
            </label>
            <label>
                <p>Password</p>
                <input />
            </label>
            <p>Forgot Password?</p>
            <button>Sign In</button>
        </form>
        <p className='sign-footer'>Don't have an account? Register here</p>
    </div>
  )
}

export default SignIn