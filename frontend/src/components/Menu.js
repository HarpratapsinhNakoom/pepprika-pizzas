import React from 'react'
// import { menuData } from '../data/homeData';
import PizzaItem from './PizzaItem';
import '../styles/TopPicks.css'
import '../styles/Menu.css'


function Menu(props) {

    const showMenu = props.menuData.map((item, index) => {
        return (
            <PizzaItem pizza = {item} key={index}/>
        );
    });

    console.log(props.menuData)
 
    return (
        <div className="menu-container">
            <div className="menu-title">πΉπΎππΉ ππππππ½πΎππ πππ ππΎππ</div>
            <div className='pizza-container'>
                <div className="pizza-wrapper">
                    {showMenu}
                </div>
            </div>
        </div>
    )
}

export default Menu