import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import * as jobService from "../../services/jobService.js";

import styles from "../../styles/JobDetails.module.css";

const JobDetails = () => {
    const { jobId } = useParams();
    const [jobDetails, setJobDetails] = useState({});

    useEffect(() => {
        jobService.getOne(jobId)
            .then(setJobDetails)
    }, [jobId])

    return (
        <div className={styles.box}>
            <div className={styles.jobContentBox}>
                <div className={styles.imgBox}>
                    <img src={jobDetails.companyLogo} alt="" />
                </div>
                <div className={styles.detailBox}>
                    <h5>
                        {jobDetails.title}
                    </h5>
                    <div className={styles.detailInfo}>
                        <h6>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                                {jobDetails.location}
                            </span>
                        </h6>
                        <h6>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <span>
                                ${jobDetails.salary}
                            </span>
                        </h6>
                    </div>
                    <div className={styles.description}>
                        {jobDetails.companyDescription && (<>
                            <h3 className="title">
                                Who are we?
                            </h3>
                            <p className="text-description">
                                {jobDetails.companyDescription}
                            </p>
                        </>)}
                        {jobDetails.role && (<>
                            <h3 className="title">
                                Your Role
                            </h3>
                            <p className="text-description">
                                {jobDetails.role}
                            </p>
                        </>)}
                        {jobDetails.requirements && (<>
                            <h3 className="title">
                                Requirements:
                            </h3>
                            <ul>
                                {jobDetails.requirements.split('\n').map(req => (
                                    <li key={req}>{req}</li>
                                ))}
                            </ul>
                        </>)}
                    </div>
                </div>
            </div>
            <div className={styles.optionBox}>
                <Link to="/" className={styles.applyBtn}>
                    Apply Now
                </Link>
            </div>
        </div>
    )
};

export default JobDetails;