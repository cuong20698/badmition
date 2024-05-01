import React from 'react'
import '../../styles/search.css'
import Title from '../Common/title'

const Search = () => {
  return (
    <div className='search-container'>
        <Title name={"Tìm kiếm"}/>
        <div className='search-bar'>
            <input className='search-ip' type='date'></input>
            <a className='search-btn' href='/'>Search</a>
        </div>
        <Title name={"Kết quả"}/>
        <div className='list-cards'>
            <div className='cards'></div>
        </div>
    </div>
  )
}

export default Search