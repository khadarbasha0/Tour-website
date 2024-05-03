import React from 'react';
import Footer from './Footer';
import loginimg from '../Assets/images-20240427T073852Z-001/images/register.png'

const Register = () => {
  return (
    <div>
      <div className="login-page d-flex">
        <div className="login-img">
          <img src={loginimg} alt="" />
        </div>
    
        <div className="login-input bg-warning">

          <h1 className='text1 p-3'>Register</h1>
          <input type="text" placeholder='Username' className='p-2 m-2' />
          <input type="email" placeholder='E-mail' className='p-2 m-2' />
          <input type="password" placeholder='password' className='p-2 m-2' />

          <button className='btn btn-dark'>Create Account</button>
          <p>Don't have an  <br />
            account ? <span className='tt text-primary'>Register</span></p>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Register
