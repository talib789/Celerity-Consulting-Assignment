import React from "react";
import { HashLink } from "react-router-hash-link";
import { AiFillStar } from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import { MdFlight, MdOutlineMonitorWeight, MdPallet } from "react-icons/md";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.png";

export default function checkbox() {
  return (
    <>
      {/* H E A D E R */}
      <div className="header">
        <div className="logo">
          <HashLink to={"/home"}>
            Ship<h4>mate</h4>
          </HashLink>
        </div>
      </div>

      {/* Mid Body */}
      <ul className="midBody">
        <section>
          <li>1</li>
          <p>Search</p>
        </section>
        <span></span>
        <section>
          <li>2</li>
          <p>Recommeded services</p>
        </section>
        <span></span>
        <section>
          <li>3</li>
          <p>Results</p>
        </section>
        <span></span>
        <section>
          <li>
            <HashLink to={"/checkout"}>4</HashLink>
          </li>

          <HashLink to={"/checkout"}>Checkout</HashLink>
        </section>
      </ul>

      {/* B O D Y */}
      <div className="checkboxBody">
        <div className="left">
          <div className="bookingSummary">
            <h3>Booking summary</h3>
            <div>
              <div className="location">
                <BsFillBuildingFill />
                <p className="place">Delhi,</p>
                <p>110003 India</p>
              </div>
              <div className="bookingMid">
                <p>Express</p>
                <MdFlight />
                <div className="longDash"></div>
              </div>
              <div className="location">
                <BsFillBuildingFill />
                <p className="place">Shanghai,</p>
                <p>200080 China</p>
              </div>
            </div>
          </div>

          <div className="leftMid">
            <div className="totalWeight">
              <p>Total Weight/Volume</p>
              <div>
                <MdOutlineMonitorWeight />
                <h3>113.21 KG</h3>
              </div>
            </div>
            <div className="load">
              <p>Load</p>
              <div>
                <h3>1 X</h3>
                <p>
                  <MdPallet />
                  230 X 140 X 120 CM
                </p>
              </div>
            </div>
          </div>

          <div className="leftBottom">
            <div className="seller">
              <h4>
                Seller: <h4>Primetime Worldwide</h4>
              </h4>
              <img src={Image1} alt="" />
            </div>
            <div className="isurance">
              <h4>
                Isurance: <h4>Xcover.com</h4>
              </h4>
              <div>
                <img src={Image2} alt="" />
                <h1>Xcover.com</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="rightHeader">
            <h2>Price Details</h2>
            <div>
              <AiFillStar />
              <h3>Known shipper</h3>
            </div>
          </div>
          <div className="rightMid1">
            <h3>Seller's Quote</h3>
            <p>$ 3,659.25</p>
          </div>

          <div className="rightMid2">
            <div>
              <h3>Duties and taxes</h3>
              <p>Not Included</p>
            </div>
            <div>
              <h3>
                Insurance
                <p>Based on the items cost</p>
              </h3>
              <p>$ 323.40</p>
            </div>
          </div>

          <div className="rightMid3">
            <h3>
              Add a <a href=" #">promo code</a>{" "}
            </h3>
            <div>
              <h3>Platform tree</h3>
              <p>$ 119.48</p>
            </div>
          </div>

          <div className="bottom1">
            <h1>Total: </h1>
            <p>$ 4,102.13</p>
          </div>

          <button className="checkout">Checkout</button>
        </div>
      </div>
    </>
  );
}
