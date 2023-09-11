import React from "react";
import logo from "../../assets/images/logo.svg"
import styles from './Header.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <img 
                src={logo}
                alt=""
                className={styles.logo}
            />
            <nav className={styles.nav}>
                <span>Home</span>
                <span>New</span>
                <span>Popular</span>
                <span>Trending</span>
                <span>Categories</span>
            </nav>
        </header>
    );
}

export default Header;