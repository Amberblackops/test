import React from 'react'
import "../components/Product.css";
import image5 from '../components/images/iron-rod.png';
import image6 from '../components/images/cement.png';
import image7 from '../components/images/gravels.jpg';
import image8 from '../components/images/tiles.jpg';
import image9 from '../components/images/sand.jpg';
import image10 from '../components/images/plot-2.jpg';

const Product = () => {
  return (
    <div>
<section className="products" id="products">

<h1 className="heading"> Raw <span>products</span> </h1>

<div className="box-container">

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image5} alt=""/>
        <div className="content">
            <h3>iron rods</h3>
            <div className="price">$99-120 <span>$150</span></div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image6} alt=""/>
        <div className="content">
            <h3>cement</h3>
            <div className="price">$5-9 <span>$12</span></div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image7} alt=""/>
        <div className="content">
            <h3>gravels</h3>
            <div className="price">$35-59 <span>$70</span></div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image8} alt=""/>
        <div className="content">
            <h3>tiles</h3>
            <div className="price">$4-50 <span>$70</span></div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image9} alt=""/>
        <div className="content">
            <h3>sand</h3>
            <div className="price">$29-34 <span>$40</span></div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">add to cart</a>
        </div>
    </div>

    <div className="box">
        <div className="icons">
            <a href="#" className="fas fa-heart"></a>
            <a href="#" className="fas fa-share"></a>
            <a href="#" className="fas fa-eye"></a>
        </div>
        <img src={image10} alt=""/>
        <div className="content">
            <h3>Plots</h3>
            <div className="price">$400-as required</div>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
            </div>
            <a href="#" className="btn">buy now</a>
        </div>
    </div>

</div>
</section>
    </div>
  )
}

export default Product