import React from 'react'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import classes from './Layout.module.css'

const Layout = props => (
    <>
        <Nav />
        <main className={classes.Main}>{props.children}</main>
        <Footer />
    </>
)

export default Layout
