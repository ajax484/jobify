import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import FormInput from "../../Components/FormInput";

import Google from '../../Assets/Img/jobssection/google.svg';

import dots from '../../Assets/Img/auth/dots.svg';
import register1 from '../../Assets/Img/auth/register1.png';
import register2 from '../../Assets/Img/auth/register2.png';

import { auth, db } from "../../Utils/Firebase.config";

import { AlertContext } from "../../Context/AlertContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import Page from "../../Components/Page/Page";
import { AuthContext } from "../../Context/AuthContext";

// import "./Register.css";

const initialValues = {
    name: "",
    name_err: "",
    email: "",
    email_err: "",
    password: "",
    password_err: "",
    terms_accepted: false
}

function Register() {
    const [disabled, setDisabled] = useState(true);
    const { signInWithGoogle } = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const navigate = useNavigate();

    const register = (values) => {
        let errors = {};
        const { name, email, password } = values;

        if (password.length < 6) errors.password = "Password must be at least 6 characters";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = "Invalid email";
        if (!/^[a-zA-Z ]+$/i.test(name)) errors.name = "Invalid name";

        if (Object.keys(errors).length > 0) {
            return alertContext.addAlert({
                type: "error",
                label: "one or more fields are empty or invalid"
            });
        }

        (async function (name, email, password) {
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                const user = res.user;
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name,
                    authProvider: "local",
                    email,
                });

                await addDoc(collection(db, "userJobsData"), {
                    applied: [],
                    archived: [],
                    matches: [],
                    offers: [],
                    saved: [],
                    interviews: [],
                    uid: user.uid,
                });

                navigate("/app/login");
                alertContext.addAlert({
                    type: "success",
                    label: "Successfully registered"
                })

            } catch (err) {
                let errMessage = 'Something went wrong';

                alertContext.addAlert({
                    type: "error",
                    label: errMessage
                })
            }
        })(name, email, password);

    };

    return (
        <Page onlyLoggedOut>
            <section className="grid grid-cols-2">
                <div className="h-full relative">
                    <img className="absolute top-[20%] left-0" src={dots} alt="" />
                    <img className="absolute top-[calc(20%+5rem)] left-20 h-[250px]" src={register1} alt="" />
                    <img className="absolute top-[calc(20%+10rem)] left-52 h-[300px]" src={register2} alt="" />
                </div>

                <div className="h-screen justify-center flex flex-col gap-y-6 px-16">
                    <div className="flex flex-col gap-y-4">
                        <h1 className="text-3xl text-primary font-primaryExtraBold">Sign Up</h1>
                        <p className="text-lg text-gray-700 font-semibold">Lets get you onboard</p>

                        <Button
                            className="register__btn register__google"
                            onClick={signInWithGoogle}
                            type="button"
                            text="Sign Up with Google"
                            icon={<img src={Google} alt="" />}
                            color="default"
                            size="full"
                            isformbutton={false}
                        />
                    </div>

                    <span className="dividing__text text-center w-full font-bold text-gray-700">or sign up with</span>

                    <Form
                        className="flex flex-col gap-y-4 w-full"
                        initialValues={initialValues}
                        onSubmit={register}
                    >
                        <FormInput
                            type="text"
                            field="name"
                            placeholder="Full Name"
                        />

                        <FormInput
                            type="text"
                            field="email"
                            placeholder="E-mail Address"
                        />

                        <FormInput
                            type="password"
                            field="password"
                            placeholder="Password"
                        />


                        <div className="flex space-x-4 items-center">
                            <input
                                type="checkbox"
                                name="tersms_accepted"
                                checked={!disabled}
                                onChange={(e) => setDisabled(!e.target.checked)}
                                className="h-8 w-8"
                            />
                            <span className="text-gray-700">
                                i’ve read and agree wth <b>Terms of Service</b> and <b>our
                                    Privacy Policy</b>
                            </span>
                        </div>

                        <Button
                            color='primary'
                            text="Sign Up"
                            type="submit"
                            onClick={register}
                            size="full"
                            disabled={disabled}
                            isformbutton={true}
                        />
                        <div>
                            Already have an account? <Link to="/app/login"><span className="text-primary font-bold">Sign in</span></Link>
                        </div>
                    </Form>
                </div>
            </section>
        </Page>
    );
}
export default Register;
