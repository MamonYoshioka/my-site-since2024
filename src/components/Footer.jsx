import './css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mon Site. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
