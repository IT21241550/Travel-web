import React from "react";
import backgroundImage from "../asset/image/img13.jpg"; 

function pk13() {
  return (
    <div className="surfing-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="card-header">
        <button className="back-btn">
          <span className="back-icon">‹</span>
          Back
        </button>
        <div className="package-title">
          <h1>Unawatuna</h1>
          <h2>Surfing Package</h2>
        </div>
      </div>

      <div className="package-description">
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="customize-section">
        <h3>Customize</h3>
        
        <div className="options-container">
          <div className="option-group person-count">
            <button>±8</button>
            <button>±5</button>
            <button>±3</button>
          </div>

          <div className="divider"></div>

          <div className="option-group package-type">
            <button className="active">Regular</button>
            <button>Premium</button>
          </div>

          <div className="divider"></div>

          <div className="option-group day-count">
            <button>7 Days</button>
            <button className="active">5 Days</button>
          </div>
        </div>
      </div>

      <div className="booking-section">
        <select className="country-select">
          <option value="">Select your Country</option>
        </select>

        <div className="trip-summary">
          <div className="trip-details">
            <p>3 Person</p>
            <p>5 Days Trip</p>
          </div>
          <p className="total-price">300$</p>
        </div>

        <button className="checkout-btn">Check Out</button>
      </div>
    </div>
  );
}


export default pk13;