import React from 'react'
import { menuData } from '../data/homeData';
import PizzaItem from './PizzaItem';
import '../styles/TopPicks.css'
import '../styles/Menu.css'


function Menu() {
    const showtopPicks = menuData.map((item, index) => {
        return (
            <PizzaItem pizza = {item} key={index}/>
        );
    });

    return (
        <div className="menu-container">
            <div className="menu-title">𝐹𝒾𝓃𝒹 𝓈𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔 𝓎𝑜𝓊 𝓁𝒾𝓀𝑒</div>
            <div className='pizza-container'>
                <div className="pizza-wrapper">
                    {showtopPicks}
                </div>
            </div>
        </div>
    )
}

export default Menu