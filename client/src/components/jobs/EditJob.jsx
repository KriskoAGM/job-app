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

    useEffect(() => {
        jobService.getOne(jobId)
            .then(result => {
                setJob(result)
            });
    }, [jobId]);

    const editJobSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

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
                    <input
                        type="text"
                        name="location"
                        value={job.location}
                        onChange={onChange}
                        placeholder="Location"
                    />
                    <input
                        type="text"
                        name="salary"
                        value={job.salary}
                        onChange={onChange}
                        placeholder="Salary"
                    />
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
                    <textarea
                        name="role"
                        value={job.role}
                        onChange={onChange}
                        placeholder="Role Description" />
                    <textarea
                        name="requirements"
                        value={job.requirements}
                        onChange={onChange}
                        placeholder="Requirements separated by new line"
                    />
                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default EditJob;