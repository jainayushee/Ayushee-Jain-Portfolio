import React, { Fragment } from 'react';

import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            
            <Footer />
        </Fragment>
    )
}

export default Home;