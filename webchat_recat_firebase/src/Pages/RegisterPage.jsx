import React from 'react'
import './Pages.scss'

export default function RegisterPage() {
    return (
        <div className='Background'>
            <div className='Container'>
                <h1> Register Here</h1>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id='name' />
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id='email' />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id='password' />
                <button>Sign Up</button>
                <p className='signInLink'>Already on Web-Chat? <a href="">Sign in</a></p>
            </div>
        </div>
    );
}
