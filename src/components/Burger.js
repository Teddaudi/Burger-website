import React from 'react'
import burgers from '../data'
import Card from './Card'
import './Burger.css'

const Burger = ({handleClick}) => {
  return (
    <div className='burger'>
    {
        burgers.map((burger)=>(
            <Card burger={burger} key={burger.id} handleClick={handleClick} />
        ))
    }
    </div>
  )
}

export default Burger