import React from 'react'
import classes from './ImageSlider.module.css'
import { Link } from 'react-router-dom'

const ImageSlider = React.forwardRef((props, ref) => {
    const articles = props.articles.length ? (
        props.articles.map(a => {
            return (
                <div
                    key={a.id}
                    style={{ transform: `translate(${props.scroll}px)` }}
                >
                    <Link className={classes.Link} to={`/posts/${a.id}`}></Link>
                    <img src={a.imageUrl} alt="" />
                    <span
                        className={['material-icons', classes.Like].join(' ')}
                        style={a.liked ? { color: 'tomato' } : null}
                        onClick={props.like.bind(this, a.id)}
                    >
                        {a.liked ? 'favorite' : 'favorite_border'}
                    </span>
                </div>
            )
        })
    ) : (
        <p className={classes.Loading}>...Loading</p>
    )
    return (
        <div className={classes.ImageSlider}>
            <h2>Top Rated Posts</h2>
            <div className={classes.Slider} ref={ref}>
                {articles}
                <span onClick={props.prev} className={classes.Prev}></span>
                <span onClick={props.next} className={classes.Next}></span>
            </div>
        </div>
    )
})

export default ImageSlider
