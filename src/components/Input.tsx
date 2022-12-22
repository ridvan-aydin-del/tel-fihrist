import React from 'react'
import './styles.css';

interface Props{
    ekle:string;
    setEkle:React.Dispatch<React.SetStateAction<string>>;
    elleEkle:(e: React.FormEvent)=>void;
}

const Input:React.FC<Props> = ({ekle, setEkle, elleEkle}) => {
    return(
        <form className='input' onSubmit={(e)=>elleEkle(e)}>
            <input type="input"
            value={ekle}
            onChange={
                (e)=>setEkle(e.target.value)
            }
            placeholder='Ekle' className='input__box' />
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
}

export default Input