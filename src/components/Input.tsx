import React from "react";
import "./styles.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

interface Props {
  ekle: string;
  setEkle: React.Dispatch<React.SetStateAction<string>>;
  elleEkle: (e: React.FormEvent) => void;

  eklee: string;
  setEklee: React.Dispatch<React.SetStateAction<string>>;
  elleEklee: (t: React.FormEvent) => void;

  ekleee: string;
  setEkleee: React.Dispatch<React.SetStateAction<string>>;
  elleEkleee: (a: React.FormEvent) => void;

  ekleeee: string;
  setEkleeee: React.Dispatch<React.SetStateAction<string>>;
  elleEkleeee: (a: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ ekle, setEkle, elleEkle, eklee, setEklee, elleEklee, ekleee,setEkleee,elleEkleee, ekleeee,setEkleeee,elleEkleeee}) => {
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
        onChange={(t) => setEklee(t.target.value)}
        placeholder="Soyad"
        className="input__box"
      />

      <input
        type="input"
        value={ekleee}
        onChange={(a) => setEkleee(a.target.value)}
        placeholder="Tel"
        className="input__box"
      />
      <input
        type="input"
        value={ekleeee}
        onChange={(b) => setEkleeee(b.target.value)}
        placeholder="Ülke"
        className="input__box"
      />

      
<Button variant="primary" type="submit">Ekle</Button>
    </form>
  );
};

export default Input;
