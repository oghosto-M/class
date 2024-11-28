import React, { useState } from 'react';

// style
import styles from "../Body/CourseSection.module.css"

// constant 
import { products } from '../../../constant/products';

// component
import CourseCard from '../Body/CourseCard';

const CourseSection = () => {

    const [Products,setProducts] = useState(products)

    return (
        <section className={styles.Container} >
            <div className={styles.Course_section} >
                <h2>Learners are viewing</h2>
                <div className={styles.Course_cards} >
                    {
                        Products.map((product) => <CourseCard key={product.id}  data={product} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default CourseSection;