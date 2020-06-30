import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.css'

const Logo = props => (
    <Link className={classes.Logo} to="/">
        GoAPOD
    </Link>
)

export default Logo
