import React from "react";
import "./SiteData.css";
import { GiSofa } from "react-icons/gi";
import Services from "../Services/Services";
import { FaTriangleExclamation } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { FaStoreAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GiBackwardTime } from "react-icons/gi";


const SiteData = () => {
  return (
    <>
      <div className="container">
        <div className="data-cards grid grid-media">
          {/* card 1 */}

          <div className="card-list">
            <div className="card-details">
              <div className="icon-box">
                <GiSofa className="data-icons" />
              </div>
              <div className="data-details">
                <h3>Bookings</h3>
                <h2>184</h2>
              </div>
            </div>
            <hr className="break-hr" />
            <div className="card-latest-updates">
              <a href="">
                <FaTriangleExclamation className="tri-icon" />
                <h5>get more space</h5>
              </a>
            </div>
          </div>

          {/* card 2 */}

          <div className="card-list">
            <div className="card-details">
              <div className="icon-box" style={{ backgroundColor: "#E0296A" }}>
                <MdEqualizer className="data-icons" />
              </div>
              <div className="data-details">
                <h3>website visits</h3>
                <h2>75.521</h2>
              </div>
            </div>
            <hr className="break-hr" />
            <div className="card-latest-updates">
              <a href="" className="other-updates">
                <FaTag className="icons" />
                <h5>Tracked from Google Analytics</h5>
              </a>
            </div>
          </div>

          {/* card 3 */}

          <div className="card-list">
            <div className="card-details">
              <div className="icon-box" style={{ backgroundColor: "#55AE59" }}>
                <FaStoreAlt className="data-icons" />
              </div>
              <div className="data-details">
                <h3>Revenue</h3>
                <h2>$34,245</h2>
              </div>
            </div>
            <hr className="break-hr" />
            <div className="card-latest-updates">
              <a href="" className="other-updates">
                <SlCalender className="icons" />
                <h5>Last 24 Hours</h5>
              </a>
            </div>
          </div>

          {/* card 4 */}

          <div className="card-list">
            <div className="card-details">
              <div className="icon-box" style={{ backgroundColor: "#14BACE" }}>
                <FaTwitter className="data-icons" />
              </div>
              <div className="data-details">
                <h3>followers</h3>
                <h2>+245</h2>
              </div>
            </div>
            <hr className="break-hr" />
            <div className="card-latest-updates">
              <a href="#" className="other-updates">
                <GiBackwardTime className="icons" />
                <h5>Just Updated</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Services /> */}
    </>
  );
};

export default SiteData;
