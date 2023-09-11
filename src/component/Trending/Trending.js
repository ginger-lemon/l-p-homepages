import React from "react";
import articleImg from "../../assets/images/image-web-3-desktop.jpg";
import Button from './Button.js';
import styles from './Trending.module.css'

function Trending() {
    return (
        <article className={styles.article}>
            <img 
                src={articleImg} 
                alt="" 
                className={styles.img}
            />
            <div className={styles.divTexts}>
            <h1 className={styles.h1}>
                The Bright Future of Web 3.0?
            </h1>
            <div className={styles.box}>
                <p>
                        We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <Button 
                    buttonText="READ MORE"
                />
            </div>
            </div>
        </article>
    );
}

export default Trending;