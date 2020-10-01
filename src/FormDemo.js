import React, { Component } from 'react'

export default class FormDemo extends Component {
    state={
        userName: ""
    }
    changeName= (event) => {
        this.setState({userName: event.target.value})

    }

    

    render() {
        return (
            <div>
                <form>
                    <h3>User Name</h3>
                    <input type="text" onChange={this.changeName}></input>
                    <h3>User Name : {this.state.userName} </h3>
                </form>
            </div>
        )
    }
}
