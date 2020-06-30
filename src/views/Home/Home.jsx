import React, { Component } from 'react'
import Heading from '../../components/UI/Heading/Heading'
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
import AuthContext from '../../context/authContext'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topArticles: [],
            scroll: 0,
        }
        this.imageRef = React.createRef()
        this.nextImageHandler = this.nextImageHandler.bind(this)
        this.prevImageHandler = this.prevImageHandler.bind(this)
        this.onLike = this.onLike.bind(this)
    }
    static contextType = AuthContext
    async componentDidMount() {
        window.scrollTo(0, 0)
        fetch(`${process.env.REACT_APP_API_URL}/top-articles?limit=3`)
            .then(res => res.json())
            .then(json => {
                json = json.map(j => {
                    return { ...j, liked: false }
                })
                this.setState({ topArticles: json })
            })
            .catch(err => {
                console.log('Error occured')
            })
    }
    onLike(id) {
        if (!this.context.id) {
            // Show sign in modal
        }
        const articleIndex = this.state.topArticles.findIndex(
            element => element.id === id
        )
        const modified = [...this.state.topArticles]
        modified[articleIndex].liked = !modified[articleIndex].liked
        this.setState({ topArticles: modified })
    }
    nextImageHandler() {
        this.setState(prevState => {
            return prevState.scroll ===
                -(prevState.topArticles.length - 1) *
                    this.imageRef.current.clientWidth
                ? { scroll: 0 }
                : {
                      scroll:
                          prevState.scroll - this.imageRef.current.clientWidth,
                  }
        })
    }
    prevImageHandler() {
        this.setState(prevState => {
            return prevState.scroll === 0
                ? {
                      scroll:
                          -(prevState.topArticles.length - 1) *
                          this.imageRef.current.clientWidth,
                  }
                : {
                      scroll:
                          prevState.scroll + this.imageRef.current.clientWidth,
                  }
        })
    }
    render() {
        return (
            <>
                <Heading />
                <ImageSlider
                    articles={this.state.topArticles}
                    scroll={this.state.scroll}
                    next={this.nextImageHandler}
                    prev={this.prevImageHandler}
                    ref={this.imageRef}
                    onLike={this.onLike}
                />
            </>
        )
    }
}

export default Home
