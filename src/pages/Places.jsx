import React from "react";
import "../pages/places.css";
import c1img from "../asset/image/c1img.png";
import c2img from "../asset/image/c2img.png";
import c4img from "../asset/image/c4img.png";
import swim from "../asset/image/places/swim.png";

function Places() {
  return (
    <main className="main-content"> {/* Added main wrapper */}
    <div className="places">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>See What We Have to Offer</h1>
        <p>Choose from our curated travel packages for an amazing experience!</p>
      </div>

      {/* Card Views */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <img src={swim} alt="Destination 1" className="card-image" />
          <div className="card-content">
            <h2>Beach and Coastal Escapes</h2>
            <p>Sri Lanka is known for its rich biodiversity and wildlife.
               Our wildlife safaris allow you to explore national parks teeming with wildlife, 
              from elephants and leopards to birds and exotic reptiles.</p>
              <h3>We offer Surfing at</h3>
            <p>Place1-...................
               Place1-...................
              Place1-...................
            </p>

            <button className="view-packages-btn">View Packages</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={c1img} alt="Destination 2" className="card-image" />
          <div className="card-content">
            <h2>Wildlife Safaris</h2>
            <p>Embark on thrilling safaris and witness the diverse wildlife of Sri Lanka.</p>
            <button className="view-packages-btn">View Packages</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={c2img} alt="Destination 3" className="card-image" />
          <div className="card-content">
            <h2>Cultural Tours</h2>
            <p>Explore the rich cultural heritage and ancient sites of Sri Lanka.</p>
            <button className="view-packages-btn">View Packages</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img src={c4img} alt="Destination 4" className="card-image" />
          <div className="card-content">
            <h2>Hill Country Retreats</h2>
            <p>Unwind in the serene hill country, surrounded by tea plantations and cool breezes.</p>
            <button className="view-packages-btn">View Packages</button>
          </div>
        </div>
      </div>
    </div>
     </main>
  );
}

export default Places;
