import React, { useState, useEffect } from "react";
import "./Form.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Form = () => {
  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Salam",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const history = useHistory();
  const basePrice = 85.5;
  const [seciliMalzeme, setSeciliMalzeme] = useState([]);
  const [adet, setAdet] = useState(1);
  const [seciliBoyut, setSeciliBoyut] = useState("");
  const [siparisNotu, setSiparisNotu] = useState("");
  const [seciliHamur, setSeciliHamur] = useState("selected");

  const handleToppingChange = (secili) => {
    if (seciliMalzeme.includes(secili)) {
      setSeciliMalzeme((prevSecili) =>
        prevSecili.filter((item) => item !== secili)
      );
    } else {
      if (seciliMalzeme.length < 10) {
        setSeciliMalzeme((prevSecili) => [...prevSecili, secili]);
      } else {
        // En fazla 10 malzeme seçebilirsiniz uyarısı yapabilirsiniz.
        alert("En fazla 10 malzeme seçebilirsiniz.");
      }
    }
  };

  const boyutSecildi = (event) => {
    setSeciliBoyut(event.target.value);
  };
  const hamurSecildi = (event) => {
    setSeciliHamur(event.target.value);
  };

  const handleIncrement = () => {
    setAdet((prevAdet) => prevAdet + 1);
  };
  const handleDecrement = () => {
    if (adet > 1) {
      setAdet((prevAdet) => prevAdet - 1);
    }
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSiparisNotu(value);
  };
  // Toplam fiyatı hesapla
  const toppingPrice = seciliMalzeme.length * 5;
  const totalPrice = basePrice * adet + toppingPrice;

  const handleSubmit = (e) => {
    e.preventDefault();

    const siparis = {
      boyut: seciliBoyut,
      hamur: seciliHamur,
      ekMalzeme: seciliMalzeme,
      not: siparisNotu,
      adet: adet,
      toplam: totalPrice,
    };

    axios
      .post("https://reqres.in/api/orders", siparis)
      .then((response) => {
        console.log("Sipariş başarıyla gönderildi:", response.data);
        history.push("/CheckOrder");
      })
      .catch((error) => {
        console.error("Sipariş gönderme hatası:", error);
      });
    history.push({
      pathname: "/CheckOrder",
      state: {
        boyut: seciliBoyut,
        hamur: seciliHamur,
        ekMalzeme: seciliMalzeme,
        not: siparisNotu,
        adet: adet,
        toplam: totalPrice,
      },
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formMainDiv">
        <div className="radioAndDropdown">
          <div>
            <h4>Boyut Seç</h4>

            <div className="sizePick">
              <label>
                <input
                  type="radio"
                  value="S"
                  name="boyut"
                  checked={seciliBoyut === "S"}
                  onChange={boyutSecildi}
                />
                S
              </label>
              <label>
                <input
                  type="radio"
                  value="M"
                  name="boyut"
                  checked={seciliBoyut === "M"}
                  onChange={boyutSecildi}
                />
                M
              </label>
              <label>
                <input
                  type="radio"
                  value="L"
                  name="boyut"
                  checked={seciliBoyut === "L"}
                  onChange={boyutSecildi}
                />
                L
              </label>
            </div>
          </div>
          <div className="pickThickness">
            <h4>Hamur Seç</h4>
            <div>
              <select value={seciliHamur} onChange={hamurSecildi}>
                <option selected disabled value="selected">
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce Kenar</option>
                <option value="kalin">Kalın Kenar</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h4>Ek Malzemeler</h4>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="addElement">
            {malzemeler.map((malzeme) => (
              <label key={malzeme} htmlFor={malzeme}>
                <input
                  id={malzeme}
                  type="checkbox"
                  checked={seciliMalzeme.includes(malzeme)}
                  onChange={() => handleToppingChange(malzeme)}
                />
                {malzeme}
              </label>
            ))}
          </div>
        </div>
        <div className="orderNote">
          <h4>Sipariş Notu</h4>
          <input
            className="orderNoteInput"
            type="text"
            placeholder="Özel notunuzu buraya ekleyin..."
            value={siparisNotu}
            onChange={handleChange}
          />
        </div>
        <div className="numberAndButton">
          <div className="number">
            <button
              type="button"
              className="numberButtons"
              onClick={handleDecrement}
            >
              -
            </button>
            <span>{adet}</span>
            <button
              type="button"
              className="numberButtons"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <div className="price">
            <div className="cssOrder">
              <h4>Sipariş Toplamı</h4>
              <div className="deneme">
                <div className="picks">
                  <p>Seçimler</p>
                  <p>Toplam</p>
                </div>
                <div>
                  <p>{seciliMalzeme.length * 5} ₺</p>
                  <p>{totalPrice} ₺</p>
                </div>
              </div>
            </div>
            <button type="submit">Sipariş Ver</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
