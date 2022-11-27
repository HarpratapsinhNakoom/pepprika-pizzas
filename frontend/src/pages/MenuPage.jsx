import React from 'react'
import { useLocation } from 'react-router'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import axios from 'axios'

const MenuPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  const [menuData, setMenuData] = React.useState([]);

  React.useEffect(() => {
      const getPizzas = async () => {
        try{
            const res = category === "menu" ?
             await axios.get("http://localhost:5000/api/products")
             : await axios.get(`http://localhost:5000/api/products/?category=${category}`);
            // console.log(res.data)
            setMenuData(res.data);
        }catch(err) {
            console.log(err)
        }
      }

      getPizzas();
  }, [category])
  // console.log(category)
  return (
    <div style={{marginTop : "120px"}}>
        <Header />
        <Filters />
        <Menu menuData = {menuData}/>
        <Footer />
    </div>
  )
}

export default MenuPage
