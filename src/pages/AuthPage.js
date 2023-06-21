import React from 'react';
import SignIn from '../components/SignIn';


//authpage when a user signs in 
function AuthPage() {
  return (
    <div className='authpage'>
       <div className='authpage-left'>
            <h3>
                Board.
            </h3>
       </div>
       <div className='authpage-right'>
            <SignIn />
       </div>
    </div>
  )
}

export default AuthPage