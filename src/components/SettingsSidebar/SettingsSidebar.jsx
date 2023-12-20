import React from "react";
import "./SettingsSidebar.css";
import { IoMdSettings } from "react-icons/io";

const SettingsSidebar = () => {
  return (
    <>
      <div className="icon-bar">
        <a href="#" className="settings-icon-box">
          <IoMdSettings className="settings-icon"/>
        </a>
      </div>
    </>
  );
};

export default SettingsSidebar;
