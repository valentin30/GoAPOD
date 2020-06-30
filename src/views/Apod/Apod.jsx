import React, { Component } from 'react'
import Loader from '../../components/UI/Loader/Loader'
import PostComponent from '../../components/Posts/Post/Post'
import { Redirect } from 'react-router-dom'

class Apod extends Component {
    state = {
        article: null,
        noArticle: null,
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        fetch(`${process.env.REACT_APP_API_URL}/apod`)
            .then(res => res.json())
            .then(json => {
                if (json.message) {
                    this.setState({
                        noArticle: json.message,
                    })
                    return
                }
                console.log(json)
                json.date = new Date(json.date).toString().slice(3, 15)
                json.liked = false
                json.date = this.setState({ article: json })
            })
            .catch(err => {
                console.log(err)
                this.props.history.push('/not-found')
            })
    }
    render() {
        let article = <Loader />
        if (this.state.article) {
            article = <PostComponent {...this.state.article} like={this.like} />
        } else if (this.state.noArticle) {
            article = <Redirect to={'/not-found'} />
        }
        return <>{article}</>
    }
}

export default Apod
