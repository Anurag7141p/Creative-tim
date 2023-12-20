import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <>
      <h1 className="service-h1">managing listings</h1>
      <div className="service-cards">
        <div className="card">
          <div className="img-box">
            <img
              src="https://cdn.contexttravel.com/image/upload/w_1500,q_60/v1558551574/blog/Things%20Didn%27t%20Know%20About%20Montmartre/john-towner-125993-unsplash_1_1024x768.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>cozy 5 star apartment</h2>
            <p>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src="https://demos.creative-tim.com/bs3/material-dashboard-pro/assets/img/card-3.jpeg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>office studio</h2>
            <p>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the night life in
              London, UK.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="img-box">
            <img
              src="https://121clicks.com/wp-content/uploads/2021/09/beautiful_castles_around_the_world_vincent_croce_01.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h2>Beautiful Castle</h2>
            <p>
              The place is close to Metro Station and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Milan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
