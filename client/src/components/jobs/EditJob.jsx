import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as jobService from '../../services/jobService.js';

import styles from "../../styles/Forms.module.css";

const EditJob = () => {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const [job, setJob] = useState({
        title: '',
        location: '',
        salary: '',
        companyLogo: '',
        companyDescription: '',
        role: '',
        requirements: '',
    });

    const [errorMsgs, setErrorMsgs] = useState({
        title: '',
        location: '',
        salary: '',
        companyDescription: '',
        role: '',
        requirements: '',
    });

    const isNumber = (value) => {
        const numericValue = parseFloat(value);
        return !isNaN(numericValue) && isFinite(numericValue);
    };

    useEffect(() => {
        jobService.getOne(jobId)
            .then(result => {
                setJob(result)
            });
    }, [jobId]);

    const editJobSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        const newErrorMsgs = {
            title: '',
            location: '',
            salary: '',
            companyDescription: '',
            role: '',
            requirements: '',
        };

        if (!values.title) {
            newErrorMsgs.title = 'Title is required.';
        }

        if (!values.location) {
            newErrorMsgs.location = 'Location is required.';
        }

        if (!values.salary) {
            newErrorMsgs.salary = 'Salary is required.';
        }

        // Validation for numeric salary
        if (!isNumber(values.salary)) {
            newErrorMsgs.salary = 'Salary must be a valid number.';
        }

        if (!values.companyDescription) {
            newErrorMsgs.companyDescription = 'Company description is required.';
        }

        if (!values.role) {
            newErrorMsgs.role = 'Role is required';
        }

        if (!values.requirements) {
            newErrorMsgs.requirements = 'Requirements are required';
        }

        // Update the error state
        setErrorMsgs(newErrorMsgs);

        // Check if there are any errors before submitting
        if (Object.values(newErrorMsgs).some((msg) => msg !== '')) {
            return;
        }

        try {
            await jobService.edit(jobId, values);
            navigate('/jobs');
        } catch (err) {
            console.log(err)
        };
    };

    const onChange = (e) => {
        setJob(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className={styles.container}>
            <div className={`${styles.create} ${styles.form}`}>
                <header>Edit</header>
                <form onSubmit={editJobSubmitHandler}>
                    <input
                        type="text"
                        name="title"
                        value={job.title}
                        onChange={onChange}
                        placeholder="Title"
                    />
                    {errorMsgs.title && <p className={styles.error}>{errorMsgs.title}</p>}

                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        onChange={onChange}
                        placeholder="Location"
                    />
                    {errorMsgs.location && <p className={styles.error}>{errorMsgs.location}</p>}

                    <input
                        type="text"
                        name="salary"
                        value={job.salary}
                        onChange={onChange}
                        placeholder="Salary"
                    />
                    {errorMsgs.salary && <p className={styles.error}>{errorMsgs.salary}</p>}

                    <input
                        type="text"
                        name="companyLogo"
                        value={job.companyLogo}
                        onChange={onChange}
                        placeholder="Company Logo"
                    />
                    <textarea
                        name="companyDescription"
                        value={job.companyDescription}
                        onChange={onChange}
                        placeholder="Company Description"
                    />
                    {errorMsgs.companyDescription && <p className={styles.error}>{errorMsgs.companyDescription}</p>}

                    <textarea
                        name="role"
                        value={job.role}
                        onChange={onChange}
                        placeholder="Role Description"
                    />
                    {errorMsgs.role && <p className={styles.error}>{errorMsgs.role}</p>}

                    <textarea
                        name="requirements"
                        value={job.requirements}
                        onChange={onChange}
                        placeholder="Requirements separated by new line"
                    />
                    {errorMsgs.requirements && <p className={styles.error}>{errorMsgs.requirements}</p>}

                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default EditJob;