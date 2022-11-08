import { React, useState } from 'react'
import './Pages.scss'
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase-config'
import { Home } from './Home'

function SigninPage() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            //_signOut;
            navigate("/Home")
            console.log(user)
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const navigate = useNavigate();
    return (
        <div className='Background'>
            <div className='Container'>
                <h1> Sign in</h1>
                <p>Sign in and start chatting!</p>
                <input type="email" placeholder='login' onChange={(e) => { setLoginEmail(e.target.value) }} />
                <input type="password" placeholder='password' onChange={(e) => { setLoginPassword(e.target.value) }} />
                <button onClick={login}>Login</button>
                <div className='rememberMe'>
                    <input type="checkbox" id='loginCheckBox' />
                    <label htmlFor="loginCheckBox"> Remember me </label>
                    <button onClick={() => { navigate("/register") }}>Register</button>
                </div>
            </div>
        </div>
    );
}

export { SigninPage }