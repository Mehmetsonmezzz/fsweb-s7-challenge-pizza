import React from "react";
import "./CreateOrder.css";
import image from "./logo.svg";

const CreateOrder = () => {
  const price = "85.50₺";
  const rating = "4.9";
  return (
    <div>
      <div className="headerDiv">
        <img src={image} />
      </div>
      <div className="mainDiv">
        <div>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="mainPriceDiv">
            <div className="priceDiv">
              <h2>{price}</h2>
            </div>
            <div className="ratingDiv">
              <p className="rating">{rating}</p>
              <p>(200)</p>
            </div>
          </div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkla pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli bir yemektir.. Küçük bir pizzaya bazen pizzeta denir.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreateOrder;
