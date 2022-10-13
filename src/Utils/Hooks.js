import { createRef, useContext, useEffect, useReducer, useRef, useState } from "react";
import { AlertContext } from "../Context/AlertContext";
import { deserializeValue, serializeValue } from "./data";
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db, storage } from './Firebase.config';
import { AuthContext } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const useLocalState = (defaultValue, stateKey) => {
    const localValue = localStorage.getItem(stateKey)
    const parsedValue = localValue ? deserializeValue(localValue) : defaultValue
    const [value, setValue] = useState(parsedValue)

    const setNewValue = (newValue) => {
        setValue((prev) => {
            let val = typeof (newValue) === "function" ? ((newValue)(prev)) : newValue;
            localStorage.setItem(stateKey, serializeValue(val))
            return val;
        })
    }

    return [value, setNewValue]
}

//general actions for API calls
export const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

// reducer function
export function readReducer(state, action) {
    switch (action.type) {

        //outputs loader to the page and await API request response
        case ACTIONS.MAKE_REQUEST:
            return { ...state, loading: true };

        //collect data from response and pass it page, remove loader and output data
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, ...action.payload };

        //if error is found, output error message, return empty array back to page
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error };

        default:
            break;

    }
}

export function writeReducer(state, action) {
    switch (action.type) {

        //outputs loader to the page and await API request response
        case ACTIONS.MAKE_REQUEST:
            return { ...state, loading: true };

        //collect data from response and pass it page, remove loader and output data
        case ACTIONS.GET_RESPONSE:
            return { ...state, loading: false, ...action.payload };

        //if error is found, output error message, return empty array back to page
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error };

        default:
            break;

    }

}



//send request to database to pull jobs data
export const useGetJobs = () => {
    const [state, dispatch] = useReducer(readReducer, { jobsList: [], loading: true });
    const alertContext = useContext(AlertContext);
    const location = useLocation();

    const fetchJobs = async () => {
        try {
            dispatch({ type: ACTIONS.MAKE_REQUEST })
            const querySnapshot = await getDocs(collection(db, "jobs"));
            let jobsList = [];

            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots

                jobsList.push({ id: doc.id, data: doc.data() });
            });

            console.log(jobsList);

            dispatch({ type: ACTIONS.GET_DATA, payload: { jobsList } })
        } catch (err) {
            console.error(err);

            alertContext.addAlert({
                type: "error",
                label: "An error occured while fetching jobs data"
            })

            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [location]);

    return state;
}

//get user jobs data
export const useUserJobsData = () => {
    const [state, dispatch] = useReducer(readReducer, { userJobsData: {}, loading: true });
    const { userData } = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const location = useLocation();

    const USERJOBFIELDS = {
        APPLIED: 'applied',
        ARCHIVED: 'archived',
        OFFERS: 'offers',
        SAVED: 'saved',
    }

    const fetchUserJobsData = async function () {
        try {
            dispatch({ type: ACTIONS.MAKE_REQUEST })
            const docRef = collection(db, "userJobsData");
            const q = query(docRef, where('uid', "==", userData.uid));
            const doc = await getDocs(q);
            const userJobsData = { id: doc.docs[0].id, ...doc.docs[0].data() };

            dispatch({ type: ACTIONS.GET_DATA, payload: { userJobsData } })
        } catch (err) {
            console.error(err);

            alertContext.addAlert({
                type: "error",
                label: "An error occured while fetching jobs data"
            })

            dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
        }
    }

    useEffect(() => {
        // console.log('here');
        fetchUserJobsData();
    }, [location]);

    const updateUserJobData = async (jobId, type) => {
        console.log(type, jobId);
        try {
            let docRef = collection(db, "userJobsData");
            let q = query(docRef, where('uid', "==", userData.uid));
            const docs = await getDocs(q);
            const userJobsDataId = docs.docs[0].id;

            docRef = doc(db, "userJobsData", userJobsDataId);
            await updateDoc(docRef, {
                [type]: arrayUnion(jobId)
            });

            fetchUserJobsData()
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return { ...state, updateUserJobData, fetchUserJobsData, USERJOBFIELDS };
}

export function useClickOutside(nodeRef, onClickOutside) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (nodeRef.current && !nodeRef.current.contains(event.target)) {
                onClickOutside()
            }
        }
        // Bind
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // dispose
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [nodeRef, onClickOutside]);
}

export function useProfileForm({ userData, fetchUserData }) {

    const alertContext = useContext(AlertContext);

    const personalDetails = { firstname: userData.firstname || '', lastname: userData.lastname || '', email: userData.email, number: userData.number || '' };

    const locationDetails = { country: userData.country || '', state: userData.state || '', zipcode: userData.zipcode || '', city: userData.city || '' };

    const experienceList = userData.experience || [];

    const educationDetails = userData.education || [];

    const [loading, setLoading] = useState(false);

    const uploadUpdatedDetails = async (values) => {
        console.log(values);
        try {
            let docRef = doc(db, "users", userData.id);
            await updateDoc(docRef, { ...values });

            fetchUserData(userData);

            alertContext.addAlert({
                type: "success",
                label: "Successfully updated details"
            })

            setLoading(false);

        } catch (error) {
            console.error(error);
            alertContext.addAlert({
                type: "error",
                label: "error updating details"
            })
        }
    }

    return { personalDetails, locationDetails, experienceList, educationDetails, uploadUpdatedDetails, loading };
}

export function useFileUpload() {
    const [file, setFile] = useState();

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    return { file, handleChange };
}
