import React from "react";
import "../components/Featured.css";
import image11 from "../components/images/house-2.jpg";
import image12 from "../components/images/rent2.jpg";
import image13 from "../components/images/rent3.jpg";
import image14 from "../components/images/rent4.jpg";
import image15 from "../components/images/rent5.jpg";
import image16 from "../components/images/rent.jpg";
import image17 from "../components/images/cement.png";
import image18 from "../components/images/iron-rod.png";
import image19 from "../components/images/gravels.jpg";
import image20 from "../components/images/flat.jpg";
import image21 from "../components/images/raw-1.png";

const Featured = () => {

    document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
        image_1.addEventListener('click', () =>{
          var src = image_1.getAttribute('src');
          document.querySelector('.big-image-1').src = src;
        });
      });
      
      document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
        image_2.addEventListener('click', () =>{
          var src = image_2.getAttribute('src');
          document.querySelector('.big-image-2').src = src;
        });
      });
      
      document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
        image_3.addEventListener('click', () =>{
          var src = image_3.getAttribute('src');
          document.querySelector('.big-image-3').src = src;
        });
      });

  return (
    <div>
      <section className="featured" id="featured">
        <h1 className="heading">
          {" "}
          <span></span> services{" "}
        </h1>

        <div className="row">
          <div className="image-container">
            <div className="big-image">
              <img src={image11} className="big-image-1" alt="" />
            </div>
          </div>
          <div className="content">
            <h3>Hire a contracter</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>
              Place your requirement and hire the best rated and suitable
              contracter from our website by transparent bidding system (no
              charges for advetisement or auction).
            </p>
            <div className="price">
              {" "}
              <span>No Hidden charges</span>
            </div>
            <a href="#" className="btn">
              Hurry Up!
            </a>
          </div>
        </div>

        <div className="row">
          <div className="image-container">
            <div className="small-image">
              <img src={image12} className="featured-image-2" alt="" />
              <img src={image13} className="featured-image-2" alt="" />
              <img src={image14} className="featured-image-2" alt="" />
              <img src={image15} className="featured-image-2" alt="" />
            </div>
            <div className="big-image">
              <img src={image16} className="big-image-2" alt="" />
            </div>
          </div>
          <div className="content">
            <h3>Buy or sell</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Buy a house or flat suitable for your requirement in almost every
              location in your favourate city. Or sell your own property with no
              hidden charges and proper documentation.
            </p>
            <div className="price">
              started from $4999 <span>easy EMI's</span>
            </div>
            <a href="#" className="btn">
              Buy Now
            </a>
          </div>
        </div>

        <div className="row">
          <div className="image-container">
            <div className="small-image">
              <img src={image17} className="featured-image-3" alt="" />
              <img src={image18} className="featured-image-3" alt="" />
              <img src={image19} className="featured-image-3" alt="" />
              <img src={image20} className="featured-image-3" alt="" />
            </div>
            <div className="big-image">
              <img src={image21} className="big-image-3" alt="" />
            </div>
          </div>
          <div className="content">
            <h3>Business with us!</h3>
            <p>
              Be our partner sell your products with us no matter you are a big
              contracter or small business give your business a boost with our
              platform.
            </p>
            <div className="price">
              50-200$<span> yearly membership</span>
            </div>
            <a href="#" className="btn">
              Join now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
