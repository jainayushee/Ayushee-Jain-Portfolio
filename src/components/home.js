import React, { Fragment } from 'react';

import Header from './header'
import Navbar from './navbar'
import Projects from './projects'
import Footer from './footer'

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Header />
            <Projects />
            <Footer />
        </Fragment>
    )
}

export default Home;