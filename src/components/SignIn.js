import React from 'react';
import './SignIn.css';
import { GoogleLogin } from '@react-oauth/google';
import { useUserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

//google oauth has been used for authentication purposes
function SignIn() {

  const {setUser} = useUserContext();
  const navigate = useNavigate();

  return (
    <div className='signin'>
        <p className='signin-header'>Sign In</p>
        <p className='signin-instruction'>Sign in to your account</p>
        <div className='signin-external'>
        <GoogleLogin
        onSuccess={credentialResponse => {
          setUser(credentialResponse.credential);
          navigate("/");
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
        auto_select
      />;
        </div>
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