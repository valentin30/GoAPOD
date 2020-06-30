import React, { Component } from 'react'
import classes from './Nav.module.css'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../../UI/Logo/Logo'
import Burger from '../../UI/Burger/Burger'
import AuthContext from '../../../context/authContext'

class Nav extends Component {
    state = {
        show: false,
    }
    static contextType = AuthContext
    toggle = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show,
            }
        })
    }
    render() {
        return (
            <header className={classes.Nav}>
                <nav>
                    <div style={{ alignSelf: 'center' }}>
                        <Logo />
                    </div>
                    <Burger show={this.state.show} clicked={this.toggle} />
                    <ul>
                        <li>
                            <NavLink
                                activeClassName={classes.Active}
                                to="/posts"
                            >
                                Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName={classes.Active}
                                to="/apod"
                            >
                                Today's Picture
                            </NavLink>
                        </li>
                        <li>
                            {this.context.id ? (
                                <button
                                    className={classes.Button}
                                    onClick={this.context.authenticate}
                                >
                                    Logout
                                </button>
                            ) : (
                                <NavLink
                                    activeClassName={classes.Active}
                                    to="/signin"
                                >
                                    Sign in
                                </NavLink>
                            )}
                        </li>
                    </ul>
                </nav>
                <ul
                    onClick={this.toggle}
                    className={classes.Drawer}
                    style={
                        this.state.show
                            ? { height: '150px' }
                            : { height: '0px' }
                    }
                >
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/apod">Today's Picture</Link>
                    </li>
                    <li>
                        {this.context.id ? (
                            <button
                                className={classes.Button}
                                onClick={this.context.authenticate}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/signin">Sign in</Link>
                        )}
                    </li>
                </ul>
            </header>
        )
    }
}

export default Nav
