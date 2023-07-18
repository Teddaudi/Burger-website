import React from 'react'
import burgers from '../data'
import Card from './Card'
import './Burger.css'
import ProductCard from './ProductCard'

const Burger = ({handleClick}) => {
  return (
    <div className='burger'>
    {
        burgers.map((burger)=>(
            <ProductCard burger={burger} key={burger.id} handleClick={handleClick} />
        ))
    }
    </div>
  )
}

export default Burger