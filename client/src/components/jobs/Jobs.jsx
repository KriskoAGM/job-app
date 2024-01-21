import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as jobService from '../../services/jobService.js';

import JobItem from './JobItem';

import { motion } from 'framer-motion';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.getLatest()
            .then(data => setJobs(Object.values(data)));
    }, []);

    return (
        <motion.div
            className="job_section layout_padding"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
        >
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        LATEST JOBS
                    </h2>
                </div>
                <div className="job_container">
                    <div className="row">
                        {jobs.map(job => (
                            <JobItem key={job._id} job={job} />
                        ))}
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/jobs">
                        View All
                    </Link>
                </div>
            </div>
        </motion.div>
    )
};

export default Jobs