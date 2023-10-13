import React, { useState, useEffect } from "react";
import "./Form.css";
import { useHistory } from "react-router-dom";
const Form = () => {
  const history = useHistory();
  const [ekMalzemeler, setEkMalzemeler] = useState({
    Pepperoni: false,
    Domates: false,
    Biber: false,
    Sosis: false,
    Mısır: false,
    Sucuk: false,
    "Kanada Jambonu": false,
    Salam: false,
    Ananas: false,
    "Tavuk Izgara": false,
    Jalepeno: false,
    Kabak: false,
    Soğan: false,
    Sarımsak: false,
  });
  const price = 85.5;
  const [siparisNotu, setSiparisNotu] = useState("");
  const [seciliBoyut, setSeciliBoyut] = useState("");
  const [toplamFiyati, setToplamFiyati] = useState(price);
  const [adet, setAdet] = useState(1);

  const artir = () => {
    setAdet(adet + 1);
    const ekMalzemeFiyati = seciliMalzemeSayisi * 5;
    const yeniToplamFiyat = (price + ekMalzemeFiyati) * adet;
    setToplamFiyati(yeniToplamFiyat);
  };

  const azalt = () => {
    if (adet > 1) {
      setAdet(adet - 1);
      const ekMalzemeFiyati = seciliMalzemeSayisi * 5;
      const yeniToplamFiyat = (price + ekMalzemeFiyati) * (adet - 1);
      setToplamFiyati(yeniToplamFiyat);
    }
  };
  const handleCheckboxChange = (malzemeAdi) => {
    setEkMalzemeler((prevEkMalzemeler) => ({
      ...prevEkMalzemeler,
      [malzemeAdi]: !prevEkMalzemeler[malzemeAdi],
    }));
  };

  const seciliMalzemeSayisi = Object.values(ekMalzemeler).filter(
    (secilen) => secilen
  ).length;

  const ekMalzemeFiyati = seciliMalzemeSayisi * 5;
  const toplamFiyat = price * adet + ekMalzemeFiyati;
  const handleChange = (e) => {
    setSiparisNotu(e.target.value);
  };
  const boyutSecildi = (event) => {
    setSeciliBoyut(event.target.value);
  };

  const handleClick = () => {
    history.push("/CheckOrder");
  };

  return (
    <div className="formMainDiv">
      <div className="radioAndDropdown">
        <div>
          <h4>Boyut Seç</h4>

          <form className="sizePick">
            <label>
              <input
                type="radio"
                value="kucuk"
                checked={seciliBoyut === "kucuk"}
                onChange={boyutSecildi}
              />
              Küçük
            </label>
            <label>
              <input
                type="radio"
                value="orta"
                checked={seciliBoyut === "orta"}
                onChange={boyutSecildi}
              />
              Orta
            </label>
            <label>
              <input
                type="radio"
                value="buyuk"
                checked={seciliBoyut === "buyuk"}
                onChange={boyutSecildi}
              />
              Büyük
            </label>
          </form>
        </div>
        <div className="pickThickness">
          <h4>Hamur Seç</h4>
          <div>
            <select>
              <option selected disabled>
                Hamur Kalınlığı
              </option>
              <option>İnce Kenar</option>
              <option>Kalın Kenar</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h4>Ek Malzemeler</h4>
        <p>En fazla 10 malzeme seçebilirsiniz.5₺</p>
        <div className="addElement">
          {Object.keys(ekMalzemeler).map((malzeme) => (
            <label className="label" key={malzeme}>
              <input
                type="checkbox"
                checked={ekMalzemeler[malzeme]}
                onChange={() => handleCheckboxChange(malzeme)}
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
          <button className="numberButtons" onClick={azalt}>
            -
          </button>
          <span>{adet}</span>
          <button className="numberButtons" onClick={artir}>
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
                <p>{ekMalzemeFiyati}</p>
                <p>{toplamFiyat}</p>
              </div>
            </div>
          </div>
          <button className="siparisButton" onClick={handleClick}>
            Sipariş Ver
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
