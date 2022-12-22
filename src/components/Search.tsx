import React from 'react'
import './searchs.css';

const Search = () => {
    return(
        <form className='search_form'>
            <input type="input" placeholder='Ara' className='search_input' />
            <button className='input_search' type='submit'>Go</button>
        </form>
    )
}

export default Search