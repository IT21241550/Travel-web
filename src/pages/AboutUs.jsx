import React from "react";
import './AboutUs.css';
import img6 from "../asset/image/img6.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>Your gateway to unforgettable Sri Lankan adventures!</p>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img src={img6} alt="Sri Lanka" />
        </div>
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a dedicated travel booking platform based in Sri Lanka, specializing in providing the best travel
            experiences across this beautiful island. Our mission is to connect you with authentic Sri Lankan destinations
            and offer personalized travel packages for all types of travelers. Whether you're looking for a relaxing beach
            holiday, an adventure-filled safari, or a cultural tour, we have the perfect options for you.
          </p>
          <h2>Our Vision</h2>
          <p>
            Our vision is to promote Sri Lanka as a must-visit destination for travelers worldwide. We aim to create
            meaningful connections between our customers and the rich culture, natural beauty, and unique experiences that
            Sri Lanka offers.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer-Centric:</strong> Your satisfaction is our priority, and we aim to provide the best service at every step of your journey.</li>
            <li><strong>Sustainability:</strong> We support eco-friendly travel and promote responsible tourism that respects Sri Lanka's environment and culture.</li>
            <li><strong>Authenticity:</strong> We believe in offering authentic Sri Lankan experiences that reflect the true spirit of this incredible island.</li>
          </ul>
          <h2>Why Choose Us?</h2>
          <p>
            With a local team of experts and years of experience, we bring you the best of Sri Lanka at affordable prices.
            Our booking platform is easy to use, ensuring a hassle-free planning experience. Book your perfect holiday with
            us and experience the magic of Sri Lanka.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;
