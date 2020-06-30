import React, { Component } from 'react'
import classes from './CreatePost.module.css'

class CreatePost extends Component {
    state = {
        eventName: '',
        date: null,
        lat: 0,
        long: 0,
        selected: null,
    }

    render() {
        let disabled = true
        if (
            this.state.eventName.trim().length > 6 &&
            this.state.date &&
            this.state.lat &&
            this.state.long
        ) {
            disabled = false
        }
        return (
            <div className={classes.CreatePost}>
                <form>
                    <h1>Event</h1>
                    <label htmlFor="eventName">Name</label>
                    <input
                        type="text"
                        name="eventName"
                        value={this.state.eventName}
                        onChange={event => {
                            this.setState({ eventName: event.target.value })
                        }}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={this.state.date}
                        onChange={event => {
                            this.setState({ date: event.target.value })
                        }}
                    />
                    <div className={classes.Location}>
                        <div>
                            <label htmlFor="lat">Lat</label>
                            <input
                                type="number"
                                step="0.01"
                                name="lat"
                                value={this.state.lat}
                                onChange={event => {
                                    if (event.target.value < 0) return
                                    this.setState({
                                        lat: event.target.value,
                                    })
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="long">Long</label>
                            <input
                                type="number"
                                step="0.01"
                                name="long"
                                value={this.state.long}
                                onChange={event => {
                                    if (event.target.value < 0) return
                                    this.setState({
                                        long: event.target.value,
                                    })
                                }}
                            />
                        </div>
                    </div>

                    <div className={classes.Separator}>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>

                    <div className={classes.Button}>
                        <button disabled={disabled} type="submit">
                            Next{' '}
                            <span className="material-icons">call_made</span>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePost
