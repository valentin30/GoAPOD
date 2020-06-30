import React from 'react'
import classes from './Burger.module.css'

const Burger = props => {
    const styles = [classes.Burger]
    if (props.show) {
        styles.push(classes.Active)
    }
    return (
        <div className={styles.join(' ')} onClick={props.clicked}>
            <div className={classes.Pipe}></div>
            <div className={classes.Dynamic}>
                <div></div>
                <div></div>
            </div>
            <div className={classes.Pipe}></div>
        </div>
    )
}

export default Burger
