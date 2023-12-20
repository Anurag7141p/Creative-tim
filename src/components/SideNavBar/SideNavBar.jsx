import React from "react";
import "./SideNavBar.css";
import { MdDashboard } from "react-icons/md";
import { IoAppsSharp } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";
import { LiaTableSolid } from "react-icons/lia";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdWidgets } from "react-icons/md";
import { MdOutlineShowChart } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";
import SiteData from "../SiteData/SiteData";
import { FaCaretDown } from "react-icons/fa";

const SideNavBar = () => {
  return (
    <div className="side-nav-container grid grid-two-cols">
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="nav-brand">
            <img src="images/logo.png" alt="" srcset="" />
            <h2>creative tim</h2>
          </div>
        </div>
        <hr className="break-point" />

        <div className="nav-profile grid grid-three-cols">
          <img src="images/profile_pic.jpg" alt="" srcset="" />
          <h3>tania andrew</h3>
          <FaCaretDown className="icon" />
        </div>

        <hr className="break-point" />

        <div className="nav-menu">
          <a className="menu-item grid grid-three-cols" href="#">
            <MdDashboard className="list-icon" />
            <p>dashboard</p>
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <IoAppsSharp className="list-icon" />
            <p>components</p>
            <FaCaretDown className="menu-icon" />
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <FaRegClipboard className="list-icon" />
            <p>forms</p>
            <FaCaretDown className="menu-icon" />
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <LiaTableSolid className="list-icon" />
            <p>tables</p>
            <FaCaretDown className="menu-icon" />
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <FaMapMarkerAlt className="list-icon" />

            <p>maps</p>
            <FaCaretDown className="menu-icon" />
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <MdWidgets className="list-icon" />
            <p>widgets</p>
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <MdOutlineShowChart className="list-icon" />
            <p>charts</p>
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <LuCalendarDays className="list-icon" />
            <p>calender</p>
          </a>

          <a className="menu-item grid grid-three-cols" href="#">
            <FaBookmark className="list-icon" />
            <p>pages</p>
            <FaCaretDown className="menu-icon" />
          </a>
        </div>
      </div>
      <div className="all-content">
        {/* <SiteData /> */}
      </div>
    </div>
  );
};

export default SideNavBar;
