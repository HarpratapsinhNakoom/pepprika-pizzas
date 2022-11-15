import React from 'react'
import Banner from "../components/Banner";
import Menu from '../components/Menu';
import TopPicks from '../components/TopPicks';

function Home() {
    return (
        <>
            <Banner />
            <TopPicks />
            <Menu />
        </>
    )
}

export default Home