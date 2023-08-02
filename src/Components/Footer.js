import React from "react";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import tiktok from "../img/tik-tok.png";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={linkedin} alt="linkedin" />
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="youtube" />
        <img src={tiktok} alt="tiktok" />
      </div>

      <div>
        <h2>Blogify</h2>

        <p>Copyright © 2023 Blogify, Inc.</p>
        <div className="footer-links">
          <p>
            <a href="https://www.sarahchetrit.com/blog-privacy-policy/#:~:text=Besides%20the%20terms%20of%20use,you%20mention%20on%20your%20site.">
              Legal Stuff
            </a>
          </p>
          <p>
            <a href="https://www.freeprivacypolicy.com/blog/privacy-policy-url/">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="https://preyproject.com/blog/it-security-policies-the-basics">
              Security
            </a>
          </p>
          <p>
            <a href="https://www.powellslaw.com/website-management-policy/">
              Web Management
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
