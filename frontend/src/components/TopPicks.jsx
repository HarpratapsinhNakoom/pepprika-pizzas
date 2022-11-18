import React from 'react'
import PizzaItem from './PizzaItem';
import '../styles/TopPicks.css'
import '../styles/Menu.css'
import { topPicks } from '../data/homeData';

const TopPicks = () => {
  const showtopPicks = topPicks.map((item, index) => {
    return (
        <PizzaItem pizza = {item} key={index}/>
    );
  });
  return (
    <div className='pizza-container'>
        <div className="menu-title">𝐵𝑒𝓈𝓉 𝓈𝑒𝓁𝓁𝑒𝓇𝓈</div>
        <div className="pizza-wrapper">
            {showtopPicks}
        </div>
    </div>
  )
}

export default TopPicks
