import React from 'react'
import './Pages.scss'

function SigninPage() {
    return (
        <div className='Background'>
            <div className='Container'>
                <h1> Sign in</h1>
                <p>Sign in and start chatting!</p>
                <input type="email" placeholder='login' />
                <input type="password" placeholder='password' />
                <button>Login</button>
                <div className='rememberMe'>
                    <input type="checkbox" id='loginCheckBox' />
                    <label htmlFor="loginCheckBox"> Remember me </label>
                    <a href=""> Forgot Password</a>
                </div>
            </div>
        </div>
    );
}

export { SigninPage }