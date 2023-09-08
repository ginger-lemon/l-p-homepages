import React from "react";
import logo from "../../assets/images/logo.svg"

function Header() {
    return(
        <header>
            <img 
                src={logo}
                alt=""
                className=""
            />
            <nav>
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