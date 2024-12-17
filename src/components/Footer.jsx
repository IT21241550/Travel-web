import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      {/* Heading */}
      <div className="footer-heading">
        <h2>Travels and Tours</h2>
        <h3>Do&Be</h3>
      </div>

      {/* Row of Sections */}
      <div className="footer-row">
        {/* Our Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Wildlife Safaris</li>
            <li>Cultural Tours</li>
            <li>Beach Getaways</li>
            <li>Adventure Packages</li>
            <li>Customized Travel Itineraries</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            📍 123 Paradise Road, Colombo, Sri Lanka<br />
            📞 Phone: +94 123 456 789<br />
            ✉️ Email: <a href="mailto:info@doandbetravels.com">info@doandbetravels.com</a>
          </p>
        </div>

        {/* Connect with Us */}
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <p>Follow us on social media for travel inspiration and the latest offers:</p>
          <ul>
            <li>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2024 Do&Be Travels and Tours | <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
