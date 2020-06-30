import React, { Component } from 'react'
import classes from './Posts.module.css'
import Loader from '../../components/UI/Loader/Loader'
import PostCard from '../../components/Posts/PostCard/PostCard'

class Posts extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        fetch(`${process.env.REACT_APP_API_URL}/articles`)
            .then(res => res.json())
            .then(json => {
                json = json.map(j => {
                    j.date = new Date(j.date).toString().slice(3, 15)
                    return j
                })
                this.setState({ posts: json })
            })
            .catch(err => {
                this.props.history.push('/not-found')
            })
    }
    render() {
        let posts = (
            <div className={classes.Loader}>
                <Loader />
            </div>
        )
        if (this.state.posts.length) {
            posts = this.state.posts.map(p => {
                return <PostCard className={classes.Post} key={p.id} {...p} />
            })
        }
        return <div className={classes.Posts}>{posts}</div>
    }
}

export default Posts
