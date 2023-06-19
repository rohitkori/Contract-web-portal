import { React, useState, useEffect } from "react";
import "./Homepage.css";
import homepage_image from "../assets/homepage-image.svg";
const Homepage = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <div className="homepage-container">
        <div className="homepage-left-container">
          <img src={homepage_image} alt="" />
        </div>
        <div className="homepage-right-container">
          <h1>Get your Contract</h1>
        </div>
      </div>
    </>
  );
};

export default Homepage;
