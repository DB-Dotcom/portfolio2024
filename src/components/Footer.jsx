// Footer.js
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Stelle sicher, dass du react-icons installiert hast
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>Dimitri</p>
        <p>Paderborn</p>
        <p>33100</p>
        <p>info@example.com</p>
      </div>
      <div className="footer-about">
        <p>Über mich</p>
        <p>MERN Developer</p>
        <div className="social-links">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
