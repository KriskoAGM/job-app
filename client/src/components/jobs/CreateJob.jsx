import styles from "../../styles/Forms.module.css";

const CreateJob = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.create} ${styles.form}`}>
                <header>Create</header>
                <form action="#">
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="Location" />
                    <input type="number" placeholder="Salary" />
                    <input type="text" placeholder="Company Logo" />
                    <textarea placeholder="Description" />
                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default CreateJob;