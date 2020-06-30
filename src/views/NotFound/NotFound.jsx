import React from 'react'
import classes from './NotFound.module.css'
import { Link } from 'react-router-dom'

const NotFound = props => (
    <div className={classes.NotFound}>
        <h1>404</h1>
        <p>We can't seem to find the page you are looking for</p>
        <Link to="/">Get back to home</Link>
    </div>
)

export default NotFound
