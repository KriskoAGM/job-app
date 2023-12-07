import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <div className="container">
                <p>
                    &copy; <span id="displayYear"></span> All Rights Reserved By
                    <a href="https://html.design/">Free Html Templates</a>
                </p>
            </div>
        </footer>
    )
};

export default Footer