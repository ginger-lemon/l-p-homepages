import React from "react";
import articleImg from "../../assets/images/favicon-32x32.png"
import Button from './Button.js'

function Trending() {
    return (
        <article>
            <img 
                src={articleImg} 
                alt="" 
                className=""
            />
            <h1>
                The Bright Future of Web 3.0?
            </h1>
            <p>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <Button 
                buttonText="READ MORE"
            />
        </article>
    );
}

export default Trending;