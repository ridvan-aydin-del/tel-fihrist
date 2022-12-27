import React from "react";
import "./styles.css";

interface Props {
  eklee: string;
  setEklee: React.Dispatch<React.SetStateAction<string>>;
  elleEklee: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ eklee, setEklee, elleEklee }) => {
  return (
    <form className="input" onSubmit={(e) => elleEklee(e)}>
      <input
        type="input"
        value={eklee}
        onChange={(e) => setEklee(e.target.value)}
        placeholder="Ekle"
        className="input__box"
      />
  
    </form>
  );
};

export default Input;
