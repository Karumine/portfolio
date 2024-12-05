const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* ข้อมูลติดต่อ */}
        <div className="contact-info">
          <h4>ติดต่อเรา</h4>
          <p>เบอร์โทร: 094-497-2852</p>
          <p>อีเมล: Not_2supad@hotmail.com</p>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <h4>ติดตามเรา</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>

        {/* ลิขสิทธิ์ */}
        <div className="copyright">
          <p>© 2024 YourCompany. All rights reserved.</p>
          <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
