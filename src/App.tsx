import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalEkle from './components/ModalEkle'


const App: React.FC = () => {
 
  return (
    <div className="App">
      <span className="baslik">Telefon-Fihrist</span>
      
      <ModalEkle/>
    </div>
  );
};

export default App;
