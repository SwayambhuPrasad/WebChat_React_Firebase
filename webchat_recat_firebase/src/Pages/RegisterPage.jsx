import React from 'react';
import './Pages.scss'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { createUserWithEmailAndPassword, signOut, } from 'firebase/auth'
import { auth } from '../firebase-config'


export default function RegisterPage() {
    const [registerName, setRegisterName] = useState("");
    const [RegisterEmail, setRegisterEmail] = useState("");
    const [RegisterPassword, setRegisterPassword] = useState("");
    const _signOut = async () => {
        await signOut(auth)
    }
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, RegisterEmail, RegisterPassword)
            navigate("/")
            //_signOut;
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
                <h1> Register Here</h1>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id='name' onChange={(e) => { setRegisterName(e.target.value) }} />
                {/* <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" /> */}
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" id='email' onChange={(e) => { setRegisterEmail(e.target.value) }} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id='password' onChange={(e) => { setRegisterPassword(e.target.value) }} />
                <button onClick={register}>Sign Up</button>
                <p className='signInLink'>Already on Web-Chat? <button onClick={() => { navigate("/") }}>Sign In</button></p>
            </div>
        </div>
    );
}
