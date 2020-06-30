import React from 'react'
import classes from './Heading.module.css'
import ScrollDown from '../ScrollDown/ScrollDown'
import Galaxy from '../../../assets/images/Galaxy.png'

const Heading = props => (
    <div className={classes.Heading}>
        <div>
            <h1>Discover the cosmos!</h1>
            <p>
                Each day a different image or photograph of our fascinating
                universe is featured, along with a brief explanation written by
                a professional astronomer.
            </p>
        </div>
        <ScrollDown />
        <img src={Galaxy} alt="" className={classes.Galaxy} />
    </div>
)

export default Heading
