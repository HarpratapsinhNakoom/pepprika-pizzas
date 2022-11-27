import React from 'react'
import { Link } from 'react-router-dom'
import { filterData } from '../data/homeData'
import '../styles/Filters.css'


const Filters = () => {
    const showFilters = filterData.map((item, index) => {
        return (
            <Link to={`/menu/${item.title.toLocaleLowerCase()}`} className="filter-box" key={index}>
                <img src={item.image} alt="" className="filter-img" />
                <div className="filter-name">{item.title}</div>
            </Link>
        );
    })
  return (
    <div className='filters-container'>
        {showFilters}
    </div>
  )
}

export default Filters
