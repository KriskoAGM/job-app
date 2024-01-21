import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            className="about_section layout_padding"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    About Us
                                </h2>
                            </div>
                            <p>
                                Normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                                readable English. Many desktop publishing packages and web page editors has a more-or-less normal
                                distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                                English. Many desktop publishing packages and web page editors
                            </p>
                            <a href="">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/about-img.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default About