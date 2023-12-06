import { useState, useEffect } from 'react';

import * as jobService from '../../services/jobService.js';

import JobItem from './JobItem';

const JobsList = () => {
    const [ jobs, setJobs ] = useState([]);

    useEffect(() => {
        jobService.getJobList()
            .then(data => setJobs(Object.values(data)));
    }, [])

    return (
        <section className="job_section layout_padding">
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
        </section>
    )
};

export default JobsList;