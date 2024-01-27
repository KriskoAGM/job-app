import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import * as jobService from '../../services/jobService.js'

import styles from "../../styles/Forms.module.css";

import { motion } from 'framer-motion';

const CreateJob = () => {
    const navigate = useNavigate();
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

    const onCreateHandler = async (e) => {
        e.preventDefault();

        const jobData = Object.fromEntries(new FormData(e.currentTarget));

        const newErrorMsgs = {
            title: '',
            location: '',
            salary: '',
            companyDescription: '',
            role: '',
            requirements: '',
        };

        if (!jobData.title) {
            newErrorMsgs.title = 'Title is required.';
        }

        if (!jobData.location) {
            newErrorMsgs.location = 'Location is required.';
        }

        if (!jobData.salary) {
            newErrorMsgs.salary = 'Salary is required.';
        } else if (!isNumber(jobData.salary)) {
            newErrorMsgs.salary = 'Salary must be a valid number.';
        }

        if (!jobData.companyDescription) {
            newErrorMsgs.companyDescription = 'Company description is required.';
        }

        if (!jobData.role) {
            newErrorMsgs.role = 'Role is required';
        }

        if (!jobData.requirements) {
            newErrorMsgs.requirements = 'Requirements are required';
        }

        // Update the error state
        setErrorMsgs(newErrorMsgs);

        // Check if there are any errors before submitting
        if (Object.values(newErrorMsgs).some((msg) => msg !== '')) {
            return;
        }

        // All validations passed, continue with the submission
        jobData.salary = parseInt(jobData.salary);

        await jobService.create(jobData);

        return navigate('/jobs');
    }

    return (
        <motion.div
            className={styles.container}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className={`${styles.create} ${styles.form}`}>
                <header>Post a job!</header>
                <form onSubmit={onCreateHandler}>
                    <input type="text" name="title" placeholder="Title" />
                    {errorMsgs.title && <p className={styles.error}>{errorMsgs.title}</p>}

                    <input type="text" name="location" placeholder="Location" />
                    {errorMsgs.location && <p className={styles.error}>{errorMsgs.location}</p>}

                    <input type="text" name="salary" placeholder="Salary" />
                    {errorMsgs.salary && <p className={styles.error}>{errorMsgs.salary}</p>}

                    <input type="text" name="companyLogo" placeholder="Company Logo" />

                    <textarea name="companyDescription" placeholder="Company Description" />
                    {errorMsgs.companyDescription && <p className={styles.error}>{errorMsgs.companyDescription}</p>}

                    <textarea name="role" placeholder="Role Description" />
                    {errorMsgs.role && <p className={styles.error}>{errorMsgs.role}</p>}

                    <textarea name="requirements" placeholder="Requirements separated by new line" />
                    {errorMsgs.requirements && <p className={styles.error}>{errorMsgs.requirements}</p>}

                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </motion.div>
    )
};

export default CreateJob;