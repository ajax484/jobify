import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage, ref} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAwNwnn1DwXpSXYkKUsY4CtYuYs-TMrLCo",
    authDomain: "jobify-cc02c.firebaseapp.com",
    projectId: "jobify-cc02c",
    storageBucket: "jobify-cc02c.appspot.com",
    messagingSenderId: "282929576696",
    appId: "1:282929576696:web:ed7b9ed22871e573fcd90d",
    measurementId: "G-ZR09G7RH5D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage();
const storageRef = ref(storage)

export { auth, db, googleProvider, storage, storageRef };