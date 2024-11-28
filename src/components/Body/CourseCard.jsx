import React from 'react';

// styles
import styles from "../Body/CourseCard.module.css"

const CourseCard = ({data}) => {

    const {bestSell,currentPrice,image,originalPrice,rate,reviews,teacher,name} = data;

    return (
        <div className={styles.Card} >  
            <img src={image} alt='course_img' />
            <h3>{name}</h3>
            <p className={styles.Course_teacher} >{teacher}</p>
            <p className={styles.rating}>{rate} ★★★★☆ ({reviews})</p>
            <p className={styles.price}> €{currentPrice} <span className={styles.original_price}>€{originalPrice}</span> </p>
            <button>{bestSell}</button>
        </div>
    );
};

export default CourseCard;