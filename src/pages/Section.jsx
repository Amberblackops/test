import React from "react";
import "../components/Section.css";

const Section = () => {
  return (
    <div>
      <section className="service">
        <div className="box-container">
          <div className="box">
            <i className="fas fa-shipping-fast"></i>
            <h3>Quick service</h3>
            <p>
              We give the fastest service possible from our nearby contracter or
              dealers.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-undo"></i>
            <h3>Reshudule</h3>
            <p>
              You can reshedule the meetings with any contracter or our local
              team as many times you want.
            </p>
          </div>

          <div className="box">
            <i className="fas fa-headset"></i>
            <h3>24 x 7 support</h3>
            <p>
              At every step you get our support and guidance from expert of the
              industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
