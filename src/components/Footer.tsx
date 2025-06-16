import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Shanyce Benson. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/ShanyceBenson" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/shanyce-benson-634730126" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`${import.meta.env.BASE_URL}#/contact`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;