import React, { ChangeEvent } from "react";
import "./styles.css";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

interface AdlarProps {
  addAd(ad:string,soyad:string): void;
}

export const Input:React.FC<AdlarProps> = ({addAd}) => {

  const [ad, setAd] = React.useState("")
  const [soyad, setSoyad] = React.useState("")

  const updateAd = (event:ChangeEvent<HTMLInputElement>) => {
    setAd(event.target.value)
    
  }
  const updateSoyad = (event:ChangeEvent<HTMLInputElement>) => {
    setSoyad(event.target.value)
  }

  

  const onAddAdClick = () => {
      addAd(ad,soyad)
      setAd("")
      setSoyad("")
  }
  

  return(
  <div>
    <input onChange={updateAd} value={ad} type="text" name='note' placeholder='Note' />
    <input onChange={updateSoyad} value={soyad} type="text" name='note' placeholder='Note' />
    <button onClick={onAddAdClick}>Add Note</button>
  </div>
  );
}