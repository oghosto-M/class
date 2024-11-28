import React from 'react';

// image 
import image1 from "../../assets/about.png"

// style
import styles from "../About/AboutSection.module.css"

//component
import AboutComponent from '../About/AboutComponent'


const AboutSection = () => {
    return (
    <>
        <section className={styles.container} >
            <div className={styles.text} >
                <h1>Welcome to where possibilities begin</h1>
            </div>
            <div className={styles.image} >
                <img src={image1} alt='about_image' />
            </div>
        </section>
        <AboutComponent/>
    </>
    );
};

export default AboutSection;