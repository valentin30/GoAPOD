import React from 'react'
import classes from './Post.module.css'
import ScrollDown from '../../UI/ScrollDown/ScrollDown'
import Date from '../../UI/Date/Date'

const Post = props => {
    return (
        <>
            <div className={classes.Image}>
                <img src={props.imageUrl} alt="" />
                <span
                    className={['material-icons', classes.Like].join(' ')}
                    style={props.liked ? { color: 'tomato' } : null}
                    onClick={props.onLike}
                >
                    {props.liked ? 'favorite' : 'favorite_border'}
                </span>
                <ScrollDown />
            </div>
            <div className={classes.Content}>
                <h1>{props.title}</h1>
                <div className={classes.Date}>
                    <Date>{props.date}</Date>
                </div>
                <p className={classes.Text}>{props.text}</p>
                <p className={classes.Author}>Author: {props.authorName}</p>
                <p className={classes.Event}>Event: {props.eventName}</p>
            </div>
        </>
    )
}

export default Post
