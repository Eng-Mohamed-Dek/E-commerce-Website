import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/Frontend_Assets/logo.png" alt="logo" />
        <p>HIRSHOP</p> 
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src="/icon-facebook.svg" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="/icon-instagram.svg" alt="" />
        </div>
        <div className="footer-icons-container">
          <img src="/icon-twitter.svg" alt="" />
        </div>
          </div>
          <div className="footer-copyright">
              <hr />
              <p>Copyright @ {new Date().getFullYear()} All right reserved by Hirkaab Academy</p>
          </div>
    </div>
  );
};
