import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom"
import { auth } from '../firebase-config'
function Signout() {
    const navigate = useNavigate();

    const logout = async () => {
        await signOut(auth);
        navigate("/");
    }
    return (
        <>
            <button onClick={logout}>Sign out</button>
        </>
    );
}
export { Signout }