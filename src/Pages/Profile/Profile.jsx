import React, { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import Button from '../../Components/Button/Button';
import Form from '../../Components/Form/Form';
import FormInput from '../../Components/FormInput';
import Input from '../../Components/Input/Input';
import Page from '../../Components/Page/Page';
import { AlertContext } from '../../Context/AlertContext';
import { AuthContext } from '../../Context/AuthContext';
import { useProfileForm } from '../../Utils/Hooks';

import DeleteIcon from '../../Assets/svg/DeleteIcon';
import FileUpload from '../../Components/FileUpload/FileUpload';


const personalDetailsFields = [
    {
        field: 'firstname',
        label: 'first name',
        type: 'text'
    },
    {
        field: 'lastname',
        label: 'last name',
        type: 'text'
    },
    {
        field: 'email',
        label: 'email',
        type: 'text'
    },
    {
        field: 'number',
        label: 'phone number',
        type: 'number'
    }
]

const personalDetailsValidator = {
    firstname: (value) => {
        if (!value) return 'first name is required';
        if (!/^[a-zA-Z ]+$/i.test(value)) return 'first name must be alphabetic';
    },
    lastname: (value) => {
        if (!value) return 'last name is required';
        if (!/^[a-zA-Z ]+$/i.test(value)) return 'last name must be alphabetic';
    },
    email: (value) => {
        if (!value) return 'email is required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'invalid email';
    },
    number: (value) => {
        if (!value) return 'phone number is required';
        if (!/^[0-9]{11}$/i.test(value)) return 'invalid phone number (should be eleven digits)';
    }
}

const locationFields = [
    {
        field: 'country',
        label: 'country',
        type: 'text'
    },
    {
        field: 'zipcode',
        label: 'zipcode',
        type: 'number'
    },
    {
        field: 'state',
        label: 'state',
        type: 'text'
    },
    {
        field: 'city',
        label: 'city',
        type: 'tel'
    }
]

const locationValidator = {
    country: (value) => {
        if (!value) return 'country is required';
        if (!/^[a-zA-Z ]+$/i.test(value)) return 'country must be alphabetic';
    },
    zipcode: (value) => {
        if (!value) return 'zipcode is required';
        if (!/^[0-9]{5,6}$/i.test(value)) return 'invalid zipcode (should be six digits)';
    },
    state: (value) => {
        if (!value) return 'state is required';
        if (!/^[a-zA-Z ]+$/i.test(value)) return 'state must be alphabetic';
    },
    city: (value) => {
        if (!value) return 'city is required';
        if (!/^[a-zA-Z ]+$/i.test(value)) return 'city must be alphabetic';
    }
}


const initialExperience = () => {
    return {
        id: Date.now(),
        company: '',
        position: '',
        start_date: '',
        end_date: ''
    }
}

const Profile = () => {
    const { userData, fetchUserData } = useContext(AuthContext);
    const { personalDetails, locationDetails, experienceList, educationDetails, uploadUpdatedDetails } = useProfileForm({ userData, fetchUserData });

    return (
        <Page
            className="space-y-8 divide-y-2"
        >

            <FileUpload />

            <ProfileFormSection
                title="Personal Details"
                fields={personalDetailsFields}
                userData={userData}
                initialValues={personalDetails}
                uploadUpdatedDetails={uploadUpdatedDetails}
                validateForm={personalDetailsValidator}
            />

            <ProfileFormSection
                title="location"
                fields={locationFields}
                userData={userData}
                initialValues={locationDetails}
                uploadUpdatedDetails={uploadUpdatedDetails}
                validateForm={locationValidator}
            />

            <ExperienceForm
                initialExperienceList={experienceList}
                uploadUpdatedDetails={uploadUpdatedDetails}
            />

        </Page>
    );
}

const ProfileFormSection = ({ title, fields, initialValues, uploadUpdatedDetails, validateForm }) => {
    // const submitForm = (values) => {
    //     console.log(values);
    //     uploadUpdatedDetails(values);
    // }

    return (
        <section className="space-y-4 py-4">
            <h1 className="text-xl capitalize font-bold">{title}</h1>
            <Form
                initialValues={initialValues}
                onSubmit={uploadUpdatedDetails}
                validateForm={validateForm}
                className="space-y-6"
            >
                <div className="grid grid-cols-2 gap-6">
                    {
                        fields.map(
                            (field, index) => (
                                <div className="space-y-2" key={index}>
                                    <span className="capitalize text-gray-700">
                                        {field.label}
                                    </span>

                                    <FormInput
                                        type={field.type}
                                        field={field.field}
                                        placeholder={field.label}
                                        color='transparent'
                                        width='full'
                                    />
                                </div>
                            )
                        )
                    }
                </div>
                <Button
                    color='primary'
                    text="Update"
                    type="submit"
                    size="fit"
                    // padding="tight"
                    isformbutton={true}
                />
            </Form>
        </section>

    )
}

const ExperienceForm = ({ initialExperienceList, uploadUpdatedDetails, }) => {
    const [experienceList, updateExperienceList] = useState(initialExperienceList);
    const [errors, updateErrors] = useState({});
    const alertContext = useContext(AlertContext);

    const deleteExperience = (id) => {
        const newExperienceList = experienceList.filter(
            (experience) => experience.id !== id
        );
        updateExperienceList(newExperienceList);

        const newErrors = errors;
        delete newErrors[id];

        updateErrors(newErrors)

        alertContext.addAlert({
            type: "info",
            label: "experience deleted"
        })
    }

    useEffect(() => {
        console.log(errors);

    }, [JSON.stringify(errors)]);

    const addExperience = () => {
        const newExperienceList = [...experienceList, initialExperience()];

        console.log(newExperienceList);
        updateExperienceList(newExperienceList);

        alertContext.addAlert({
            type: "info",
            label: "experience added"
        })
    }

    const updateExperience = (values) => {
        let newExperienceList = experienceList.map(item => item.id !== values.id ? item : values);
        updateExperienceList(newExperienceList);
    }

    const validateExperience = (values) => {
        const errors = {};

        if (!values.company || values.company === '') {
            errors.company = 'company is required'
        } else {
            delete errors.company;
        }

        if (!values.position || values.position === '') {
            errors.position = 'position is required';
        } else {
            delete errors.position;
        }

        if (!values.start_date || values.start_date === '') {
            console.log(values.end_date);
            errors.start_date = 'start date is required';
        } else if (values.start_date > Date.now()) {
            errors.start_date = 'start date must be in the past';
        } else {
            delete errors.start_date;
        }

        if (!values.end_date || values.end_date === '') {
            console.log(values.end_date);
            errors.end_date = 'end date is required';
        } else if (values.end_date < values.start_date) {
            errors.end_date = 'end date should be greater than start date';
        } else {
            delete errors.end_date;
        }

        return errors;
    }

    useEffect(() => {
        experienceList.forEach((experience) => {
            const newError = {};
            const newErrors = validateExperience(experience);
            const key = experience.id;
            const oldErrors = errors;

            if (Object.keys(newErrors).length > 0) {
                newError[key] = newErrors;
                updateErrors(prevError => { return { ...prevError, ...newError } });
                // console.log(newError);
            } else {
                // console.log(key);
                delete oldErrors[key];
                updateErrors(oldErrors);
            }

        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [experienceList]);


    const submit = () => {
        if (Object.keys(errors).length > 0) {
            alertContext.addAlert({
                type: "warning",
                label: "some fields are invalid"
            })
            return;
        }
        console.log(experienceList);
        uploadUpdatedDetails({ experience: experienceList })
        // updateDetails({ experience: experienceList }, errors, 'experience');
    }

    return (
        <section className="py-4 space-y-4">
            <h1 className="text-xl capitalize font-bold">Experience</h1>
            {
                experienceList.length > 0 ?
                    experienceList.map(
                        (experience, index) => {
                            const objkey = experience.id;
                            const experienceError = errors[objkey] || {};
                            return (
                                <ExperienceItem
                                    key={index}
                                    experience={experience}
                                    deleteExperienceHandler={deleteExperience}
                                    updateExperienceHandler={updateExperience}
                                    error={experienceError}
                                />
                            )
                        }
                    )
                    :
                    <div className="text-center">
                        <p className="text-gray-700">No experience added</p>
                    </div>
            }

            <div className="flex gap-x-2">
                <Button
                    text="Add Experience"
                    color="secondary"
                    onClick={addExperience}
                    size="fit"
                />
                <Button
                    text="update"
                    color="primary"
                    onClick={submit}
                    size="fit"
                />

            </div>

        </section>
    )
}

const ExperienceItem = ({ experience, deleteExperienceHandler, updateExperienceHandler, error }) => {
    const [experienceData, setExperienceData] = useState(experience);
    const companyEl = useRef(null);
    const positionEl = useRef(null);
    const startDateEl = useRef(null);
    const endDateEl = useRef(null);

    useEffect(() => {
        // console.log(experienceData);
        updateExperienceHandler(experienceData);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [experienceData]);

    const onInputEntered = (ref) => {
        // console.log(ref.current.value, ref.current.name);
        setExperienceData({ ...experienceData, [ref.current.name]: ref.current.value });
    }

    return (
        <div className="flex gap-2">
            <div className="w-full grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <span className="capitalize text-gray-700">
                        company
                    </span>
                    <Input
                        type="text"
                        placeholder="company"
                        name="company"
                        color='transparent'
                        width='full'
                        value={experienceData.company}
                        onChange={() => onInputEntered(companyEl)}
                        ref={companyEl}
                    />
                    {
                        error['company'] &&
                        <div className="text-red-500 text-xs italic">{error['company']}</div>
                    }
                </div>

                <div className="space-y-2">
                    <span className="capitalize text-gray-700">
                        position
                    </span>
                    <Input
                        type="text"
                        placeholder="position"
                        name="position"
                        color='transparent'
                        width='full'
                        value={experienceData.position}
                        onChange={() => onInputEntered(positionEl)}
                        ref={positionEl}
                    />
                    {
                        error['position'] &&
                        <div className="text-red-500 text-xs italic">{error['position']}</div>
                    }
                </div>

                <div className="space-y-2">
                    <span className="capitalize text-gray-700">
                        From
                    </span>
                    <Input
                        type="date"
                        name="start_date"
                        color='transparent'
                        width='full'
                        value={experienceData.start_date}
                        onChange={() => onInputEntered(startDateEl)}
                        ref={startDateEl}
                    />
                    {
                        error['start_date'] &&
                        <div className="text-red-500 text-xs italic">{error['start_date']}</div>
                    }
                </div>

                <div className="space-y-2">
                    <span className="capitalize text-gray-700">
                        to
                    </span>
                    <Input
                        type="date"
                        name="end_date"
                        color='transparent'
                        width='full'
                        value={experienceData.end_date}
                        onChange={() => onInputEntered(endDateEl)}
                        ref={endDateEl}
                    />
                    {
                        error['end_date'] &&
                        <div className="text-red-500 text-xs italic">{error['end_date']}</div>
                    }
                </div>
                <div className="col-span-2 flex justify-center">
                    <button onClick={() => deleteExperienceHandler(experience.id)}>
                        <DeleteIcon className="h-8 w-8 fill-primary" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile;
