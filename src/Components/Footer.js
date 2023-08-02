import React from "react";
import facebook from '../img/facebook.png'
import linkedin from '../img/linkedin.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import youtube from '../img/youtube.png'
import tiktok from '../img/tik-tok.png'

function Footer(){

    return(
        <div className="footer">

            <div className="icons">
                
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" /> 
                <img src={youtube} alt="" />
                <img src={tiktok} alt="" />

            </div>

            <div>
                <h2>Blogify</h2>

                <p>Copyright © 2023 Blogify, Inc.</p>
            </div>
            <div className="footer-links">



                <ul>
                    <li><a href="">Legal Stuff</a></li>
                    <li><p>|</p></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><p>|</p></li>
                    <li><a href="">Security</a></li>
                    <li><p>|</p></li>
                    <li><a href="">Website Accesibility</a></li>

                    
                    
                </ul>

            </div>

            

        </div>
    )
}

export default Footer;