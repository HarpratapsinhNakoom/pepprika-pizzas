import React from 'react';
import '../styles/Single.css';

export default function Single() {
    return (
        <div className='single-pizza-container'>
            <div className='single-pizza-image'>
                <img src='https://buddhapizza.com/storage/products/jgaXh2A4jVwLTXkTKBDIgFHZkgm06YF3g3Sva78a.jpeg' alt='Pizza' />
            </div>
            <div className='single-pizza-info'>
                <div className='single-pizza-title'>
                    With salmon and spinach
                </div>
                <div className='single-pizza-ingredients'></div>
                <div className='single-pizza-price'></div>
                <div className='single-pizza-order'></div>
            </div>
        </div>
    )
}