import React from 'react'
import { menuData } from '../data/homeData';
import PizzaItem from './PizzaItem';
import '../styles/TopPicks.css'


function Menu() {
    const showtopPicks = menuData.map((item, index) => {
        return (
            <PizzaItem pizza = {item} key={index}/>
        );
    });

    return (
        <div className="menu-container">
            <div className="menu-title">Menu</div>
            <div className='pizza-container'>
                <div className="pizza-wrapper">
                    {showtopPicks}
                </div>
            </div>
        </div>
    )
}

export default Menu