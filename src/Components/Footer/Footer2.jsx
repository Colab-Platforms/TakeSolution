import { Search, Send, Mail, Phone, MapPin } from "lucide-react";
import { FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Footer2.css";

export default function FooterPreview() {
  return (
    <div className="footer-wrapper">

      <footer className="footer">
        {/* Top Section */}
        <div className="top-section">
          <Link className="logo" to="/">
            <img src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Frame_1000000893.png?v=1772278639" alt="Logo" />
          </Link>

          <div className="search-bar">
            <Search size={18} style={{ marginRight: "8px", color: "#6b7280" }} />
            <input type="text" placeholder="Enter your email.." />
            <button className="search-btn">
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          <div className="footer-column links">
            <div className="footer-title">Useful Links</div>
            <ul>
              <li>Home</li>
              <li>Investor</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <div className="footer-title">Newsletter</div>
            <p className="newsletter-text">
              Stay connected with TAKE Solutions to receive the latest updates
              on AI-driven healthcare innovation, clinical research
              advancements, biotechnology developments, and preventive health
              platforms.
            </p>
          </div>

          <div className="footer-column">
            <div className="footer-title">Contact Us</div>

            <div className="contact-item">
              <Mail size={16} color="#0f766e" />
              <span>investorrelations@takesolutions.com</span>
            </div>

            <div className="contact-item">
              <Phone size={16} color="#0f766e" />
              <span>+91 8108618322</span>
            </div>

            <div className="contact-item">
              <MapPin size={16} color="#0f766e" />
              <span>
                No. B3. No.9, B Block, Alsa Arcade, 3rd Floor, 2nd Avenue,
                Anna Nagar East, Chennai 600102
              </span>
            </div>

            <p className="cin-text">
              <strong className="cin-label">CIN:</strong> L63090TN2000PLC046338
            </p>
          </div>

          <div className="footer-column">
            <div className="footer-title">Join Us</div>
            <div className="social-icons">
              <FaYoutube className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaXTwitter className="social-icon" />
            </div>
          </div>
        </div>

        <div className="copyright">
          © Copyright 2026 By TAKESOLUTION
        </div>
      </footer>
    </div>
  );
}
