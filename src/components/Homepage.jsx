import React from "react";
import { useState } from "react";
import "./Homepage.css";
import image2 from "./images/house-1.png"
import image3 from "./images/raw-1.png"
import image4 from "./images/plot-1.jpg"


const Homepage = () => {

    let slides = document.querySelectorAll('.slide-container');
    let index = 0;
    const next = () => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }
    const prev = () => {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    }
    
  return (
    <div>
      <section className="home" id="home">
        <div className="slide-container active">
          <div className="slide">
            <div className="content">
              <span>Construct your home</span>
              <h3> Your dream house</h3>
              <p>
                We provide the best contractors and materials everything you
                will ever need to construct the house of your dreams or to
                renovate.
              </p>
              <a href="#" className="btn">
                sign up now
              </a>
            </div>
            <div className="image">
              <img src={image2} className="shoe" alt="" />
            </div>
          </div>
        </div>

        <div className="slide-container">
          <div className="slide">
            <div className="content">
              <span>Everything you need</span>
              <h3>Raw materials</h3>
              <p>
                Everything you will ever need to construct your dream house is
                available here from engineers to materials and team of our
                working professionals for assistant at every step.
              </p>
              <a href="#" className="btn">
                add to cart
              </a>
            </div>
            <div className="image">
              <img src={image3} className="raw" alt="" />
            </div>
          </div>
        </div>

        <div className="slide-container">
          <div className="slide">
            <div className="content">
              <span>Properties</span>
              <h3>Buy,sell or rent properties.</h3>
              <p>
                Plots at your preffered locations for every budget. Well
                furnished flats also available for sale with easy EMI options.
                Buy and sell properties
              </p>
              <a href="#" className="btn">
                <span>start bidding!</span>
              </a>
            </div>
            <div className="image">
              <img src={image4} className="plot" alt="" />
            </div>
          </div>
        </div>

        <div id="prev" className="fas fa-chevron-left" onClick={prev}></div>
        <div id="next" className="fas fa-chevron-right" onClick={next}></div>
      </section>
    </div>
  );
};

export default Homepage;
