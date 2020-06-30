import React from 'react'
import classes from './PostCard.module.css'
import { Link } from 'react-router-dom'
import Date from '../../UI/Date/Date'

const PostCard = props => {
    return (
        <div className={classes.PostCard}>
            <img src={props.imageUrl} alt="" />
            <div className={classes.Content}>
                <h1>{props.title}</h1>
                <Date>{props.date}</Date>
            </div>
            <div className={classes.Button}>
                <Link to={`/posts/${props.id}`}>
                    Learn more
                    <span className="material-icons">call_made</span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard
