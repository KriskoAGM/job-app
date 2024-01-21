import { useState, useEffect } from 'react';

import * as jobService from '../../services/jobService.js';

import JobItem from './JobItem';

import { motion } from 'framer-motion';

const JobsList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.getJobList()
            .then(data => setJobs(Object.values(data)));
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            window.scrollTo(0, 0);
        };

        window.addEventListener("popstate", handleScroll);

        return () => {
            window.removeEventListener("popstate", handleScroll);
        };
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
                        ALL JOBS
                    </h2>
                </div>
                <div className="job_container">
                    <div className="row">

                        {jobs.map(job => (
                            <JobItem key={job._id} job={job} />
                        ))}

                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default JobsList;