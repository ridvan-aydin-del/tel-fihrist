import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { Input } from "./Input";
import { Ekle } from "../model";
import { Eklee } from "../model2";
import { Tel } from "../model3";
import { Ulke } from "../model4";

import { Table } from 'reactstrap';


import { Pagination } from 'rsuite';
import { useSelector } from 'react-redux';

import { adlarReducer } from '../adReducer';

import { AdState } from '../adReducer';
import { useDispatch } from 'react-redux';
import { addAd } from '../action'

function ModalEkle() {

  const [activePage, setActivePage] = React.useState(1);


  const [show, setShow] = useState(false);
  const [goster, setGoster] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const detayKapat = () => setGoster(false);
  const detayAc = () => setGoster(true);



  const adlar = useSelector<AdState, AdState["adlar"]>((state) => state.adlar)
  const dispatch = useDispatch()
  const onAddAd = (ad:string,soyad:string) => {
    dispatch(addAd(ad,soyad))
  }

 

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
        <Input addAd={onAddAd}
        />
        
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

      

     {/* <Pagination total={100} limit={10} activePage={activePage} onChangePage={setActivePage} /> */}
    

   
     {adlar.map((ad,soyad) => {
          return (
          <Table>
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
                <td className="list"  key={ad}><h6>{ad}</h6></td>
                <td className="list"  key={soyad}><h6>{soyad}</h6></td>
              </tr>
              
            </tbody>
            
          </Table>
          
        
          )
          
        })}  
      {/* 
        
        
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
      
      ))} */}
      
     <Pagination total={100} limit={20} activePage={1} onChangePage={setActivePage} />
    </>
  );
}

export default ModalEkle;

