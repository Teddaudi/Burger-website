import React from "react";
import "./Banner.css";
import Hero from "../images/Hero.png";
import Image1 from "../images/carousel-1.jpg";
import image2 from "../images/carousel-2.jpg";
import Image3 from "../images/carousel-3.jpg";

const Banner = () => {
  return (
    // <div>
    //     <div id="hero-area" className="header-area header-eight">
    //       <div className="container">
    //         <div className="row align-items-center">
    //           <div className="col-lg-6 col-md-12 col-12">
    //             <div className="header-content">
    //               <h1>Burger King</h1>
    //               <p>
    //                 with various layers of delicious
    //                 <br /> food into one.
    //               </p>
    //               <div className="button">
    //                 <a href="#" className="btn primary-btn">
    //                   Order Now
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-lg-6 col-md-12 col-12">
    //             <div className="header-image">
    //               <img src={Hero} alt="#" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    <div className="carousel">
      <div className="container-fluid">
        <div className="owl-carousel">
          <div className="carousel-item">
            <div className="carousel-img">
              <img src={Image1} alt="Image" />
            </div>
            <div className="carousel-text">
              <h1>
                Best <span>Quality</span> Ingredients
              </h1>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris.
                Vivamus egestas eleifend dui ac consequat at lectus in malesuada
              </p>
              <div className="carousel-btn justify-center ">
                <a className="btn custom-btn" href="">
                  Order Now
                </a>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
