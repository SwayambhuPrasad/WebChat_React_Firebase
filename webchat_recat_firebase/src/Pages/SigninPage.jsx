import React from 'react'
import "./pageStyle.css"

function SigninPage() {
    return (
        <div className='signInBackground'>
            <div className='signInContainer'>
                <h1> Sign in</h1>
                <p>Sign in and start managing your candidates!</p>
                <input type="email" placeholder='login' />
                <input type="password" placeholder='password' />
                <div>
                    <input type="checkbox" id='loginCheckBox' />
                    <label htmlFor="loginCheckBox"> Remember me </label>
                    <a href=""> Forgot Password</a>
                </div>
            </div>
        </div>
    );
}

export { SigninPage }