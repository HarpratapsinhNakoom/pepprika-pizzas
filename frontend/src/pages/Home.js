import React from 'react'
import About from '../components/About';
import Banner from "../components/Banner";
import Menu from '../components/Menu';
import MenuPart from '../components/MenuPart';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopPicks from '../components/TopPicks';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <MenuPart/>
            <TopPicks />
            <About />
            {/* <Footer /> */}
        </>
    )
}

export default Home