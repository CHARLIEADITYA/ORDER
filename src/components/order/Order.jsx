import React from "react";
import "./order.css";
import img from "./illustration-hero.svg";
import pic from "./icon-music.svg";
function order() {
  return (
    <main>
      <div className="summary">
        <img src={img} alt="no img" />
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="plan">
          <div className="design">
            <div>
              <img src={pic} alt="no pic" />
            </div>
            <div>
              <b>Annual Plan</b>
              <p>$59.99/year</p>
            </div>
          </div>
          <a href="/" className="change">change</a>
        </div>
        <button className="payment">Proceed to payment</button>
        <a href="/" className="cancel">Cancel Order</a>
      </div>
    </main>
  );
}

export default order;
