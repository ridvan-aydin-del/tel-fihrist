import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Input from "./Input";
import { Ekle } from "../model";
import { Eklee } from "../model2";
import { Tel } from "../model3";
import { Ulke } from "../model4";

import { Table } from 'reactstrap';


import { Pagination } from 'rsuite';


function ModalEkle() {

  const [activePage, setActivePage] = React.useState(1);


  const [show, setShow] = useState(false);
  const [goster, setGoster] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const detayKapat = () => setGoster(false);
  const detayAc = () => setGoster(true);

  
    {/*----Ad----*/}
    const [ekle, setEkle] = useState<string>("");
    const [ekles, setEkles] = useState<Ekle[]>([]);

    
  
    const elleEkle = (e: React.FormEvent) => {
      e.preventDefault();
      if (ekle) {
        setEkles([...ekles, { id: Date.now(), ekle, isDone: false, idd: Date.now(), eklee, isDonee: false, iddd: Date.now(), ekleee, isDoneee: false , idddd: Date.now(), ekleeee, isDoneeee: false }]);
        setEkle("");
      }
    }
  {/*----Ad----*/}
  {/*----soyAd----*/}
    const [eklee,setEklee] = useState<string>("");
    const [ekless, setEkless] = useState<Eklee[]>([]);
  
    const elleEklee = (t: React.FormEvent) => {
      t.preventDefault();
      if (eklee) {
        setEkless([...ekless, { idd: Date.now(), eklee, isDonee: false }]);
        setEklee("");
      }
    }
  
  {/*----soyAd----*/}
  {/*----Tel----*/}
  const [ekleee,setEkleee] = useState<string>("");
  const [tell, setTell] = useState<Tel[]>([]);
  
  const elleEkleee = (a: React.FormEvent) => {
    a.preventDefault();
    if (ekleee) {
      setTell([...tell, { iddd: Date.now(), ekleee, isDoneee: false }]);
      setEkleee("");
    }
  }
  
  {/*----Tel----*/}
  {/*----Ülke----*/}
  const [ekleeee,setEkleeee] = useState<string>("");
  const [ulkee, setUlkee] = useState<Ulke[]>([]);
  
  const elleEkleeee = (b: React.FormEvent) => {
    b.preventDefault();
    if (ekleeee) {
      setUlkee([...ulkee, { idddd: Date.now(), ekleeee, isDoneeee: false }]);
      setEkleeee("");
    }
  }
  {/*----Ülke----*/}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Kişi eklemek için tıklayın !
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kişi Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Input ekle={ekle} setEkle={setEkle} elleEkle={elleEkle}
       eklee={eklee} setEklee={setEklee} elleEklee={elleEklee}
       ekleee={ekleee} setEkleee={setEkleee} elleEkleee={elleEkleee}     
       ekleeee={ekleeee} setEkleeee={setEkleeee} elleEkleeee={elleEkleeee}
        />
        
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

      

     {/* <Pagination total={100} limit={10} activePage={activePage} onChangePage={setActivePage} /> */}
      
      {ekles.map((t) => (
     <>   
     
        <Table striped >
        
      <thead>
    <tr>
      <th>
        Ad
      </th>
      <th>
        Soyad
      </th>
      <th>
        Telefon Numarası
      </th>
      <th>
        Ülke
      </th>
    </tr>
      </thead>
  
  <tbody>
  
    <tr>
      
    <td className="list">{t.ekle}</td>
    <td className="list">{t.eklee}</td>
    <td className="list">{t.ekleee}</td>
    <td className="list">{t.ekleeee}</td>
    <Button variant="primary" onClick={detayAc}>
        Kişi Detayları
    </Button>
    
    </tr>
   
  </tbody>

      </Table>
      <Modal
        show={goster}
        onHide={detayKapat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kişi Detayları</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Ad</h5>
        <td className="list">{t.ekle}</td>
        <br/>
          <h5>Soyad</h5>
        <td className="list">{t.eklee}</td>
        <br/>
          <h5>Telefon Numarası</h5>
        <td className="list">{t.ekleee}</td>
        <br/>
          <h5>Ülke</h5>
        <td className="list">{t.ekleeee}</td>
        
        </Modal.Body>
      </Modal>
      </>
      ))}
      
     <Pagination total={100} limit={20} activePage={1} onChangePage={setActivePage} />
    </>
  );
}

export default ModalEkle;

