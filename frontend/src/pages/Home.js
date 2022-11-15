import React from 'react'
import About from '../components/About';
import Banner from "../components/Banner";
import Footer from '../components/Footer';
import Header from '../components/Header';
import TopPicks from '../components/TopPicks';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <TopPicks />
            <About />
            <Footer />
        </>
    )
}

export default Home