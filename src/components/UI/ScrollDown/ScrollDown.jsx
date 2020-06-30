import React from 'react'
import classes from './ScrollDown.module.css'

const ScrollDown = props => {
    const ref = React.createRef()
    return (
        <span
            ref={ref}
            className={classes.ScrollDown}
            onClick={() => {
                ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }}
        ></span>
    )
}

export default ScrollDown
