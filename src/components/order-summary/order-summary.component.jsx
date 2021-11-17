import React from "react";
import "./order-summary.styles.scss";
import hero from "../../images/illustration-hero.svg";
import music from "../../images/icon-music.svg";
import CustomButton from "../custom-button/custom-button.component";

const OrderSummary = () => (
  <div className="order-summary">
    <img className="hero" src={hero} alt="hero"></img>
    <div className="content">
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>

      <div className="payment-plan">
        <img src={music} alt="music"></img>
        <span className="plan-price">
          <span>Annual Plan</span> <span>$59.99/year </span>
        </span>
        <button type='button' className="change">Change</button>
      </div>
      <span className="buttons">
        <CustomButton type='submit' label="Proceed to Payment" />
        <CustomButton type='button' label="Cancel Order" cancel />
      </span>
    </div>
  </div>
);

export default OrderSummary;
