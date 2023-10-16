import React, { useEffect, useState } from "react";
import "./CheckOrder.css";
import image from "../logo.svg";
import { useLocation } from "react-router-dom";

const CheckOrder = () => {
  const location = useLocation();
  const [siparisData, setSiparisData] = useState(null);

  useEffect(() => {
    if (location.state) {
      setSiparisData(location.state);
    }
  }, [location.state]);

  return (
    <div className="checkOrderContainer">
      <div className="checkMain">
        {<img src={image} className="img" />}
        <div className="checkText">
          {siparisData ? (
            <div>
              <p>
                TEBRIKLER!
                <br />
                SİPARİŞİN ALINDI!
              </p>
              <p>Boyut: {siparisData.boyut}</p>
              <p>Hamur: {siparisData.hamur}</p>
              <p>Ek Malzemeler: {siparisData.ekMalzeme.join(", ")}</p>
              <p>Not: {siparisData.not}</p>
              <p>Adet: {siparisData.adet}</p>
              <p>Toplam: {siparisData.toplam} ₺</p>
            </div>
          ) : (
            <p>Sipariş bilgisi bulunamadı.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOrder;
