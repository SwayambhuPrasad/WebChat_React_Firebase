import { Signout } from '../Components/Signout';
import Chats from '../Components/Chats';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { auth, db } from '../firebase-config'
import { useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore"
function Home() {
    const collectionRef = collection(db, "messages");
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    return (
        <>
            <h1>Home page</h1>
            <h2>{user?.email}</h2>
            {console.log(collection(db, "messages").docs)}

            <Signout />
            <>
                <Chats />
            </>
        </>
    );
}
export { Home }