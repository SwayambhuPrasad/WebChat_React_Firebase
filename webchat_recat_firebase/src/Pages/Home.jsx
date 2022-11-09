import { Signout } from '../Components/Signout';
import Chats from '../Components/Chats';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase-config'
function Home() {
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    return (
        <>
            <h1>Home page</h1>
            <h2>{user?.email}</h2>
            <>{console.log(user)}</>
            <Chats />
            <Signout />
        </>
    );
}
export { Home }