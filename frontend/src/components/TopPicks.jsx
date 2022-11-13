import React from 'react'
import PizzaItem from './PizzaItem';
import '../styles/TopPicks.css'
import { topPicks } from '../data/homeData';

const TopPicks = () => {
  const showtopPicks = topPicks.map((item, index) => {
    return (
        <PizzaItem pizza = {item}/>
    );
  });
  return (
    <div className='topPicks-container'>
        <div className="topPicks-wrapper">
            {showtopPicks}
        </div>
    </div>
  )
}

export default TopPicks
