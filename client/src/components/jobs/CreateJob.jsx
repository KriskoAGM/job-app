import { useNavigate } from 'react-router-dom'

import * as jobService from '../../services/jobService.js'

import styles from "../../styles/Forms.module.css";

import { motion } from 'framer-motion';

const CreateJob = () => {
    const navigate = useNavigate();
    const isNumber = (value) => {
        const numericValue = parseFloat(value);
        return !isNaN(numericValue) && isFinite(numericValue);
    };

    const onCreateHandler = async (e) => {
        e.preventDefault();

        const jobData = Object.fromEntries(new FormData(e.currentTarget));

        if (!isNumber(jobData.salary)) {
            return;
        }

        jobData.salary = parseInt(jobData.salary);

        await jobService.create(jobData);

        return navigate('/jobs');
    }

    return (
        <motion.div
            className={styles.container}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
        >
            <div className={`${styles.create} ${styles.form}`}>
                <header>Post a job!</header>
                <form onSubmit={onCreateHandler}>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="location" placeholder="Location" />
                    <input type="text" name="salary" placeholder="Salary" />
                    <input type="text" name="companyLogo" placeholder="Company Logo" />
                    <textarea name="companyDescription" placeholder="Company Description" />
                    <textarea name="role" placeholder="Role Description" />
                    <textarea name="requirements" placeholder="Requirements separated by new line" />
                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </motion.div>
    )
};

export default CreateJob;