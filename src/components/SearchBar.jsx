import React from 'react'
import '../style/SearchBar.css'

function SearchBar() {
  return (
    <div className='search-bar_container'>
        <input type="text" value="Search.."/>
        <input id='Showproducts' type="checkbox"/>
        <label htmlFor='show-products'>Only show products in stock</label> 
    </div>
  )
}

export {SearchBar}