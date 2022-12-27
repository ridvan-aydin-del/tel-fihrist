import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Input2 from "./components/Input2";
import { Ekle } from "./model";
import { Eklee } from "./model2";
import { Tel } from "./model3";

const App: React.FC = () => {
  {/*----Ad----*/}
  const [ekle, setEkle] = useState<string>("");
  const [ekles, setEkles] = useState<Ekle[]>([]);

  const elleEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if (ekle) {
      setEkles([...ekles, { id: Date.now(), ekle, isDone: false, idd: Date.now(), eklee, isDonee: false, iddd: Date.now(), ekleee, isDoneee: false }]);
      setEkle("");
    }
  }
{/*----Ad----*/}
{/*----soyAd----*/}
  const [eklee,setEklee] = useState<string>("");
  const [ekless, setEkless] = useState<Eklee[]>([]);

  const elleEklee = (e: React.FormEvent) => {
    e.preventDefault();
    if (eklee) {
      setEkless([...ekless, { idd: Date.now(), eklee, isDonee: false }]);
      setEklee("");
    }
  }

{/*----soyAd----*/}
{/*----Tel----*/}
const [ekleee,setEkleee] = useState<string>("");
const [tell, setTell] = useState<Tel[]>([]);

const elleEkleee = (e: React.FormEvent) => {
  e.preventDefault();
  if (ekleee) {
    setTell([...tell, { iddd: Date.now(), ekleee, isDoneee: false }]);
    setEkleee("");
  }
}

{/*----Tel----*/}
  return (
    <div className="App">
      <span className="baslik">Telefon-Fihrist</span>
      <Input ekle={ekle} setEkle={setEkle} elleEkle={elleEkle}
       eklee={eklee} setEklee={setEklee} elleEklee={elleEklee}
       ekleee={ekleee} setEkleee={setEkleee} elleEkleee={elleEkleee}
        />
  {/*    <Input2 eklee={eklee} setEklee={setEklee} elleEklee={elleEklee} />*/}
  {ekles.map((t) => (
        <table className="table" border={1}>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Telefon Numarası</th>
            <th>Ülke</th>
          </tr>
          <tr>
            <td className="list">{t.ekle}</td>
            <td className="list">{t.eklee}</td>
            <td className="list">{t.ekleee}</td>
          </tr>
        </table>
      ))}
    {/* {ekless.map((t) => (
        <table className="table" border={1}>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Telefon Numarası</th>
            <th>Ülke</th>
          </tr>
          <tr>
            
            <td className="list">{t.eklee}</td>
          </tr>
        </table>
      ))}
    */}
      {/*<Search />*/}
    </div>
  );
};

export default App;
