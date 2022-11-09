
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAA-d1Qj0Lu7Tn2xpQWmw_A96hNly1g1kc",
    authDomain: "webchat-react-firebase.firebaseapp.com",
    projectId: "webchat-react-firebase",
    storageBucket: "webchat-react-firebase.appspot.com",
    messagingSenderId: "986278783208",
    appId: "1:986278783208:web:9b82cdc81a85b7ddf4415d",
    measurementId: "G-LRWQX3D29E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
