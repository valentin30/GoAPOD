import React from 'react'
import classes from './Date.module.css'

const Date = props => (
    <div className={classes.Date}>
        <span className="material-icons">query_builder</span>
        <p>{props.children}</p>
    </div>
)

export default Date
