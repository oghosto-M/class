import React from 'react';

// style
import styles from "../About/AboutComponent.module.css"

const AboutComponent = () => {
    return (
        <section className={styles.container} >
            <div className={styles.header_section}>
                <p>
                    We help organizations of all types and sizes prepare for the path
                    ahead — wherever it leads. Our curated collection of business and
                    technical courses help companies, governments, and nonprofits go
                    further by placing learning at the center of their strategies.
                </p>
                <button className={styles.btn}>Learn more</button>
            </div>
            <div className={styles.cards}>

                <div className={styles.card} >
                    <p className={styles.quote}>
                        <span className={styles.quote_mark}>“</span>
                        Udemy fit us like a glove. Their team curates fresh, up-to-date
                        courses from their marketplace and makes them available to
                        customers.
                    </p>
                    <p className={styles.author}>Varun Patil</p>
                    <p className={styles.role}>Senior Manager of HR Development</p>
                    <a href="#" className={styles.case_study}>
                        Read the Synechron case study &rarr;
                    </a>
                </div>

                <div className={styles.card} >
                    <p className={styles.quote}>
                        <span className={styles.quote_mark}>“</span>
                        Udemy fit us like a glove. Their team curates fresh, up-to-date
                        courses from their marketplace and makes them available to
                        customers.
                    </p>
                    <p className={styles.author}>Varun Patil</p>
                    <p className={styles.role}>Senior Manager of HR Development</p>
                    <a href="#" className={styles.case_study}>
                        Read the Synechron case study &rarr;
                    </a>
                </div>

                <div className={styles.card} >
                    <p className={styles.quote}>
                        <span className={styles.quote_mark}>“</span>
                        Udemy fit us like a glove. Their team curates fresh, up-to-date
                        courses from their marketplace and makes them available to
                        customers.
                    </p>
                    <p className={styles.author}>Varun Patil</p>
                    <p className={styles.role}>Senior Manager of HR Development</p>
                    <a href="#" className={styles.case_study}>
                        Read the Synechron case study &rarr;
                    </a>
                </div>

            </div>
        </section>
    );
};

export default AboutComponent;