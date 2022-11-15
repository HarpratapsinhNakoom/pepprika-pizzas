import React from 'react'
import { filterData } from '../data/homeData'
import '../styles/Filters.css'


const Filters = () => {
    const showFilters = filterData.map((item, index) => {
        return (
            <div className="filter-box" key={index}>
                <img src={item.image} alt="" className="filter-img" />
                <div className="filter-name">{item.title}</div>
            </div>
        );
    })
  return (
    <div className='filters-container'>
        {showFilters}
    </div>
  )
}

export default Filters
