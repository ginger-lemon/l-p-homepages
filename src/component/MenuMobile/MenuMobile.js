import React from "react";
import styles from './MenuMobile.module.css'
import menuCloseMobile from '../../assets/images/icon-menu-close.svg'

function MenuMobile({ onClick }) {
    return (
        <div className={styles.extendMenuMobile}>
            <img 
                src={menuCloseMobile} 
                className={styles.menuCloseMobile}
                onClick={onClick} 
                alt=""
            />
            <nav className={styles.navMobile}>
                <span>Home</span>
                <span>New</span>
                <span>Popular</span>
                <span>Trending</span>
                <span>Categories</span>
            </nav>
        </div>
    );
}

export default MenuMobile;