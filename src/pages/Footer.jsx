import React from "react";
import "../components/Footer.css";
import image22 from "../components/images/pic1.png";
import image23 from "../components/images/pic2.png";
import image24 from "../components/images/pic3.png";

const Footer = () => {
  return (
    <div>
      {/* review section starts */}
      <div>
        <section className="review" id="review">
          <h1 className="heading">
            {" "}
            customer's <span>review</span>{" "}
          </h1>

          <div className="box-container">
            <div className="box">
              <img src={image22} alt="" />
              <h3>sarah lane</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>

            <div className="box">
              <img src={image23} alt="" />
              <h3>john deo</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="box">
              <img src={image24} alt="" />
              <h3>hector wills</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Fugiat, quos eum. Laborum aut a consequatur ducimus, molestias
                possimus quisquam rerum temporibus ipsum voluptate accusamus,
                unde ab asperiores? Exercitationem, unde rem.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* review section ends */}

      {/*  newsletter section starts   */}
      <div>
        <section className="newsletter">
          <div className="content">
            <h3>monthly newsletter</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              ullam veniam at itaque culpa hic corporis saepe dicta doloremque
              nihil.
            </p>
            <form action="">
              <input
                type="email"
                placeholder="enter your email"
                className="box"
              />
              <input type="submit" value="send" className="btn" />
            </form>
          </div>
        </section>
      </div>

      {/* newsletter section ends */}

      {/* footer section   */}
      <div>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>Our offices</h3>
              <a href="#">Delhi</a>
              <a href="#">Mumbai</a>
              <a href="#">Bangaluru</a>
              <a href="#">Hyderabad</a>
            </div>

            <div className="box">
              <h3>quick links</h3>
              <a href="#">home</a>
              <a href="#">products</a>
              <a href="#">featured</a>
              <a href="#">review</a>
            </div>

            <div className="box">
              <h3>extra links</h3>
              <a href="#">my account</a>
              <a href="#">my favorite</a>
              <a href="#">my orders</a>
              <a href="#">newsletter</a>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="#">facebook</a>
              <a href="#">twitter</a>
              <a href="#">instagram</a>
              <a href="#">linkedin</a>
            </div>
          </div>
        </section>
        <div className="credit">
          created by <span>Constructit </span>|<b>copyright&copy;</b> all rights
          reserved!
        </div>
      </div>
    </div>
  );
};

export default Footer;
