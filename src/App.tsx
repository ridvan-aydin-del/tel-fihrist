import React, { useState } from 'react';
import './App.css';
import Input from './components/Input'
import Search from './components/Search'
import { Ekle } from './model'

const App: React.FC = () => {
  const [ekle,setEkle] = useState<string>("");
  const [ekles,setEkles] = useState<Ekle[]>([]);

  const elleEkle = (e: React.FormEvent) => {
    e.preventDefault();
    if(ekle){
    setEkles([...ekles,{id:Date.now(), ekle,isDone:false}])
    setEkle("");
    }
  };
  console.log(ekles);

  return (
    <div className="App">
      <span className="baslik">Telefon-Fihrist</span>
      <Input ekle={ekle} setEkle={setEkle} elleEkle={elleEkle}/>
      {ekles.map(
        (t) => (
          <li className='asd'>{t.ekle}</li>
        )
      )}
      {/*<Search />*/}
    </div>
  );
}

export default App;
