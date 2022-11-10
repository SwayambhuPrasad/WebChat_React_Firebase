import React from "react";
import { LoginContext } from '../Contexts/loginContext'
import { useState } from "react";
import { SigninPage } from "../Pages/SigninPage";
import { Home } from "../Pages/Home";

function Profile() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [showHome, setShowHome] = useState(false)

    return (
        <LoginContext.Provider value={{ loginEmail, setLoginEmail, loginPassword, setLoginPassword, setShowHome }}>
            {showHome ? <Home /> : <SigninPage />}
        </LoginContext.Provider>
    );
}

export { Profile };