import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home'
import Apod from './views/Apod/Apod'
import Posts from './views/Posts/Posts'
import Post from './views/Post/Post'
import NotFound from './views/NotFound/NotFound'
import AuthContext from './context/authContext'
import CreatePost from './views/CreatePost/CreatePost'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
        }
        this.authenticateHandler = this.authenticateHandler.bind(this)
    }
    authenticateHandler(id = null) {
        this.setState({ id })
    }
    render() {
        return (
            <BrowserRouter>
                <AuthContext.Provider
                    value={{
                        id: this.state.id,
                        authenticate: this.authenticateHandler,
                    }}
                >
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/apod" component={Apod} />
                            <Route exact path="/posts" component={Posts} />
                            <Route exact path="/posts/:id" component={Post} />
                            <Route exact path="/signin" />
                            <Route
                                exact
                                path="/create"
                                component={CreatePost}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </AuthContext.Provider>
            </BrowserRouter>
        )
    }
}

export default App
