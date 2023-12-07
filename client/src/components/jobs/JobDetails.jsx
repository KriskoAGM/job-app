import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

import * as jobService from "../../services/jobService.js";

import styles from "../../styles/JobDetails.module.css";

const JobDetails = () => {
    const { userId } = useContext(AuthContext);
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [jobDetails, setJobDetails] = useState({});


    useEffect(() => {
        jobService.getOne(jobId)
            .then(setJobDetails)
    }, [jobId])

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm('Do you want to delete this job offer');

        if (hasConfirmed) {
            await jobService.remove(jobId);

            navigate('/jobs');
        };
    };

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
                <Link to="/" className={styles.btn}>
                    Apply Now
                </Link>
            </div>
            {userId === jobDetails._ownerId && (
                <div className={styles.buttons}>
                    <Link to={`/details/${jobId}/edit`} className={styles.btn}>Edit</Link>
                    <button className={styles.deleteBtn} onClick={deleteButtonClickHandler}>Delete</button>
                </div>
            )}
        </div>
    )
};

export default JobDetails;