import styles from "../../styles/Forms.module.css";

const CreateJob = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.create} ${styles.form}`}>
                <header>Create</header>
                <form >
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="location" placeholder="Location" />
                    <input type="number" name="salary" placeholder="Salary" />
                    <input type="text" name="companyLogo" placeholder="Company Logo" />
                    <textarea name="description" placeholder="Description" />
                    <input type="submit" className={styles.button} value="Submit" />
                </form>
            </div>
        </div>
    )
};

export default CreateJob;