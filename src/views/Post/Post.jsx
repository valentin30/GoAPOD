import React, { Component } from 'react'
import Loader from '../../components/UI/Loader/Loader'
import PostComponent from '../../components/Posts/Post/Post'
import { Redirect } from 'react-router-dom'
import AuthContext from '../../context/authContext'

class Post extends Component {
    state = {
        article: null,
        noArticle: false,
    }
    static contextType = AuthContext
    componentDidMount() {
        window.scrollTo(0, 0)
        fetch(
            `${process.env.REACT_APP_API_URL}/articles/${this.props.match.params.id}`
        )
            .then(res => res.json())
            .then(json => {
                if (json.message) {
                    this.setState({
                        noArticle: true,
                    })
                    return
                }
                console.log(json)
                json.date = new Date(json.date).toString().slice(3, 15)
                json.liked = false
                this.setState({ article: json })
            })
            .catch(err => {
                console.log(err)
                this.props.history.push('/not-found')
            })
    }
    onLike = () => {
        if (!this.context.id) {
            // Show sign in modal
        }
        const article = { ...this.state.article }
        article.liked = !article.liked
        this.setState({ article })
    }
    render() {
        let article = <Loader />
        if (this.state.article) {
            article = (
                <PostComponent {...this.state.article} onLike={this.onLike} />
            )
        } else if (this.state.noArticle) {
            article = <Redirect to={'/not-found'} />
        }
        return <>{article}</>
    }
}

export default Post
