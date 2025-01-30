import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-up">
          <div className="footer-txt">The children are welcome</div>
          <div className="footer-txt">to ecological free me</div>
          <div className="footer-btn">
          
          <NavLink to="https://youtu.be/CGEjwCUcMHo?si=Uj6BbuSXQnACG6ZL">
          <button>
            Get a Demo <img src="/icons/white-arrow.png" alt="" />
          </button>
          </NavLink>
          </div>
        </div>
        <div className="footer-dwn">
          <div className="footer-3">
          <div className="footer-nexcent">
            <img src="./public/Nexcent-icon.png" alt="" />
            <span>Nexcent</span>
          </div>
          <div className="copy">
          <div>Copyright © 2023 Nexcent ltd.</div>
          <div>All rights reserved</div>
          </div>
          <div className="social-footer">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="footer-4">
          <div className="company">
          <div className="company-1">Company</div>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
          <li>Pricing</li>
          <li>Testimonial</li>
          </div>
          <div className="company">
            <div className="company-1">Support</div>
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </div>
          <div className="up-to-date">
            <div className="upto">Stay up to date</div>
            <div className="input-1">
              <input type="text" placeholder="Your email address" />
              <img className="send" src="./public/icons/send-mail.png" alt=""  />
            </div>
          </div>

          
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
