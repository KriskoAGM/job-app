import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as jobService from '../../services/jobService.js';

import JobItem from './JobItem';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        jobService.getLatest()
            .then(data => setJobs(Object.values(data)));
    }, []);

    return (
        <section className="job_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        RECENT JOBS
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
        </section>
    )
};

export default Jobs