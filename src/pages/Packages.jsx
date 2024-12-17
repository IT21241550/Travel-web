
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import imgp1 from "../asset/image/imgp1.jpg";
// import img2 from "../asset/image/img2.jpg";
// import img3 from "../asset/image/img3.jpg";
// import img4 from "../asset/image/img4.jpg";
// import imgp5 from "../asset/image/imgp5.jpg";
// import img6 from "../asset/image/img6.jpg";
// import img7 from "../asset/image/img7.jpg";
// import img8 from "../asset/image/img8.jpg";
// import img9 from "../asset/image/img9.jpg";
// import img10 from "../asset/image/img10.jpg";
// import img11 from "../asset/image/img11.jpg";
// import img12 from "../asset/image/img12.jpg";
// import img13 from "../asset/image/img13.jpg";
// import img14 from "../asset/image/img14.jpg";
// import img15 from "../asset/image/img15.jpg";
// import img16 from "../asset/image/img16.jpg";
// import img17 from "../asset/image/img17.jpg";
// import img18 from "../asset/image/img18.jpg";
// import img19 from "../asset/image/img19.jpg";
// import img20 from "../asset/image/img20.jpg";

// import './Packages.css';

// const packages = [
//   { id: 1, title: "Sigiriya Rock Fortress", description: "Discover the ancient marvel of Sigiriya, a 5th-century rock fortress featuring stunning frescoes and panoramic views.", image: imgp1, pax: 3, days: 3, price: 300, route: "/pk1" },
//   { id: 2, title: "Kandy's Temple of the Sacred Tooth Relic", description: "Visit this sacred Buddhist temple housing a revered tooth relic of Lord Buddha, set in the heart of Kandy.", image: img2, pax: 2, days: 4, price: 450, route: "/pk2" },
//   { id: 3, title: "Dambulla Cave Temple", description: "Explore the largest cave temple complex in Sri Lanka, adorned with intricate Buddhist murals and statues.", image: img3, pax: 4, days: 5, price: 600, route: "/pk3" },
//   { id: 4, title: "Yala National Park", description: "Embark on a wildlife safari at Yala, renowned for its leopards, elephants, and diverse flora and fauna.", image: img4, pax: 2, days: 3, price: 500, route: "/pk4" },
//   { id: 5, title: "Nine Arches Bridge in Ella", description: "Marvel at this iconic colonial-era railway bridge nestled amidst lush greenery and rolling hills.", image: imgp5, pax: 3, days: 4, price: 400, route: "/pk5" },
//   { id: 6, title: "Horton Plains National Park", description: "Trek through this UNESCO site and witness the dramatic cliff edge of World’s End and serene Baker’s Falls.", image: img6, pax: 2, days: 3, price: 350, route: "/pk6" },
//   { id: 7, title: "Adam's Peak (Sri Pada)", description: "Scale this sacred mountain, cherished by multiple religions, and catch an unforgettable sunrise.", image: img7, pax: 2, days: 2, price: 250, route: "/pk7" },
//   { id: 8, title: "Historic Galle Fort", description: "Urban adventure featuring historical sites, shopping districts, and culinary experiences. Luxury hotel stay and private tours included.", image: img8, pax: 2, days: 2, price: 250, route: "/pk8" },
//   { id: 9, title: "Whale Watching at Mirissa Beach", description: "Spot majestic blue whales and playful dolphins on an exhilarating ocean safari at Mirissa.", image: img9, pax: 2, days: 2, price: 250, route: "/pk9" },
//   { id: 10, title: "Ravana Falls, Ella", description: "Admire the cascading waters of Ravana Falls, a scenic spot steeped in local folklore.", image: img10, pax: 2, days: 2, price: 250, route: "/pk10" },
//   { id: 11, title: "Udawalawe National Park", description: "Experience close encounters with wild elephants and other exotic species in their natural habitat.", image: img11, pax: 2, days: 2, price: 250, route: "/pk11" },
//   { id: 12, title: "Pinnawala Elephant Orphanage", description: "Witness rescued elephants in this sanctuary and watch them bathe and roam freely.", image: img12, pax: 2, days: 2, price: 250, route: "/pk12" },
//   { id: 13, title: "Nuwara Eliya's Little England", description: "Soak in the colonial charm of Nuwara Eliya with its tea estates, cool climate, and picturesque landscapes.", image: img13, pax: 2, days: 2, price: 250, route: "/pk13" },
//   { id: 14, title: "Ancient City of Polonnaruwa", description: "Step back in time to explore the ancient ruins and archaeological wonders of Polonnaruwa.", image: img14, pax: 2, days: 2, price: 250, route: "/pk14" },
//   { id: 15, title: "Jaffna Fort", description: "Discover the historic Jaffna Fort, a remnant of Portuguese and Dutch colonial architecture.", image: img15, pax: 2, days: 2, price: 250, route: "/pk15" },
//   { id: 16, title: "Surfing at Arugam Bay", description: "Ride the waves at this world-famous surfing destination, known for its vibrant beach vibe.", image: img16, pax: 2, days: 2, price: 250, route: "/pk16" },
//   { id: 17, title: "Sacred City of Anuradhapura", description: "Explore the ancient capital of Sri Lanka, home to sacred stupas and the legendary Bodhi Tree.", image: img17, pax: 2, days: 2, price: 250, route: "/pk17" },
//   { id: 18, title: "Sinharaja Rainforest", description: "Venture into this biodiverse rainforest, a UNESCO site teeming with exotic wildlife and lush greenery.", image: img18, pax: 2, days: 2, price: 250, route: "/pk18" },
//   { id: 19, title: "Unawatuna Beach", description: "Relax on the golden sands of Unawatuna, a tropical paradise with calm waters and vibrant nightlife.", image: img19, pax: 2, days: 2, price: 250, route: "/pk19" },
//   { id: 20, title: "Nilaveli Beach in Trincomalee", description: "Escape to the tranquil shores of Nilaveli, famous for its pristine waters and coral reefs.", image: img20, pax: 2, days: 2, price: 250, route: "/pk20" },
// ];

// const Packages = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (route) => {
//     navigate(route);
//   };

//   return (
//     <main className="main-content">
//       <div className="packages-container">
//         <div className="packages-grid">
//           {packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="package-card"
//               onClick={() => handleCardClick(pkg.route)}
//               style={{ cursor: "pointer" }}
//             >
//               <img src={pkg.image} alt={pkg.title} className="package-image" />
//               <div className="package-content-overlay">
//                 <div>
//                   <h2 className="package-title">{pkg.title}</h2>
//                   <p className="package-description">
//                     {pkg.description}
//                     <span className="see-more"> see more...</span>
//                   </p>
//                 </div>
//                 <div className="package-footer">
//                   <div className="package-stats">
//                     <span className="pax-info">
//                       <i className="fas fa-user"></i> {pkg.pax} pax
//                     </span>
//                     <span className="days-info">{pkg.days} days</span>
//                   </div>
//                   <div className="package-price">
//                     <span className="price-tag">
//                       <i className="fas fa-percent"></i>
//                     </span>
//                     <span className="price-amount">${pkg.price}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Packages;


import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import imgp1 from "../asset/image/imgp1.jpg";
import img2 from "../asset/image/img2.jpg";
import img3 from "../asset/image/img3.jpg";
import img4 from "../asset/image/img4.jpg";
import imgp5 from "../asset/image/imgp5.jpg";
import img6 from "../asset/image/img6.jpg";
import img7 from "../asset/image/img7.jpg";
import img8 from "../asset/image/img8.jpg";
import img9 from "../asset/image/img9.jpg";
import img10 from "../asset/image/img10.jpg";
import img11 from "../asset/image/img11.jpg";
import img12 from "../asset/image/img12.jpg";
import img13 from "../asset/image/img13.jpg";
import img14 from "../asset/image/img14.jpg";
import img15 from "../asset/image/img15.jpg";
import img16 from "../asset/image/img16.jpg";
import img17 from "../asset/image/img17.jpg";
import img18 from "../asset/image/img18.jpg";
import img19 from "../asset/image/img19.jpg";
import img20 from "../asset/image/img20.jpg";
import './Packages.css';

const packages = [
  { id: 1, title: "Sigiriya Rock Fortress", description: "Discover the ancient marvel of Sigiriya...", image: imgp1, pax: 3, days: 3, price: 300, route: "/pk1" },
  { id: 2, title: "Kandy's Temple of the Sacred Tooth Relic", description: "Visit this sacred Buddhist temple...", image: img2, pax: 2, days: 4, price: 450, route: "/pk2" },
  { id: 3, title: "Dambulla Cave Temple", description: "Explore the largest cave temple complex...", image: img3, pax: 4, days: 4, price: 400, route: "/pk3" },
  { id: 4, title: "Yala National Park", description: "Embark on a wildlife safari...", image: img4, pax: 2, days: 3, price: 500, route: "/pk4" },
  { id: 5, title: "Nine Arches Bridge in Ella", description: "Marvel at this iconic railway bridge...", image: imgp5, pax: 3, days: 10, price: 700, route: "/pk5" },
  { id: 6, title: "Horton Plains National Park", description: "Trek through this UNESCO site and witness the dramatic cliff edge of World’s End and serene Baker’s Falls.", image: img6, pax: 2, days: 3, price: 350, route: "/pk6" },
  { id: 7, title: "Adam's Peak (Sri Pada)", description: "Scale this sacred mountain, cherished by multiple religions, and catch an unforgettable sunrise.", image: img7, pax: 2, days: 2, price: 250, route: "/pk7" },
  { id: 8, title: "Historic Galle Fort", description: "Urban adventure featuring historical sites, shopping districts, and culinary experiences. Luxury hotel stay and private tours included.", image: img8, pax: 2, days: 2, price: 250, route: "/pk8" },
  { id: 9, title: "Whale Watching at Mirissa Beach", description: "Spot majestic blue whales and playful dolphins on an exhilarating ocean safari at Mirissa.", image: img9, pax: 2, days: 2, price: 250, route: "/pk9" },
  { id: 10, title: "Ravana Falls, Ella", description: "Admire the cascading waters of Ravana Falls, a scenic spot steeped in local folklore.", image: img10, pax: 2, days: 2, price: 250, route: "/pk10" },
  { id: 11, title: "Udawalawe National Park", description: "Experience close encounters with wild elephants and other exotic species in their natural habitat.", image: img11, pax: 2, days: 2, price: 250, route: "/pk11" },
  { id: 12, title: "Pinnawala Elephant Orphanage", description: "Witness rescued elephants in this sanctuary and watch them bathe and roam freely.", image: img12, pax: 2, days: 2, price: 250, route: "/pk12" },
  { id: 13, title: "Nuwara Eliya's Little England", description: "Soak in the colonial charm of Nuwara Eliya with its tea estates, cool climate, and picturesque landscapes.", image: img13, pax: 2, days: 2, price: 250, route: "/pk13" },
  { id: 14, title: "Ancient City of Polonnaruwa", description: "Step back in time to explore the ancient ruins and archaeological wonders of Polonnaruwa.", image: img14, pax: 2, days: 2, price: 250, route: "/pk14" },
  { id: 15, title: "Jaffna Fort", description: "Discover the historic Jaffna Fort, a remnant of Portuguese and Dutch colonial architecture.", image: img15, pax: 2, days: 2, price: 250, route: "/pk15" },
  { id: 16, title: "Surfing at Arugam Bay", description: "Ride the waves at this world-famous surfing destination, known for its vibrant beach vibe.", image: img16, pax: 2, days: 2, price: 250, route: "/pk16" },
  { id: 17, title: "Sacred City of Anuradhapura", description: "Explore the ancient capital of Sri Lanka, home to sacred stupas and the legendary Bodhi Tree.", image: img17, pax: 2, days: 2, price: 250, route: "/pk17" },
  { id: 18, title: "Sinharaja Rainforest", description: "Venture into this biodiverse rainforest, a UNESCO site teeming with exotic wildlife and lush greenery.", image: img18, pax: 2, days: 2, price: 250, route: "/pk18" },
  { id: 19, title: "Unawatuna Beach", description: "Relax on the golden sands of Unawatuna, a tropical paradise with calm waters and vibrant nightlife.", image: img19, pax: 2, days: 2, price: 250, route: "/pk19" },
  { id: 20, title: "Nilaveli Beach in Trincomalee", description: "Escape to the tranquil shores of Nilaveli, famous for its pristine waters and coral reefs.", image: img20, pax: 2, days: 2, price: 250, route: "/pk20" },
];
  // Add similar cards for 3, 4, and 10 days packages


const Packages = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // State to store filter: '3', '4', '10', or 'all'
  const filteredPackages = filter === "all" ? packages : packages.filter(pkg => pkg.days === parseInt(filter));

  const packageRef = useRef(null);

  const handleCardClick = (route) => {
    navigate(route);
  };

  const handleFilterClick = (days) => {
    setFilter(days);
  };

  // Scroll to package grid after filtering
  useEffect(() => {
    if (packageRef.current) {
      packageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [filter]);

  return (
    <main className="main-content">
      <h1 className="filter-heading">Our Tour Packages</h1>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterClick("all")} className="filter-btn">All Packages</button>
        <button onClick={() => handleFilterClick("3")} className="filter-btn">3 Days Packages</button>
        <button onClick={() => handleFilterClick("4")} className="filter-btn">4 Days Packages</button>
        <button onClick={() => handleFilterClick("10")} className="filter-btn">10 Days Packages</button>
      </div>

      {/* Packages Grid */}
      <div className="packages-container" ref={packageRef}>
        <div className="packages-grid">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="package-card"
              onClick={() => handleCardClick(pkg.route)}
              style={{ cursor: "pointer" }}
            >
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="package-content-overlay">
                <div>
                  <h2 className="package-title">{pkg.title}</h2>
                  <p className="package-description">{pkg.description}</p>
                </div>
                <div className="package-footer">
                  <div className="package-stats">
                    <span className="pax-info">{pkg.pax} pax</span>
                    <span className="days-info">{pkg.days} days</span>
                  </div>
                  <div className="package-price">
                    <span className="price-amount">${pkg.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Packages;
