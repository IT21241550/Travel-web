
// import React from "react";
// import "../pages/Home.css";
// import img1 from "../asset/image/img1.png";
// import imgl from "../asset/image/imgl.png";
// import imgr from "../asset/image/imgr.png";
// import img5 from "../asset/image/img5.png";
// import ss1 from "../asset/image/ss1.png";
// import ss2 from "../asset/image/ss2.png";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlane, faShield, faStar, faSuitcase, faHotel, faCompass } from '@fortawesome/free-solid-svg-icons';

// function Home() {
//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <div className="hero-content">
//           <h2 className="top-right-text">
//             Sri lanka
//           </h2>
//         </div>
        
//         <img src={img1} alt="Sri Lanka Landscape" className="home-image" />

//         <div className="hero-content">
//           <h1>
//             Explore
//             <br />
//             &Travel
//           </h1>
//         </div>
//       </div>

//       {/* Discover Section */}
//       <div className="discover-section">
//         <h2>
//           Discover the Beauty of <span className="highlight">Sri Lanka</span>
//           <br />
//           Your Dream <span className="highlight">Safari</span> Awaits
//         </h2>

//         <div className="discover-content">
//           {/* Elephant images container */}
//           <div className="elephant-images-container">
//             <img src={imgr} alt="Elephant Left" className="elephant-imagel" />
//             <img src={imgl} alt="Elephant Right" className="elephant-imager" />
//           </div>

//           {/* Center content */}
//           <div className="center-content">
//             <p className="discover-text">
//               Welcome to Do&Be Travels and Tours, your gateway to the tropical paradise
//               of Sri Lanka. Immerse yourself in the island's rich culture, breathtaking
//               landscapes, and unparalleled wildlife experiences.
//             </p>
//             <div className="button-container">
//               <button className="learn-more-btn">Learn More</button>
//               <div className="watch-container">
//                 <button className="watch-btn">Watch</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="services-section">
//         <h2>Our All-Inclusive Services</h2>
//         <div className="services-container">
//           <div className="service-card">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faPlane} className="service-icon" />
//             </div>
//             <h3>Tailored Travel Packages</h3>
//             <p>
//               Discover endless new ways to enjoy your holiday with a carefully crafted
//               and personalized travel experience.
//             </p>
//           </div>

//           <div className="service-card">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faShield} className="service-icon" />
//             </div>
//             <h3>Safari Adventures</h3>
//             <p>
//               Let expert guides take you through thrilling adventures in Sri Lanka's
//               most beautiful wildlife sanctuaries.
//             </p>
//           </div>

//           <div className="service-card">
//             <div className="icon-container">
//               <FontAwesomeIcon icon={faStar} className="service-icon" />
//             </div>
//             <h3>Luxury & Comfort</h3>
//             <p>
//               Experience the finest accommodations and services throughout your
//               journey with our premium travel packages.
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* Why Book Section */}
//       <div className="why-book-section">
//         <h2>Why Book With Do&Be Travels and Tours?</h2>
//         <div className="why-book-container">
//           <img src={img5} alt="Why Book With Us" className="why-book-image" />
//         </div>
//       </div>

//       <div className="why-book-section">
//         <div className="why-book-container">
//           <img src={ss1} alt="Why Book With Us" className="why-book-image" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import "../pages/Home.css";
import img1 from "../asset/image/img1.png";
import imgl from "../asset/image/imgl.png";
import imgr from "../asset/image/imgr.png";
import img5 from "../asset/image/img5.png";
import ss1 from "../asset/image/ss1.png";
import ss2 from "../asset/image/ss2.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faShield, faStar, faSuitcase, faHotel, faCompass } from '@fortawesome/free-solid-svg-icons';

// Sample review data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Amazing experience! The safari tour was incredible.",
    image: "https://via.placeholder.com/50" // Replace with actual customer image
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and wonderful memories.",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    comment: "Perfect organization and friendly staff.",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 4,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and wonderful memories.",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 5,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and wonderful memories.",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 6,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and wonderful memories.",
    image: "https://via.placeholder.com/50"
  },
  {
    id: 7,
    name: "Jane Smith",
    rating: 4,
    comment: "Great service and wonderful memories.",
    image: "https://via.placeholder.com/50"
  },
  // Add more reviews as needed
];

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={review.image} alt={review.name} className="reviewer-image" />
        <div className="reviewer-info">
          <h4>{review.name}</h4>
          <div className="rating">
            {[...Array(review.rating)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
            ))}
          </div>
        </div>
      </div>
      <p className="review-comment">{review.comment}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="top-right-text">
            Sri lanka
          </h2>
        </div>
        
        <img src={img1} alt="Sri Lanka Landscape" className="home-image" />

        <div className="hero-content">
          <h1>
            Explore
            <br />
            &Travel
          </h1>
        </div>
      </div>

      {/* Discover Section */}
      <div className="discover-section">
        <h2>
          Discover the Beauty of <span className="highlight">Sri Lanka</span>
          <br />
          Your Dream <span className="highlight">Safari</span> Awaits
        </h2>

        <div className="discover-content">
          {/* Elephant images container */}
          <div className="elephant-images-container">
            <img src={imgr} alt="Elephant Left" className="elephant-imagel" />
            <img src={imgl} alt="Elephant Right" className="elephant-imager" />
          </div>

          {/* Center content */}
          <div className="center-content">
            <p className="discover-text">
              Welcome to Do&Be Travels and Tours, your gateway to the tropical paradise
              of Sri Lanka. Immerse yourself in the island's rich culture, breathtaking
              landscapes, and unparalleled wildlife experiences.
            </p>
            <div className="button-container">
              <button className="learn-more-btn">Learn More</button>
              <div className="watch-container">
                <button className="watch-btn">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our All-Inclusive Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faPlane} className="service-icon" />
            </div>
            <h3>Tailored Travel Packages</h3>
            <p>
              Discover endless new ways to enjoy your holiday with a carefully crafted
              and personalized travel experience.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faShield} className="service-icon" />
            </div>
            <h3>Safari Adventures</h3>
            <p>
              Let expert guides take you through thrilling adventures in Sri Lanka's
              most beautiful wildlife sanctuaries.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faStar} className="service-icon" />
            </div>
            <h3>Luxury & Comfort</h3>
            <p>
              Experience the finest accommodations and services throughout your
              journey with our premium travel packages.
            </p>
          </div>
        </div>
      </div>
      
      {/* Why Book Section */}
      <div className="why-book-section">
        <h2>Why Book With Do&Be Travels and Tours?</h2>
        <div className="why-book-container">
          <img src={img5} alt="Why Book With Us" className="why-book-image" />
        </div>
      </div>

      <div className="why-book-section">
        <div className="why-book-container">
          <img src={ss1} alt="Why Book With Us" className="why-book-image" />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>What Our Customers Say</h2>
        <div className="reviews-container">
          <div className="reviews-scroll">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
