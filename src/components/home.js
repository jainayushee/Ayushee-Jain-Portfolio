import React, { Fragment } from 'react';

import Header from './header'
import Intro from './about'
import Navbar from './navbar'
import Footer from './footer'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
        
            <Intro />
            <Footer />
        </Fragment>
    )
}

export default Home;