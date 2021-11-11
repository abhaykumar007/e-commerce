import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default function carosuleCard() {
  return (
    <div className="carousel">
      <Carousel infiniteLoop autoPlay>
        {/* Card-1 */}
        <div className="card1 ">
          <div className="pic">
            <img src="../pics/img1.png" alt="logo" />
          </div>

          <div className="details">
            <a className="p1">Everday Elegance</a>
            <p className="p2">Daily ware kurtas Under 599</p>
            <p className="p3">+ EXPLORE</p>
          </div>
        </div>

        {/* Card-2 */}
        <div className="card2">
          <div className="pic">
            <img src="../pics/img2.png" alt="logo" />
          </div>

          <div className="details">
            <a className="p1">MISGUIDED</a>
            <p className="p2">Launch Offer:Flat 25% Off</p>
            <p className="p3">+ EXPLORE</p>
          </div>
        </div>

        {/* Card-3 */}
        <div className="card2">
          <div className="pic">
            <img src="../pics/img3.png" alt="logo" />
          </div>

          <div className="details">
            <a className="p1">URBANIC</a>
            <p className="p2">Min. 30% Off</p>
            <p className="p3">+ EXPLORE</p>
          </div>
        </div>

        {/* Card-4 */}
        <div className="card1">
          <div className="pic">
            <img src="../pics/img4.png" alt="logo" />
          </div>

          <div className="details card4">
            <a className="p1">Level Up On Fitness</a>
            <p className="p2">Activeware styles at 40-60% Off</p>
            <p className="p3">+ EXPLORE</p>
          </div>
        </div>

        {/* Card-5 */}
        <div className="card1 one">
          <div className="pic">
            <img src="../pics/img5.png" alt="logo" />
          </div>

          <div className="details card5">
            <a className="p1">Styles You Can't Resist</a>
            <p className="p2">Western ware at 40-60% Off</p>
            <p className="p3">+ EXPLORE</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
