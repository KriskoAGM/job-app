import { Link } from "react-router-dom";

import styles from "../../styles/JobDetails.module.css";

const JobDetails = () => {
    return (
        <div className={styles.box}>
            <div className={styles.jobContentBox}>
                <div className={styles.imgBox}>
                    <img src="../../images/job_logo3.png" alt="" />
                </div>
                <div className={styles.detailBox}>
                    <h5>
                        Looking Graphic Designer (Logo + UI)
                    </h5>
                    <div className={styles.detailInfo}>
                        <h6>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>
                                Washington. D.C.
                            </span>
                        </h6>
                        <h6>
                            <i className="fa fa-money" aria-hidden="true"></i>
                            <span>
                                $1200/mo
                            </span>
                        </h6>
                    </div>
                    <div className={styles.description}>
                        <h3 className="title">
                            Who are we?
                        </h3>
                        <p className="text-description">
                            MobiSystems is a Bulgarian product development company that creates and sells its own productivity applications for Windows, Android, iOS and macOS. Our applications are installed on more than 500 million devices worldwide. During our 22 year history, we have created OfficeSuite, PDF Extra, Translators & Dictionaries and MobiDrive, which have proven themselves to be viable alternatives for the products from Microsoft and Adobe.

                            Currently, we have 200 employees in our headquarters in Sofia and offices in San Diego.
                        </p>
                        <h3 className="title">
                            Your Role
                        </h3>
                        <p className="text-description">
                            The 10-person web team within MobiSystems is responsible for several different web sites and applications that are critical for the company business. We are looking for experienced front-end web developers with React to join the team and contribute to the many new features that are planned. You will help to re-engineer the MobiSystems web applications, so that they use a modern technology stack and a microservices architecture. You will work in a team with Product Managers, UIUX designers, Back-end engineers, QAs and other Web developers in an agile process and deliver new features for our users on a weekly basis.
                        </p>
                        <h3 className="title">
                            Requirements:
                        </h3>
                        <ul>
                            <li>M.Sc. or B.Sc. in Informatics, Computer Science, Engineering or equivalent</li>
                            <li>5+ years of professional experience with frontend development</li>
                            <li>Proficiency in JavaScript and TypeScript</li>
                            <li>4+ years of professional experience with React</li>
                        </ul>
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