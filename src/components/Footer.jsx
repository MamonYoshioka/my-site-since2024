import './css/Footer.css';  // 必要に応じてCSSファイルを作成してインポート

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
