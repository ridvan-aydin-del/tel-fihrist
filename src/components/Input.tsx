import React from "react";
import "./styles.css";

interface Props {
  ekle: string;
  setEkle: React.Dispatch<React.SetStateAction<string>>;
  elleEkle: (e: React.FormEvent) => void;

  eklee: string;
  setEklee: React.Dispatch<React.SetStateAction<string>>;
  elleEklee: (t: React.FormEvent) => void;

  ekleee: string;
  setEkleee: React.Dispatch<React.SetStateAction<string>>;
  elleEkleee: (t: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ ekle, setEkle, elleEkle, eklee, setEklee, elleEklee, ekleee,setEkleee,elleEkleee}) => {
  return (
    <form className="input" onSubmit={(e) => elleEkle(e)}>
      <input
        type="input"
        value={ekle}
        onChange={(e) => setEkle(e.target.value)}
        placeholder="Ad"
        className="input__box"
      />

      <input
        type="input"
        value={eklee}
        onChange={(e) => setEklee(e.target.value)}
        placeholder="Soyad"
        className="input__box"
      />

      <input
        type="input"
        value={ekleee}
        onChange={(e) => setEkleee(e.target.value)}
        placeholder="Tel"
        className="input__box"
      />

      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default Input;
