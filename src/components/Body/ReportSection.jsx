import React from 'react';

// styles
import styles from "../Body/ReportSection.module.css"

// image
import image1 from "../../assets/hero_section.png"


const ReportSection = () => {
    return (
    <section>
        <div className={styles.container}>
                <div className={styles.content} >
                    <h1>Top trends for the future of work</h1>
                    <p>
                        Our 2025 Global Learning & Skills Trends Report is out now! Find out how to build the skills to keep pace with change.
                    </p>
                    <a href="#" className={styles.btn} >Get the report →</a>
                </div>
                <div className={styles.image_container} >
                    <img src={image1} alt="2025 Global Learning Trends Report"/>
                </div>
      </div>
    </section>
    
    );
};

export default ReportSection;