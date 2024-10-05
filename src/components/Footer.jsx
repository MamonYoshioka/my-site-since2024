import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mon Site. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
