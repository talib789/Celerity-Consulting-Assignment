import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { RxEnter } from "react-icons/rx";
import { BsCalendarWeek, BsChatRightDots } from "react-icons/bs";
import { MdDirectionsBoat } from "react-icons/md";
import { FaBusinessTime, FaShippingFast, } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <HashLink to={"/HomePage"}>
            Ship<h4>mate</h4>
          </HashLink>
        </div>
        <div className="rightSide">
          <HashLink to={"/homeDash"}>Log-IN</HashLink>
          <button className="learnMore">Learn more</button>
        </div>
      </div>
      <div className="home" id="home">
        <h1>Hassle-Free Shipping Solutions</h1>
        <p>
          Compare, book, and manage your freight across the world's top
          logistics providers, all on one plaform.
        </p>

        <div className="mid">
          <input type="text" placeholder="Origin, Port City" />
          <input type="text" placeholder="Destination, Port City" />
          <input type="date" placeholder="Destination, Port City" />
          <input type="number" placeholder="Load (kg)" />
          <Link to={"/checkout"}>
            <RxEnter />
          </Link>
        </div>
        <h1 className="midLow">Services</h1>
        <div className="services">
          <div className="serviceBox">
            <h3>
              <MdDirectionsBoat />
              Freight Services
            </h3>
            <p>
              Open new Opportunites to grow your business. Enter new markets and
              discover new contitnents. We are with you, door-to-door.
            </p>
          </div>
          <div className="serviceBox">
            <h3>
              {" "}
              <FaBusinessTime />
              Business Services
            </h3>
            <p>
              We support your goals for growth with cargo insurance, online
              payments and paperless workflow. Tale your bsuiness to the next
              level.
            </p>
          </div>
          <div className="serviceBox">
            <h3>
              <FaShippingFast />
              Shipping & Logistics
            </h3>
            <p>
              Find powerful solutions to meet your diverse transportation needs.
              Agile solutions to handle all your supply chain needs.
            </p>
          </div>
          <div className="serviceBox">
            <h3>
              <BsCalendarWeek />
              24/7
            </h3>
            <p>
              Receive support from our experts all over the world at every stage
              of the process, 24/7.
            </p>
          </div>
        </div>
      </div>
      <div className="help">
      <button className="chatBox">
        <BsChatRightDots />
      </button>
    </div>
    </>
  );
}
