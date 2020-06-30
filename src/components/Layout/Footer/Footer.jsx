import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../UI/Logo/Logo'
import Reference from './Reference/Reference'

const Footer = props => (
    <footer className={classes.Footer}>
        <div className={classes.Content}>
            <div>
                <Logo />
                <Reference>
                    <p>Contact</p>
                    <p>engage@goapod.com </p>
                    <p>975 420 6969</p>
                </Reference>
                <Reference>
                    <p>Follow</p>
                    <a href="https://www.facebook.com/">Facebook</a>
                    <a href="https://www.instagram.com/">Instagram</a>
                </Reference>
                <Reference>
                    <p>About</p>
                    <p>
                        The Astronomy Picture of the Day (APOD) is based upon
                        work supported by NASA
                    </p>
                </Reference>
            </div>
            <p className={classes.Rights}>
                © 2020 GoAPOD. All Rights Reserved.
            </p>
        </div>
    </footer>
)

export default Footer
