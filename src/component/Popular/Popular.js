import React from "react";
import styles from './Popular.module.css';
import img01 from '../../assets/images/image-retro-pcs.jpg'
import img02 from '../../assets/images/image-top-laptops.jpg'
import img03 from '../../assets/images/image-gaming-growth.jpg'

function Popular() {
    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <div className={styles.img}>
                    <img src={img01} alt=""/>
                </div>
                <div className={styles.texts}>
                    <h2>01</h2>
                    <h3>Reviving Retro PCs</h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.img}>
                    <img src={img02} alt=""/>
                </div>
                <div className={styles.texts}>
                    <h2>02</h2>
                    <h3>Top 10 Laptops of 2022</h3>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </article>
            <article className={styles.article}>
                <div className={styles.img}>
                    <img src={img03} alt=""/>
                </div>
                <div className={styles.texts}>
                    <h2>03</h2>
                    <h3>The Growth of Gaming</h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </article>
        </section>
    );
}

export default Popular;

