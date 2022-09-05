import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { createContext } from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db, googleProvider } from '../Utils/Firebase.config';
import { useLocalState } from '../Utils/Hooks';
import { AlertContext } from './AlertContext';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({
    userData: {},
    setUserData: () => { },
    isLoggedIn: false,
})

const AuthContextWrapper = ({ children }) => {
    // const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useLocalState(null, "userData");
    const [isLoggedIn, setIsLoggedIn] = useLocalState(false, "isLoggedIn");
    const alertContext = useContext(AlertContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            const res1 = await signInWithPopup(auth, googleProvider);
            let user = res1.user;
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            let docs = await getDocs(q);
            if (docs.docs.length === 0) {
                const res2 = await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });

                user = res2.user;
                docs = await getDocs(q);
            }

            const data = { id: docs.docs[0].id, ...docs.docs[0].data() };
            setUserData(data);
            console.log(data);

            navigate("/app/dashboard");
            setIsLoggedIn(true);

            alertContext.addAlert({
                type: "success",
                label: "Successfully logged in"
            })

            setLoading(false);
        } catch (err) {
            console.error(err);
            // alert(err.message);
        }
    };

    const fetchUserData = async (user) => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = { id: doc.docs[0].id, ...doc.docs[0].data() };
            setUserData(data);
            return true
        } catch (err) {
            console.log(err);
            return false
        }
    }

    const logIn = async (values) => {
        const { email, password } = values;
        try {
            setLoading(true);

            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res.user);
            const user = res.user;

            if (fetchUserData(user)) {
                navigate("/app/dashboard");
                setIsLoggedIn(true);

                alertContext.addAlert({
                    type: "success",
                    label: "Successfully logged in"
                })
            } else {
                alertContext.addAlert({
                    type: "warning",
                    label: "something's off (try again)"
                })
            }


            setLoading(false);

        } catch (err) {
            setLoading(false);

            console.log(err);
            let errMessage = 'Something went wrong';

            alertContext.addAlert({
                type: "error",
                label: errMessage
            })
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            setIsLoggedIn(false);
            setUserData(null);
            navigate("/app/login");

            alertContext.addAlert({
                type: "success",
                label: "Successfully logged out"
            })
        } catch (err) {
            console.log(err);

            alertContext.addAlert({
                type: "error",
                label: "error logging out"
            })
        }
    }

    const authData = {
        userData,
        setUserData,
        signInWithGoogle,
        fetchUserData,
        logIn,
        logOut,
        isLoggedIn,
        setIsLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextWrapper;
