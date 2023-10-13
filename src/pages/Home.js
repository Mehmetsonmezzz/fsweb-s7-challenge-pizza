import React from "react";
import "./Home.css";
import img1 from "./logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeDiv">
      <div className="bodyText">
        <img src={img1} alt="img" />
        <p>
          KOD ACIKTIRIR <br />
          PIZZA, DOYURUR
        </p>
      </div>
      <Link to="/FormPages">
        <button
          className="homeButton"
          onClick={() => (window.location.href = "/FormPages")}
        >
          ACIKTIM
        </button>
      </Link>
    </div>
  );
};

export default Home;
