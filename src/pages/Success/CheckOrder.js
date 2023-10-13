import React from "react";
import "./CheckOrder.css";
import image from "../logo.svg";

const CheckOrder = () => {
  return (
    <div className="checkOrderContainer">
      <div className="checkMain">
        {<img src={image} />}
        <div className="checkText">
          <p>
            TEBRIKLER!
            <br />
            SİPARİŞİN ALINDI!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
