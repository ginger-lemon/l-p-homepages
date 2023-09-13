import React from "react";
import logo from "../../assets/images/logo.svg"
import styles from './Header.module.css';
import menuMobile from '../../assets/images/icon-menu.svg'


function Header({ onClick }) {
    return(
        <header className={styles.header}>
            <img 
                src={logo}
                alt=""
                className={styles.logo}
            />
            <nav className={styles.navDesktop}>
                <span>Home</span>
                <span>New</span>
                <span>Popular</span>
                <span>Trending</span>
                <span>Categories</span>
            </nav>
            <nav 
                className={styles.navMobile}
                onClick={onClick}
            >
                <img 
                    src={menuMobile} 
                    className={StyleSheetList.menuMobile} 
                    alt=""
                />
            </nav>
        </header>
    );
}

export default Header;