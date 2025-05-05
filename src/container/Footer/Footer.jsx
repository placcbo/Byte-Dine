import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.scss';

// Social links configuration (can be moved to constants/)
const socialLinks = {
  facebook: "https://facebook.com/your-page",
  twitter: "https://twitter.com/your-handle",
  instagram: "https://instagram.com/your-handle"
};

const Footer = () => {
  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        {/* Contact Section */}
        <div className="app__footer-links_contact">
          <h2 className="app__footer-headtext">Contact Us</h2>
          <p className="p__opensans">123 Kenyatta Ave, Nairobi, Kenya</p>
          <p className="p__opensans">+254 720-009-566</p>
          <p className="p__opensans">+254 720-009-566</p>
        </div>

        {/* Brand & Social Section */}
        <div className="app__footer-links_logo">
          <h1 className="app__footer-brand">Byte & Dine</h1>
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} alt="Spoon" className="spoon__img" />
          <div className="app__footer-links_icons">
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>

        {/* Working Hours Section */}
        <div className="app__footer-links_work">
          <h2 className="app__footer-headtext">Working Hours</h2>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 03:00 am</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__copyright">
        <p className="p__opensans">&copy; {new Date().getFullYear()} Byte & Dine. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;